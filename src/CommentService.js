const Comment = require('./Comment');
const Movie = require('./Movie');
const MovieService = require('./MovieService');

class CommentService {
  static async createComment(userId, tmdbId, payload) {
    const { text, score, headline, containsSpoilers, mediaType } = payload;
    if (!text || !String(text).trim()) {
      throw new Error('Debes escribir tu opinion sobre la pelicula o serie');
    }
    const numericScore = Number(score);
    if (!numericScore || numericScore < 1 || numericScore > 10) {
      throw new Error('El puntaje debe estar entre 1 y 10');
    }

    const cleanText = String(text).trim();
    if (cleanText.length > 500) {
      throw new Error('La reseña no puede superar los 500 caracteres');
    }
    const cleanHeadline = headline ? String(headline).trim().slice(0, 90) : '';

    // Si la pelicula/serie no existe en nuestra DB, MovieService la busca en TMDB y la guarda
    const movie = await MovieService.getMovie(tmdbId, mediaType || 'movie');

    const newComment = new Comment({
      userId: String(userId),
      movieId: String(movie._id),
      tmdbId: Number(movie.tmdbId),
      headline: cleanHeadline,
      text: cleanText,
      score: numericScore,
      containsSpoilers: Boolean(containsSpoilers)
    });

    await newComment.save();

    const populated = await Comment.findById(newComment._id).populate('userId', 'name email role avatar specialty');
    const updatedMovie = await Movie.findById(movie._id);

    return {
      comment: populated,
      movieStats: updatedMovie ? updatedMovie.stats : movie.stats
    };
  }

  static async getCommentsByMovie(tmdbId, roleFilter = 'all') {
    const movie = await Movie.findOne({ tmdbId: Number(tmdbId) });
    if (!movie) return [];

    let comments = await Comment.find({ movieId: String(movie._id) })
      .populate('userId', 'name email role avatar specialty')
      .sort({ createdAt: -1 });

    if (roleFilter === 'critic' || roleFilter === 'normal') {
      comments = comments.filter(c => (c.userId?.role || 'normal') === roleFilter);
    }

    return comments;
  }

  static async getCommentsByUser(userId) {
    const comments = await Comment.find({ userId: String(userId) })
      .populate('userId', 'name email role avatar specialty')
      .populate('movieId', 'tmdbId title coverUrl mediaType releaseDate genres stats')
      .sort({ createdAt: -1 });
    return comments;
  }

  static async getAllRecentComments(limit = 30) {
    return await Comment.find({})
      .populate('userId', 'name email role avatar specialty')
      .populate('movieId', 'tmdbId title coverUrl mediaType releaseDate genres stats')
      .sort({ createdAt: -1 })
      .limit(limit);
  }

  static async updateComment(commentId, userId, payload) {
    const existing = await Comment.findById(commentId);
    if (!existing) {
      throw new Error('Comentario no encontrado');
    }
    if (String(existing.userId) !== String(userId)) {
      throw new Error('Solo puedes editar tus propios comentarios');
    }

    const updateFields = {};
    if (payload.text !== undefined) {
      const cleanText = String(payload.text).trim();
      if (!cleanText) {
        throw new Error('El texto del comentario no puede estar vacio');
      }
      if (cleanText.length > 500) {
        throw new Error('La reseña no puede superar los 500 caracteres');
      }
      updateFields.text = cleanText;
    }
    if (payload.score !== undefined) {
      const numericScore = Number(payload.score);
      if (isNaN(numericScore) || numericScore < 1 || numericScore > 10) {
        throw new Error('El puntaje debe estar entre 1 y 10');
      }
      updateFields.score = numericScore;
    }
    if (payload.headline !== undefined) {
      updateFields.headline = String(payload.headline).trim().slice(0, 90);
    }
    if (payload.containsSpoilers !== undefined) {
      updateFields.containsSpoilers = Boolean(payload.containsSpoilers);
    }

    await Comment.findByIdAndUpdate(commentId, updateFields);
    const updatedMovie = await Comment.recalculateMovieStats(existing.movieId);
    const populated = await Comment.findById(commentId)
      .populate('userId', 'name email role avatar specialty')
      .populate('movieId', 'tmdbId title coverUrl mediaType releaseDate');

    return {
      comment: populated,
      movieStats: updatedMovie ? updatedMovie.stats : null
    };
  }

  static async deleteComment(commentId, userId) {
    const existing = await Comment.findById(commentId);
    if (!existing) {
      throw new Error('Comentario no encontrado');
    }
    if (String(existing.userId) !== String(userId)) {
      throw new Error('Solo puedes eliminar tus propios comentarios');
    }

    const movieId = existing.movieId;
    await Comment.findByIdAndDelete(commentId);
    const updatedMovie = await Comment.recalculateMovieStats(movieId);

    return {
      deletedId: commentId,
      movieStats: updatedMovie ? updatedMovie.stats : null
    };
  }
}

module.exports = CommentService;
