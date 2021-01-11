const express = require('express')
const router = express.Router()
const formController =   require('../controllers/form.controller');

router.post('/', formController.insert);
router.put('/', formController.update);
router.get('/:id', formController.findById);

// router.get('/', formController.get);

module.exports = router