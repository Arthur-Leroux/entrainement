//besoin du router epxress 
const router = require('express').Router();
//const UserModel = require('../models/userModel');
const authController = require('../controllers/authController');




router.post('/register',authController.signUp);

module.exports = router;