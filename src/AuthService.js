const User = require('./User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  static formatUser(user) {
    return {
      _id: user._id,
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role || 'normal',
      bio: user.bio || '',
      avatar: user.avatar || (user.role === 'critic' ? 'critic-crimson' : 'popcorn-gold'),
      specialty: user.specialty || '',
      favoriteGenres: user.favoriteGenres || [],
      createdAt: user.createdAt
    };
  }

  static generateToken(user) {
    return jwt.sign(
      { id: user._id, role: user.role, name: user.name, email: user.email },
      process.env.JWT_SECRET || 'C0tuf3ra_JWT_S3cr3t_Uru_2026_xYz987!',
      { expiresIn: '7d' }
    );
  }

  static async register(userData) {
    const { name, email, password, role, bio, avatar, specialty, favoriteGenres } = userData;

    if (!name || !email || !password) {
      throw new Error('Nombre, correo y contraseña son obligatorios');
    }

    const cleanName = String(name).trim().slice(0, 45);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 80);
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      throw new Error('El correo electronico ya esta en uso');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(password), salt);
    const assignedRole = role === 'critic' ? 'critic' : 'normal';

    const newUser = new User({
      name: cleanName,
      email: cleanEmail,
      password: hashedPassword,
      role: assignedRole,
      bio: String(bio || (assignedRole === 'critic' ? 'Crítico especializado en séptimo arte y narrativa audiovisual.' : 'Amante del cine, las series y las buenas historias.')).trim().slice(0, 220),
      avatar: avatar || (assignedRole === 'critic' ? 'critic-crimson' : 'popcorn-gold'),
      specialty: String(specialty || (assignedRole === 'critic' ? 'Crítica Cinematográfica' : 'Audiencia General')).trim().slice(0, 60),
      favoriteGenres: Array.isArray(favoriteGenres) ? favoriteGenres : ['Acción', 'Drama']
    });

    await newUser.save();
    const formatted = this.formatUser(newUser);
    const token = this.generateToken(newUser);

    return {
      ...formatted,
      user: formatted,
      token
    };
  }

  static async login(email, password) {
    if (!email || !password) {
      throw new Error('Ingresa tu correo y contraseña');
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      throw new Error('Credenciales invalidas');
    }

    const isPasswordValid = await bcrypt.compare(String(password), user.password);
    if (!isPasswordValid) {
      throw new Error('Credenciales invalidas');
    }

    const token = this.generateToken(user);
    return {
      user: this.formatUser(user),
      token
    };
  }
}

module.exports = AuthService;
