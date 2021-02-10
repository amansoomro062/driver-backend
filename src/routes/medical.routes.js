const express = require('express')
const router = express.Router()
const medicalController = require('../controllers/medical.controller');

router.post('/', medicalController.create);
router.get('/:id', medicalController.get);


module.exports = router