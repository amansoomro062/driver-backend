const express = require('express')
const router = express.Router()
const drugAndAlcoholRoutes =   require('../controllers/drug.controller');

router.post('/', drugAndAlcoholRoutes.create);

module.exports = router