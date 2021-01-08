const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user.controller');

router.post('/sendPassword', userController.sendPassword);
router.post('/auth', userController.findByEmailAndPassword);

module.exports = router