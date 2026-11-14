const UserService = require('./UserService');
const ApiResponse = require('./ApiResponse');

class UserController {
  static async getAll(req, res) {
    try {
      const users = await UserService.getAllUsers(req.query);
      return ApiResponse.success(res, users, 'Lista de usuarios obtenida');
    } catch (error) {
      return ApiResponse.error(res, error.message, 500);
    }
  }

  static async getMe(req, res) {
    try {
      const user = await UserService.getUserById(req.user.id);
      return ApiResponse.success(res, user, 'Perfil de usuario obtenido');
    } catch (error) {
      return ApiResponse.error(res, error.message, 404);
    }
  }

  static async getOne(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      return ApiResponse.success(res, user, 'Usuario obtenido con exito');
    } catch (error) {
      return ApiResponse.error(res, error.message, 404);
    }
  }

  static async update(req, res) {
    try {
      const result = await UserService.updateUser(req.params.id, req.body);
      return ApiResponse.success(res, result, 'Usuario actualizado exitosamente');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }

  static async remove(req, res) {
    try {
      const result = await UserService.deleteUser(req.params.id);
      return ApiResponse.success(res, result, 'Usuario eliminado exitosamente');
    } catch (error) {
      return ApiResponse.error(res, error.message, 400);
    }
  }
}

module.exports = UserController;

