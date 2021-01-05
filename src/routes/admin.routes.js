const express = require('express')
const router = express.Router()
const adminController =   require('../controllers/admin.controller');

router.post('/auth', adminController.findByEmailAndPassword);

module.exports = router