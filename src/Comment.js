const mongoose = require('mongoose');
const { createHybridModel } = require('./LocalStore');
const Movie = require('./Movie');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  tmdbId: { type: Number },
  headline: { type: String, default: '' },
  text: { type: String, required: true },
  score: { type: Number, min: 1, max: 10, required: true },
  containsSpoilers: { type: Boolean, default: false }
}, { timestamps: true });

async function recalculateMovieStats(movieId) {
  if (!movieId) return null;
  const CommentModel = module.exports;
  const comments = await CommentModel.find({ movieId: String(movieId) }).populate('userId', 'role name');

  let criticSum = 0;
  let criticCount = 0;
  let normalSum = 0;
  let normalCount = 0;

  comments.forEach(c => {
    const score = Number(c.score) || 0;
    if (c.userId && c.userId.role === 'critic') {
      criticSum += score;
      criticCount++;
    } else {
      normalSum += score;
      normalCount++;
    }
  });

  const totalCount = criticCount + normalCount;
  const criticAvg = criticCount > 0 ? Number((criticSum / criticCount).toFixed(1)) : 0;
  const normalAvg = normalCount > 0 ? Number((normalSum / normalCount).toFixed(1)) : 0;
  const totalAvg = totalCount > 0 ? Number(((criticSum + normalSum) / totalCount).toFixed(1)) : 0;

  await Movie.findByIdAndUpdate(movieId, {
    'stats.averageScore': totalAvg,
    'stats.criticScore': criticAvg,
    'stats.normalScore': normalAvg,
    'stats.criticCount': criticCount,
    'stats.normalCount': normalCount,
    'stats.totalReviews': totalCount
  });
  return await Movie.findById(movieId);
}

commentSchema.post('save', async function(doc) {
  await recalculateMovieStats(doc.movieId);
});

const MongooseComment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

const Comment = createHybridModel(
  'Comment',
  'comments',
  MongooseComment,
  () => ({
    headline: '',
    containsSpoilers: false
  }),
  async function(doc) {
    await recalculateMovieStats(doc.movieId);
  }
);

Comment.recalculateMovieStats = recalculateMovieStats;

module.exports = Comment;
