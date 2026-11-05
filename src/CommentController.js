const CommentService = require('./CommentService');
const ApiResponse = require('./ApiResponse');

class CommentController {
  static async create(req, res) {
    try {
      const tmdbId = parseInt(req.params.tmdbId);
      const { text, score } = req.body;
      const userId = req.user.id; // Este dato viene del AuthMiddleware

      const comment = await CommentService.createComment(userId, tmdbId, text, score);
      return ApiResponse.success(res, comment, 'Comentario publicado', 201);
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async getByMovie(req, res) {
    try {
      const tmdbId = parseInt(req.params.tmdbId);
      const comments = await CommentService.getCommentsByMovie(tmdbId);
      return ApiResponse.success(res, comments, 'Comentarios obtenidos');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }
}

module.exports = CommentController;