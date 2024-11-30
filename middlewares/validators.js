// Middleware to validate registration and login inputs

exports.validateRegistration = (req, res, next) => {
    const { username, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];
    
    if (!username || username.trim().length < 3) errors.push('Username must be at least 3 characters.');
    if (!email || !emailRegex.test(email)) errors.push('Invalid email format.');
    if (!password || password.length < 8) errors.push('Password must be at least 8 characters.');

    if (errors.length > 0) {
        req.session.message = errors.join(' ');
        return res.redirect('/register');
    }
    next();
};

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        req.session.message = 'Email and password are required.';
        return res.redirect('/login');
    }
    next();
};
