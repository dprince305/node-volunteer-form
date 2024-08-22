const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();


router.get('/',controller.defaultController);
router.post('/addVolunteer',controller.addVolunteerController)
router.get('/editVolunteer/:id',controller.editVolunteerController)
router.post('/updateVolunteer/:id',controller.updateVolunteerController)
router.get('/deleteVolunteer/:id',controller.deleteVolunteerController)


module.exports = router;