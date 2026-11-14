const mongoose = require('mongoose');
const { createHybridModel } = require('./LocalStore');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['normal', 'critic'], default: 'normal' },
  bio: { type: String, default: '' },
  avatar: { type: String, default: 'popcorn-gold' },
  specialty: { type: String, default: '' },
  favoriteGenres: [{ type: String }]
}, { timestamps: true });

const MongooseUser = mongoose.models.User || mongoose.model('User', userSchema);

const User = createHybridModel('User', 'users', MongooseUser, () => ({
  role: 'normal',
  bio: '',
  avatar: 'popcorn-gold',
  specialty: '',
  favoriteGenres: []
}));

module.exports = User;
