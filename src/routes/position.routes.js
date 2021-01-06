const express = require('express')
const router = express.Router()
const positionController =   require('../controllers/position.controller');

router.post('/', positionController.addPosition);

router.get('/:id', positionController.findById);

module.exports = router