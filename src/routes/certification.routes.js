const express = require('express')
const router = express.Router()
const certificationController =   require('../controllers/certification.controller');

router.post('/', certificationController.create);

module.exports = router