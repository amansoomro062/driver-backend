const express = require('express')
const router = express.Router()
const citizenshipRoutes =   require('../controllers/citizenship.controller');

router.post('/', citizenshipRoutes.create);

module.exports = router