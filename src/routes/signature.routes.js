const express = require('express')
const router = express.Router()
const signatureController =   require('../controllers/signature.controller');

router.post('/', signatureController.create);

module.exports = router