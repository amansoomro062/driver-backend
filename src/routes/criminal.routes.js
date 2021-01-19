const express = require('express')
const router = express.Router()
const criminalRoutes =   require('../controllers/criminal.controller');

router.post('/', criminalRoutes.create);

module.exports = router