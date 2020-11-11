var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middleware/users.js');
var authenticationController = require('../controllers/authentication')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post("/register", authenticationController.register)
router.post("/login", authenticationController.login)
router.get('/secret-route', (req, res, next) => {
    res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;