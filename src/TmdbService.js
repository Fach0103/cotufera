const axios = require('axios');

class TmdbService {
  static get baseURL() {
    return 'https://api.themoviedb.org/3';
  }

  static get headers() {
    return {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      'Content-Type': 'application/json'
    };
  }

  static normalizeGenreName(name) {
    if (!name) return '';
    const map = {
      'Action & Adventure': 'Acción',
      'Sci-Fi & Fantasy': 'Ciencia ficción',
      'War & Politics': 'Drama',
      'Science Fiction': 'Ciencia ficción',
      'Mystery': 'Misterio',
      'Action': 'Acción',
      'Adventure': 'Aventura',
      'Comedy': 'Comedia',
      'Crime': 'Crimen',
      'Horror': 'Terror',
      'Animation': 'Animación',
      'Fantasy': 'Fantasía',
      'Suspense': 'Thriller'
    };
    return map[name] || name;
  }

  static formatTmdbMedia(data, mediaType = 'movie') {
    const isTv = mediaType === 'tv' || Boolean(data.first_air_date && !data.release_date);
    const actualType = isTv ? 'tv' : 'movie';

    const castRaw = data.credits && Array.isArray(data.credits.cast)
      ? data.credits.cast.slice(0, 18)
      : [];

    const castDetails = castRaw.map(actor => ({
      name: actor.name,
      character: actor.character || 'Reparto principal',
      photoUrl: actor.profile_path
        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(actor.name)}&background=1e2235&color=f5c518`
    }));

    const actors = castDetails.map(a => a.name);

    let director = '';
    if (isTv && Array.isArray(data.created_by) && data.created_by.length > 0) {
      director = data.created_by.map(c => c.name).slice(0, 2).join(', ');
    } else if (data.credits && Array.isArray(data.credits.crew)) {
      const dirObj = data.credits.crew.find(c => c.job === 'Director' || c.job === 'Series Director');
      if (dirObj) director = dirObj.name;
    }
    if (!director) director = isTv ? 'Showrunner Internacional' : 'Dirección Cinematográfica';

    const rawGenres = Array.isArray(data.genres) ? data.genres.map(g => this.normalizeGenreName(g.name)) : [];
    const genres = [...new Set(rawGenres.filter(Boolean))];

    const gallery = [];
    if (data.backdrop_path) {
      gallery.push(`https://image.tmdb.org/t/p/w780${data.backdrop_path}`);
    }
    if (data.images && Array.isArray(data.images.backdrops)) {
      data.images.backdrops.slice(0, 4).forEach(img => {
        const url = `https://image.tmdb.org/t/p/w780${img.file_path}`;
        if (!gallery.includes(url)) gallery.push(url);
      });
    }

    let trailerKey = '';
    if (data.videos && Array.isArray(data.videos.results)) {
      const trailer = data.videos.results.find(v => v.site === 'YouTube' && (v.type === 'Trailer' || v.type === 'Teaser'));
      if (trailer) trailerKey = trailer.key;
    }

    const studio = (Array.isArray(data.production_companies) && data.production_companies[0]?.name)
      || (Array.isArray(data.networks) && data.networks[0]?.name)
      || 'Estudio Internacional';

    const runtime = isTv
      ? (Array.isArray(data.episode_run_time) && data.episode_run_time[0]) || 50
      : data.runtime || 120;

    return {
      tmdbId: Number(data.id),
      mediaType: actualType,
      title: data.title || data.name || 'Sin título',
      originalTitle: data.original_title || data.original_name || data.title || data.name || '',
      tagline: data.tagline || '',
      synopsis: data.overview || 'Sin descripción disponible en español.',
      releaseDate: data.release_date || data.first_air_date || '2024-01-01',
      coverUrl: data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80',
      backdropUrl: data.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
        : (data.poster_path ? `https://image.tmdb.org/t/p/w780${data.poster_path}` : ''),
      gallery,
      genres: genres.length > 0 ? genres : ['Drama'],
      actors,
      castDetails,
      director,
      runtime,
      seasons: isTv ? (data.number_of_seasons || 1) : 0,
      status: isTv
        ? (data.status === 'Ended' ? 'Finalizada' : 'En emisión')
        : 'Estrenada',
      originalLanguage: (data.original_language || 'en').toUpperCase(),
      certification: data.adult ? '+18' : '+13',
      studio,
      trailerKey,
      tmdbScore: data.vote_average ? Number(Number(data.vote_average).toFixed(1)) : 7.5
    };
  }

  static async fetchMovieDetails(tmdbId, preferredType = 'movie') {
    const typesToTry = preferredType === 'tv' ? ['tv', 'movie'] : ['movie', 'tv'];

    for (const type of typesToTry) {
      try {
        const response = await axios.get(
          `${this.baseURL}/${type}/${tmdbId}?language=es-ES&append_to_response=credits,images,videos&include_image_language=es,en,null`,
          { headers: this.headers, timeout: 6000 }
        );
        return this.formatTmdbMedia(response.data, type);
      } catch (err) {
        // Continua probando el siguiente tipo
      }
    }
    throw new Error('No se pudo encontrar la pelicula o serie en TMDB');
  }

  static async searchExternal(query, type = 'multi') {
    if (!query || !query.trim()) return [];
    const endpoint = type === 'movie' ? 'search/movie' : type === 'tv' ? 'search/tv' : 'search/multi';
    try {
      const response = await axios.get(
        `${this.baseURL}/${endpoint}?query=${encodeURIComponent(query.trim())}&language=es-ES&include_adult=false`,
        { headers: this.headers, timeout: 6000 }
      );
      const results = (response.data && response.data.results) || [];
      return results
        .filter(item => item.media_type !== 'person' && (item.poster_path || item.backdrop_path))
        .slice(0, 8)
        .map(item => ({
          tmdbId: item.id,
          mediaType: item.media_type === 'tv' || type === 'tv' || Boolean(item.first_air_date) ? 'tv' : 'movie',
          title: item.title || item.name,
          releaseDate: item.release_date || item.first_air_date || '',
          coverUrl: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
          synopsis: item.overview || ''
        }));
    } catch (error) {
      console.warn('Error buscando en TMDB:', error.message);
      return [];
    }
  }
}

module.exports = TmdbService;
