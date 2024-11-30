const bcrypt = require('bcrypt');
const users = []; // In-memory user storage

// Render Home Page
exports.getHomePage = (req, res) => {
    const message = req.query.message || req.session.message || '';
    req.session.message = null; // Clear the message after displaying it
    res.render('home', { 
        user: req.session.user || null, 
        message 
    });
};

// Registration with validation
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || username.length < 3) errors.push("Username must be at least 3 characters.");
    if (!email || !emailRegex.test(email)) errors.push("Invalid email format.");
    if (!password || password.length < 8) errors.push("Password must be at least 8 characters.");

    if (users.some(user => user.email === email)) {
        errors.push("Email already registered.");
    }

    if (errors.length > 0) {
        req.session.message = errors.join(' ');
        return res.redirect('/register');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashedPassword, role: users.length === 0 ? 'admin' : 'user' });
    req.session.message = 'Registration successful! Please log in.';
    res.redirect('/');
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) {
        req.session.message = 'Email not found';
        return res.redirect('/login');
    }

    if (!await bcrypt.compare(password, user.password)) {
        req.session.message = 'Incorrect password';
        return res.redirect('/login');
    }

    req.session.user = user;
    res.redirect('/landing');
};

// Render Landing Page
exports.getLandingPage = (req, res) => {
    if (!req.session.user) return res.redirect('/');
    if (req.session.user.role === 'admin') {
        return res.render('adminLanding', { users, user: req.session.user });
    }
    res.render('userLanding', { user: req.session.user });
};

// Logout with proper session handling
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).send("Failed to log out.");
        }
        res.redirect('/?message=You have successfully logged out.');
    });
};
