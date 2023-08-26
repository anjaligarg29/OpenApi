const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
