const express = require('express');
const router = express.Router();
const CommentController = require('./CommentController');
const AuthMiddleware = require('./AuthMiddleware');

// Ver comentarios (Ruta publica)
router.get('/:tmdbId', CommentController.getByMovie);

// Crear comentario (Ruta protegida, requiere enviar el token)
router.post('/:tmdbId', AuthMiddleware.verifyToken, CommentController.create);

module.exports = router;