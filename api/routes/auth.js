const express = require('express');
const router = express.Router();

// auth&auth
const authRoutes = require('../controllers/auth');

router.post('/login', authRoutes.login);
router.post('/register', authRoutes.register);

module.exports = router;
