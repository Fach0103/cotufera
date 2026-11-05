const User = require('./User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  static async register(userData) {
    const { name, email, password, role } = userData;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('El correo electronico ya esta en uso');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'normal'
    });

    return await newUser.save();
  }

  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Credenciales invalidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Credenciales invalidas');
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      user: { id: user._id, name: user.name, role: user.role },
      token
    };
  }
}

module.exports = AuthService;