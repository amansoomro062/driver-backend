const express = require('express')
const router = express.Router()
const licenseController2 =   require('../controllers/license2.controller');

router.post('/', licenseController2.create);

module.exports = router