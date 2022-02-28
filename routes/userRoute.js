const express = require('express');
const router = express.Router();
const {
  login,
  register,
  updateUser,
} = require('../controllers/userController');
const authenticateUser = require('../middleware/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authenticateUser, updateUser);

module.exports = router;
