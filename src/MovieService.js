const Movie = require('./Movie');
const TmdbService = require('./TmdbService');

class MovieService {
  static async getMovie(tmdbId) {
    let movie = await Movie.findOne({ tmdbId });
    if (movie) return movie;

    const tmdbData = await TmdbService.fetchMovieDetails(tmdbId);

    const newMovieData = {
      tmdbId: tmdbData.id,
      title: tmdbData.title,
      synopsis: tmdbData.overview,
      releaseDate: tmdbData.release_date,
      coverUrl: tmdbData.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : null,
      genres: tmdbData.genres.map(g => g.name),
      actors: tmdbData.credits && tmdbData.credits.cast ? tmdbData.credits.cast.slice(0, 5).map(a => a.name) : []
    };

    movie = new Movie(newMovieData);
    return await movie.save();
  }

  static async getAllMovies(filters = {}) {
    const query = {};
    
    if (filters.title) query.title = { $regex: filters.title, $options: 'i' };
    if (filters.category) query.genres = filters.category;

    let sortOptions = { releaseDate: -1 };
    if (filters.sortBy === 'score') sortOptions = { 'stats.averageScore': -1 };

    return await Movie.find(query).sort(sortOptions);
  }
}

module.exports = MovieService;