var express = require("express");
var router = express.Router();
var usersController = require('../controllers/users')
router.get('/', usersController.getAllUser);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;