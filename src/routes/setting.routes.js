const express = require('express')
const router = express.Router()
const settingController =   require('../controllers/setting.controller');
// Retrieve all settings
router.get('/', settingController.findAll);

// Retrieve active settings
router.get('/active', settingController.findActive);


// Create a new setting
router.post('/', settingController.create);


// set a setting active
router.post('/active/:id', settingController.setActive);

router.post('/inactive/:id', settingController.setInActive);


// Retrieve a single setting with id
// router.get('/:id', settingController.findById);
// // Update a setting with id
// router.put('/:id', settingController.update);
// // Delete a setting with id
// router.delete('/:id', settingController.delete);
module.exports = router