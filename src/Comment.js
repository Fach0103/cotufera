const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  text: { type: String, required: true },
  score: { type: Number, min: 1, max: 10, required: true }
}, { timestamps: true });

// Este codigo se ejecuta automaticamente despues de guardar un comentario
commentSchema.post('save', async function(doc) {
  // Buscamos todos los comentarios de esta pelicula e incluimos el rol del usuario
  const comments = await this.model('Comment').find({ movieId: doc.movieId }).populate('userId', 'role');
  
  let criticSum = 0, criticCount = 0;
  let normalSum = 0, normalCount = 0;

  comments.forEach(c => {
    if (c.userId && c.userId.role === 'critic') {
      criticSum += c.score; criticCount++;
    } else {
      normalSum += c.score; normalCount++;
    }
  });

  const criticAvg = criticCount > 0 ? criticSum / criticCount : 0;
  const normalAvg = normalCount > 0 ? normalSum / normalCount : 0;
  const totalAvg = (criticSum + normalSum) / (criticCount + normalCount);

  // Actualizamos los promedios en la coleccion Movie
  await mongoose.model('Movie').findByIdAndUpdate(doc.movieId, {
    'stats.averageScore': totalAvg,
    'stats.criticScore': criticAvg,
    'stats.normalScore': normalAvg,
    'stats.totalReviews': comments.length
  });
});

module.exports = mongoose.model('Comment', commentSchema);