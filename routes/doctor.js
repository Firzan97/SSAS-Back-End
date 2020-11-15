var express = require("express");
var router = express.Router();


var doctorController = require('../controllers/doctors.js')

router.get('/:speciality', doctorController.getDoctor);
router.get('/', doctorController.getAllDoctor);
router.get('/:speciality/:id', doctorController.getSpecificDoctor);

router.patch('/:id', doctorController.updateDoctor);



module.exports = router;