// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, googleLogin } = require('../Controller/authController');

router.post('/authregister', registerUser);
router.post('/authlogin', loginUser);
router.post('/google-login', googleLogin);

module.exports = router;
