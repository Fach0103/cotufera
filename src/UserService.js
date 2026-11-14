const User = require('./User');
const Comment = require('./Comment');
const AuthService = require('./AuthService');
const bcrypt = require('bcrypt');

class UserService {
  static async getAllUsers(filters = {}) {
    const users = await User.find({}).sort({ createdAt: -1 });
    const comments = await Comment.find({});

    const q = (filters.q || filters.search || '').trim().toLowerCase();
    const roleFilter = (filters.role || '').trim();

    let enriched = users.map(u => {
      const userComments = comments.filter(c => String(c.userId) === String(u._id));
      const totalScore = userComments.reduce((sum, c) => sum + (Number(c.score) || 0), 0);
      const avgGiven = userComments.length > 0 ? Number((totalScore / userComments.length).toFixed(1)) : 0;

      return {
        ...AuthService.formatUser(u),
        stats: {
          reviewsCount: userComments.length,
          averageScoreGiven: avgGiven
        }
      };
    });

    if (roleFilter && (roleFilter === 'critic' || roleFilter === 'normal')) {
      enriched = enriched.filter(u => u.role === roleFilter);
    }

    if (q) {
      enriched = enriched.filter(u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        (u.specialty || '').toLowerCase().includes(q)
      );
    }

    return enriched;
  }

  static async getUserById(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const reviews = await Comment.find({ userId: String(user._id) })
      .populate('movieId', 'tmdbId title coverUrl mediaType releaseDate genres')
      .sort({ createdAt: -1 });

    const totalScore = reviews.reduce((acc, r) => acc + (Number(r.score) || 0), 0);
    const avgScore = reviews.length > 0 ? Number((totalScore / reviews.length).toFixed(1)) : 0;

    return {
      ...AuthService.formatUser(user),
      stats: {
        reviewsCount: reviews.length,
        averageScoreGiven: avgScore
      },
      reviews
    };
  }

  static async updateUser(userId, updateData) {
    const existing = await User.findById(userId);
    if (!existing) {
      throw new Error('Usuario no encontrado');
    }

    const previousRole = existing.role;
    const changes = {};

    if (updateData.name !== undefined && String(updateData.name).trim()) {
      changes.name = String(updateData.name).trim().slice(0, 45);
    }

    if (updateData.email !== undefined && String(updateData.email).trim()) {
      const cleanEmail = String(updateData.email).trim().toLowerCase().slice(0, 80);
      if (cleanEmail !== existing.email) {
        const emailOwner = await User.findOne({ email: cleanEmail });
        if (emailOwner && String(emailOwner._id) !== String(userId)) {
          throw new Error('Ese correo electronico ya pertenece a otro usuario');
        }
        changes.email = cleanEmail;
      }
    }

    if (updateData.role === 'critic' || updateData.role === 'normal') {
      changes.role = updateData.role;
    }

    if (updateData.bio !== undefined) changes.bio = String(updateData.bio).trim().slice(0, 220);
    if (updateData.avatar !== undefined) changes.avatar = String(updateData.avatar);
    if (updateData.specialty !== undefined) changes.specialty = String(updateData.specialty).trim().slice(0, 60);
    if (Array.isArray(updateData.favoriteGenres)) {
      changes.favoriteGenres = updateData.favoriteGenres;
    }

    if (updateData.password && String(updateData.password).trim().length >= 4) {
      const salt = await bcrypt.genSalt(10);
      changes.password = await bcrypt.hash(String(updateData.password).trim(), salt);
    }

    const updated = await User.findByIdAndUpdate(userId, changes);

    // Si cambio el rol (normal <-> critic), recalculamos los puntajes de las peliculas comentadas por este usuario
    if (changes.role && changes.role !== previousRole) {
      const userComments = await Comment.find({ userId: String(userId) });
      const movieIds = [...new Set(userComments.map(c => String(c.movieId)))];
      for (const mId of movieIds) {
        await Comment.recalculateMovieStats(mId);
      }
    }

    const refreshedProfile = await this.getUserById(userId);
    const token = AuthService.generateToken(refreshedProfile);

    return {
      user: refreshedProfile,
      token
    };
  }

  static async deleteUser(userId) {
    const existing = await User.findById(userId);
    if (!existing) {
      throw new Error('Usuario no encontrado');
    }

    const userComments = await Comment.find({ userId: String(userId) });
    const affectedMovieIds = [...new Set(userComments.map(c => String(c.movieId)))];

    await Comment.deleteMany({ userId: String(userId) });
    await User.findByIdAndDelete(userId);

    for (const mId of affectedMovieIds) {
      await Comment.recalculateMovieStats(mId);
    }

    return { deletedId: userId, deletedComments: userComments.length };
  }
}

module.exports = UserService;

