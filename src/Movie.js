const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  tmdbId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  synopsis: { type: String },
  releaseDate: { type: Date },
  coverUrl: { type: String },
  genres: [{ type: String }],
  actors: [{ type: String }],
  stats: {
    averageScore: { type: Number, default: 0 },
    criticScore: { type: Number, default: 0 },
    normalScore: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 }
  }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);