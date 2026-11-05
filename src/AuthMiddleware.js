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
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 
      next(); 
    } catch (error) {
      return ApiResponse.error(res, 'Token invalido o expirado.', 401);
    }
  }
}

module.exports = AuthMiddleware;