const express = require('express')
const router = express.Router()
const accidentController2 =   require('../controllers/accident2.controller');

router.post('/', accidentController2.create);

module.exports = router