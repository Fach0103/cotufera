const express = require('express');
const router = express.Router();
const MovieController = require('./MovieController');

router.get('/', MovieController.getAll);
router.get('/meta/catalog', MovieController.getMeta);
router.get('/discover/external', MovieController.discoverExternal);
router.get('/:id', MovieController.getOne);

module.exports = router;
