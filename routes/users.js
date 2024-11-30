const express = require('express');
const router = express.Router();
const { register, login, logout, getHomePage, getLandingPage } = require('../controllers/usersController');

// Routes
router.get('/', getHomePage);
router.get('/register', (req, res) => res.render('register')); // Render register page
router.post('/register', register);
router.get('/login', (req, res) => res.render('login')); // Render login page
router.post('/login', login);
router.get('/landing', getLandingPage);
router.get('/logout', logout);

module.exports = router;
