const MovieService = require('./MovieService');
const ApiResponse = require('./ApiResponse');

class MovieController {
  static async getOne(req, res) {
    try {
      const tmdbId = parseInt(req.params.id);
      const movie = await MovieService.getMovie(tmdbId);
      return ApiResponse.success(res, movie, 'Pelicula obtenida con exito');
    } catch (error) {
      return ApiResponse.error(res, error.message, 404);
    }
  }

  static async getAll(req, res) {
    try {
      const movies = await MovieService.getAllMovies(req.query);
      return ApiResponse.success(res, movies, 'Lista de peliculas');
    } catch (error) {
      return ApiResponse.error(res, error.message, 500);
    }
  }
}

module.exports = MovieController;