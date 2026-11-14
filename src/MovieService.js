const Movie = require('./Movie');
const TmdbService = require('./TmdbService');

function stripAccents(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

class MovieService {
  static async getMovie(tmdbId, preferredType = 'movie') {
    const numericId = Number(tmdbId);
    if (!numericId || isNaN(numericId)) {
      throw new Error('ID de TMDB invalido');
    }

    let movie = await Movie.findOne({ tmdbId: numericId });
    if (movie) {
      // Si la pelicula guardada tenia pocos actores (<= 8), ampliamos el reparto desde TMDB
      if (!movie.castDetails || movie.castDetails.length <= 8) {
        try {
          const fresh = await TmdbService.fetchMovieDetails(numericId, movie.mediaType || preferredType);
          if (fresh.castDetails && fresh.castDetails.length > (movie.castDetails?.length || 0)) {
            await Movie.findByIdAndUpdate(movie._id, {
              castDetails: fresh.castDetails,
              actors: fresh.actors
            });
            movie = await Movie.findOne({ tmdbId: numericId });
          }
        } catch (err) {
          // Conserva los actores actuales si no hay red
        }
      }
      return movie;
    }

    const tmdbData = await TmdbService.fetchMovieDetails(numericId, preferredType);
    movie = new Movie(tmdbData);
    return await movie.save();
  }

  static async syncExternalSearchToLocal(query, mediaType = 'multi', maxImports = 5) {
    const externalResults = await TmdbService.searchExternal(query, mediaType);
    const synced = [];

    for (const item of externalResults.slice(0, maxImports)) {
      try {
        const movie = await this.getMovie(item.tmdbId, item.mediaType);
        if (movie) synced.push(movie);
      } catch (err) {
        // Ignora items que fallen individualmente
      }
    }
    return synced;
  }

  static async getAllMovies(filters = {}) {
    const searchTitle = (filters.title || filters.search || filters.q || '').trim();
    const category = (filters.category || filters.genre || '').trim();
    const mediaType = (filters.mediaType || filters.type || '').trim();
    const year = (filters.year || '').trim();
    const dateFrom = (filters.dateFrom || '').trim();
    const dateTo = (filters.dateTo || '').trim();
    const minScore = filters.minScore !== undefined && filters.minScore !== '' ? Number(filters.minScore) : null;
    const scoreType = filters.scoreType || 'average'; // 'average' | 'critic' | 'normal'
    const sortBy = filters.sortBy || 'date'; // 'date' | 'score' | 'criticScore' | 'normalScore' | 'title'
    const sortOrder = filters.sortOrder === 'asc' ? 1 : -1;

    let allMovies = await Movie.find({});

    // Si el usuario busca por nombre y hay pocos resultados locales (o pide sincronizar con API externa),
    // consultamos automaticamente TMDB y guardamos las peliculas/series nuevas en nuestra DB local.
    if (searchTitle.length >= 2) {
      const normalizedSearch = stripAccents(searchTitle);
      const localMatches = allMovies.filter(m =>
        stripAccents(m.title).includes(normalizedSearch) ||
        stripAccents(m.originalTitle).includes(normalizedSearch)
      );

      if (localMatches.length < 3 || filters.external === 'true') {
        const searchType = (mediaType === 'movie' || mediaType === 'tv') ? mediaType : 'multi';
        await this.syncExternalSearchToLocal(searchTitle, searchType, 5);
        allMovies = await Movie.find({});
      }
    }

    // Aplicamos todos los filtros en memoria de forma insensible a tildes y mayusculas
    let filtered = allMovies.filter(movie => {
      // 1. Filtro por nombre / actor / director
      if (searchTitle) {
        const normQ = stripAccents(searchTitle);
        const inTitle = stripAccents(movie.title).includes(normQ);
        const inOrig = stripAccents(movie.originalTitle).includes(normQ);
        const inDir = stripAccents(movie.director).includes(normQ);
        const inActors = Array.isArray(movie.actors) && movie.actors.some(a =>
          stripAccents(typeof a === 'string' ? a : a?.name).includes(normQ)
        );
        if (!inTitle && !inOrig && !inDir && !inActors) return false;
      }

      // 2. Filtro por tipo (Pelicula vs Serie)
      if (mediaType && mediaType !== 'all' && mediaType !== 'todos') {
        const targetType = (mediaType === 'series' || mediaType === 'tv') ? 'tv' : 'movie';
        if ((movie.mediaType || 'movie') !== targetType) return false;
      }

      // 3. Filtro por categoria / genero (ej. Accion, Drama, Misterio)
      if (category && category !== 'all' && category !== 'Todas') {
        const normCat = stripAccents(category).replace(/s$/, ''); // "misterios" -> "misterio"
        const hasGenre = Array.isArray(movie.genres) && movie.genres.some(g =>
          stripAccents(g).includes(normCat) || normCat.includes(stripAccents(g))
        );
        if (!hasGenre) return false;
      }

      // 4. Filtro por año o rango de fechas
      const relDateStr = movie.releaseDate ? String(movie.releaseDate).slice(0, 10) : '';
      const relYear = relDateStr ? relDateStr.slice(0, 4) : '';
      if (year && year !== 'all' && year !== 'Todos') {
        if (relYear !== String(year)) return false;
      }
      if (dateFrom && relDateStr && relDateStr < dateFrom) return false;
      if (dateTo && relDateStr && relDateStr > dateTo) return false;

      // 5. Filtro por puntuacion minima
      if (minScore !== null && !isNaN(minScore) && minScore > 0) {
        const stats = movie.stats || {};
        let targetScore = stats.averageScore || 0;
        if (scoreType === 'critic') targetScore = stats.criticScore || 0;
        if (scoreType === 'normal') targetScore = stats.normalScore || 0;
        if (targetScore < minScore) return false;
      }

      return true;
    });

    // Ordenamiento (Sorting por puntaje o por fecha)
    filtered.sort((a, b) => {
      if (sortBy === 'score') {
        const scoreA = a.stats?.averageScore || 0;
        const scoreB = b.stats?.averageScore || 0;
        if (scoreA !== scoreB) return (scoreA - scoreB) * sortOrder;
        return ((a.stats?.totalReviews || 0) - (b.stats?.totalReviews || 0)) * sortOrder;
      }
      if (sortBy === 'criticScore') {
        const scoreA = a.stats?.criticScore || 0;
        const scoreB = b.stats?.criticScore || 0;
        return (scoreA - scoreB) * sortOrder;
      }
      if (sortBy === 'normalScore') {
        const scoreA = a.stats?.normalScore || 0;
        const scoreB = b.stats?.normalScore || 0;
        return (scoreA - scoreB) * sortOrder;
      }
      if (sortBy === 'title') {
        return String(a.title || '').localeCompare(String(b.title || '')) * (sortOrder === -1 ? 1 : -1);
      }
      // Default: 'date' (por fecha de publicacion)
      const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return (dateA - dateB) * sortOrder;
    });

    return filtered;
  }

  static async getMeta() {
    const movies = await Movie.find({});
    const genreSet = new Set(['Acción', 'Drama', 'Misterio', 'Ciencia ficción', 'Comedia', 'Thriller', 'Terror', 'Animación', 'Crimen', 'Fantasía', 'Aventura', 'Romance']);
    const yearSet = new Set();

    movies.forEach(m => {
      (m.genres || []).forEach(g => genreSet.add(g));
      if (m.releaseDate) {
        const y = String(m.releaseDate).slice(0, 4);
        if (/^\d{4}$/.test(y)) yearSet.add(y);
      }
    });

    return {
      genres: Array.from(genreSet),
      years: Array.from(yearSet).sort((a, b) => Number(b) - Number(a)),
      totalCatalog: movies.length,
      moviesCount: movies.filter(m => (m.mediaType || 'movie') === 'movie').length,
      seriesCount: movies.filter(m => m.mediaType === 'tv').length
    };
  }
}

module.exports = MovieService;
