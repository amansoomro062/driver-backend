const express = require('express')
const router = express.Router()
const employmentController =   require('../controllers/employment.controller');

router.post('/', employmentController.create);
router.get('/:id', employmentController.get);


module.exports = router