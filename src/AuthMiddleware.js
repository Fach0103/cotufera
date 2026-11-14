const jwt = require('jsonwebtoken');
const ApiResponse = require('./ApiResponse');

class AuthMiddleware {
  static verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return ApiResponse.error(res, 'Acceso denegado. Token no proporcionado.', 401);
    }

    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'C0tuf3ra_JWT_S3cr3t_Uru_2026_xYz987!');
      req.user = decoded;
      next();
    } catch (error) {
      return ApiResponse.error(res, 'Token invalido o expirado.', 401);
    }
  }

  // Solo permite operar sobre el propio usuario (:id debe coincidir con el token)
  static onlySelf(req, res, next) {
    if (!req.user || String(req.user.id) !== String(req.params.id)) {
      return ApiResponse.error(res, 'Solo puedes modificar o eliminar tu propia cuenta.', 403);
    }
    next();
  }
}

module.exports = AuthMiddleware;
