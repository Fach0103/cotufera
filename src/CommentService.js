const Comment = require('./Comment');
const Movie = require('./Movie');
const MovieService = require('./MovieService'); 

class CommentService {
  static async createComment(userId, tmdbId, text, score) {
    // Si la pelicula no existe en nuestra DB, MovieService la busca en TMDB y la guarda
    const movie = await MovieService.getMovie(tmdbId);

    const newComment = new Comment({
      userId,
      movieId: movie._id, // Usamos el ID interno de Mongo
      text,
      score
    });

    return await newComment.save();
  }

  static async getCommentsByMovie(tmdbId) {
    const movie = await Movie.findOne({ tmdbId });
    if (!movie) return [];

    // Retorna los comentarios mostrando el nombre y rol del usuario
    return await Comment.find({ movieId: movie._id })
      .populate('userId', 'name role')
      .sort({ createdAt: -1 }); 
  }
}

module.exports = CommentService;