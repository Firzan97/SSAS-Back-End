var express = require("express");
var router = express.Router();


var staffController = require('../controllers/staffs.js')

router.get('/:speciality', staffController.getStaff);
router.get('/', staffController.getAllStaff);


module.exports = router;