const express = require('express');
const router = express.Router();
const UserController = require('./UserController');
const AuthMiddleware = require('./AuthMiddleware');

// La creacion de usuarios ocurre unicamente en el registro: POST /api/auth/register

// Perfil propio autenticado
router.get('/me', AuthMiddleware.verifyToken, UserController.getMe);

// Perfil publico de un usuario (sin datos sensibles)
router.get('/:id', UserController.getOne);

// Editar / eliminar: requiere token y solo se permite sobre la propia cuenta
router.put('/:id', AuthMiddleware.verifyToken, AuthMiddleware.onlySelf, UserController.update);
router.delete('/:id', AuthMiddleware.verifyToken, AuthMiddleware.onlySelf, UserController.remove);

module.exports = router;
