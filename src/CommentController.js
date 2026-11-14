const CommentService = require('./CommentService');
const ApiResponse = require('./ApiResponse');

class CommentController {
  static async getAll(req, res) {
    try {
      const comments = await CommentService.getAllRecentComments(40);
      return ApiResponse.success(res, comments, 'Comentarios recientes obtenidos');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async getByUser(req, res) {
    try {
      const { userId } = req.params;
      const comments = await CommentService.getCommentsByUser(userId);
      return ApiResponse.success(res, comments, 'Comentarios del usuario obtenidos');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async getByMovie(req, res) {
    try {
      const tmdbId = parseInt(req.params.tmdbId);
      const roleFilter = req.query.role || 'all';
      const comments = await CommentService.getCommentsByMovie(tmdbId, roleFilter);
      return ApiResponse.success(res, comments, 'Comentarios obtenidos');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async create(req, res) {
    try {
      const tmdbId = parseInt(req.params.tmdbId);
      const userId = req.user.id;
      const result = await CommentService.createComment(userId, tmdbId, req.body);
      return ApiResponse.success(res, result, 'Reseña publicada con exito', 201);
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async update(req, res) {
    try {
      const { commentId } = req.params;
      const userId = req.user ? req.user.id : null;
      const result = await CommentService.updateComment(commentId, userId, req.body);
      return ApiResponse.success(res, result, 'Reseña actualizada con exito');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async remove(req, res) {
    try {
      const { commentId } = req.params;
      const result = await CommentService.deleteComment(commentId, req.user.id);
      return ApiResponse.success(res, result, 'Reseña eliminada con exito');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }
}

module.exports = CommentController;
