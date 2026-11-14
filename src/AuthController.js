const AuthService = require('./AuthService');
const ApiResponse = require('./ApiResponse');

class AuthController {
  static async register(req, res) {
    try {
      const result = await AuthService.register(req.body);
      return ApiResponse.success(res, result, 'Usuario registrado exitosamente', 201);
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await AuthService.login(email, password);
      return ApiResponse.success(res, data, 'Inicio de sesion exitoso', 200);
    } catch (error) {
      return ApiResponse.error(res, error.message, 401);
    }
  }
}

module.exports = AuthController;
