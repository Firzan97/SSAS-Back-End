var express = require("express");
var router = express.Router();


var usersController = require('../controllers/users')
router.get('/:role', usersController.getAllUser);
router.get('/:role/:id', usersController.getUser);
router.post('/:role', usersController.createUser);
router.patch('/:role/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


router.get('/Doctor/:speciality', usersController.getDoctor);
router.get('/Patient/:id/Appointment', usersController.getUserAppointment);

module.exports = router;