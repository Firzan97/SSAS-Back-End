var express = require("express");
var router = express.Router();


var patientController = require('../controllers/patients.js')

router.get('/', patientController.getAllPatients);
router.patch('/:id', patientController.updatePatient);


module.exports = router;