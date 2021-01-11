const express = require('express')
const router = express.Router()
const welcomeController =   require('../controllers/welcome.controller');

router.post('/', welcomeController.create);

module.exports = router