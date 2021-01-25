const express = require('express')
const router = express.Router()
const licenseController =   require('../controllers/license.controller');

router.post('/', licenseController.create);

module.exports = router