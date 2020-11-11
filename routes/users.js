var express = require("express");
var router = express.Router();


var usersController = require('../controllers/users')
router.get('/:role', usersController.getAllUser);
router.get('/:role/:id', usersController.getUser);
router.post('/:role', usersController.createUser);
router.patch('/:role/:id', usersController.updateUser);
router.delete('/:role/:id', usersController.deleteUser);


router.get('/staff/:speciality', usersController.getStaff);
router.get('/:role/:id/appointment', usersController.getUserAppointment);

module.exports = router;