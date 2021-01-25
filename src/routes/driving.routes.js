const express = require('express')
const router = express.Router()
const drivingRoutes =   require('../controllers/driving.controller');

router.post('/', drivingRoutes.create);
module.exports = router