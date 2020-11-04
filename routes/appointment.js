var express = require("express");
var router = express.Router();
var appointmentController = require('../controllers/appointments')
router.get('/', appointmentController.getAllAppointment);
router.get('/:id', appointmentController.getAppointment);
router.post('/', appointmentController.createAppointment);
router.patch('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);



module.exports = router;