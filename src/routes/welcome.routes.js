const express = require('express')
const router = express.Router()
const welcomeController =   require('../controllers/welcome.controller');

router.post('/', welcomeController.create);
router.get('/:id', welcomeController.get);

module.exports = router