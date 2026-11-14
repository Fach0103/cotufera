const express = require('express');
const router = express.Router();
const CommentController = require('./CommentController');
const AuthMiddleware = require('./AuthMiddleware');

// Listar todos los comentarios recientes (Comunidad / Feed)
router.get('/', CommentController.getAll);

// Listar comentarios de un usuario especifico
router.get('/user/:userId', CommentController.getByUser);

// Ver comentarios de una pelicula o serie (Ruta publica)
router.get('/:tmdbId', CommentController.getByMovie);

// Crear comentario para una pelicula o serie (Ruta protegida)
router.post('/:tmdbId', AuthMiddleware.verifyToken, CommentController.create);

// Actualizar comentario (Ruta protegida)
router.put('/:commentId', AuthMiddleware.verifyToken, CommentController.update);

// Eliminar comentario (Ruta protegida)
router.delete('/:commentId', AuthMiddleware.verifyToken, CommentController.remove);

module.exports = router;
