const mongoose = require('mongoose');
const { createHybridModel } = require('./LocalStore');

const movieSchema = new mongoose.Schema({
  tmdbId: { type: Number, required: true, unique: true },
  mediaType: { type: String, enum: ['movie', 'tv'], default: 'movie' },
  title: { type: String, required: true },
  originalTitle: { type: String, default: '' },
  tagline: { type: String, default: '' },
  synopsis: { type: String, default: '' },
  releaseDate: { type: String, default: '' },
  coverUrl: { type: String, default: '' },
  backdropUrl: { type: String, default: '' },
  gallery: [{ type: String }],
  genres: [{ type: String }],
  actors: [{ type: mongoose.Schema.Types.Mixed }],
  castDetails: [{
    name: { type: String },
    character: { type: String },
    photoUrl: { type: String }
  }],
  director: { type: String, default: '' },
  runtime: { type: Number, default: 0 },
  seasons: { type: Number, default: 0 },
  status: { type: String, default: 'Estrenada' },
  originalLanguage: { type: String, default: 'en' },
  certification: { type: String, default: '+13' },
  studio: { type: String, default: '' },
  trailerKey: { type: String, default: '' },
  tmdbScore: { type: Number, default: 0 },
  stats: {
    averageScore: { type: Number, default: 0 },
    criticScore: { type: Number, default: 0 },
    normalScore: { type: Number, default: 0 },
    criticCount: { type: Number, default: 0 },
    normalCount: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 }
  }
}, { timestamps: true });

const MongooseMovie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

const Movie = createHybridModel('Movie', 'movies', MongooseMovie, () => ({
  mediaType: 'movie',
  originalTitle: '',
  tagline: '',
  synopsis: '',
  releaseDate: '',
  coverUrl: '',
  backdropUrl: '',
  gallery: [],
  genres: [],
  actors: [],
  castDetails: [],
  director: '',
  runtime: 0,
  seasons: 0,
  status: 'Estrenada',
  originalLanguage: 'en',
  certification: '+13',
  studio: '',
  trailerKey: '',
  tmdbScore: 0,
  stats: {
    averageScore: 0,
    criticScore: 0,
    normalScore: 0,
    criticCount: 0,
    normalCount: 0,
    totalReviews: 0
  }
}));

module.exports = Movie;
