var express = require("express");
var router = express.Router();
var serviceController = require('../controllers/services')
router.get('/', serviceController.getAllService);
router.get('/:id', serviceController.getService);
router.post('/', serviceController.createService);
router.patch('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);



module.exports = router;