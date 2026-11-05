const express = require('express');
const router = express.Router();
const MovieController = require('./MovieController');

router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getOne);

module.exports = router;