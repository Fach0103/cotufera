const MovieService = require('./MovieService');
const ApiResponse = require('./ApiResponse');

class MovieController {
  static async getAll(req, res) {
    try {
      const movies = await MovieService.getAllMovies(req.query);
      return ApiResponse.success(res, movies, 'Lista de peliculas y series');
    } catch (error) {
      return ApiResponse.error(res, error.message, 500);
    }
  }

  static async getMeta(req, res) {
    try {
      const meta = await MovieService.getMeta();
      return ApiResponse.success(res, meta, 'Metadatos del catalogo');
    } catch (error) {
      return ApiResponse.error(res, error.message, 500);
    }
  }

  static async discoverExternal(req, res) {
    try {
      const query = req.query.q || req.query.title || '';
      const type = req.query.type || 'multi';
      if (!query.trim()) {
        return ApiResponse.error(res, 'Debe indicar un termino de busqueda', 400);
      }
      const synced = await MovieService.syncExternalSearchToLocal(query, type, 6);
      return ApiResponse.success(res, synced, `Se sincronizaron ${synced.length} titulos desde TMDB`);
    } catch (error) {
      return ApiResponse.error(res, error.message, 500);
    }
  }

  static async getOne(req, res) {
    try {
      const tmdbId = parseInt(req.params.id);
      const preferredType = req.query.type || 'movie';
      const movie = await MovieService.getMovie(tmdbId, preferredType);
      return ApiResponse.success(res, movie, 'Pelicula o serie obtenida con exito');
    } catch (error) {
      return ApiResponse.error(res, error.message, 404);
    }
  }
}

module.exports = MovieController;
