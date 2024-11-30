const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const userRoutes = require('./routes/users');
app.use('/', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
