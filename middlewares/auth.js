// Middleware to ensure proper role-based access control
exports.ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    req.session.message = 'Please log in to access this page.';
    res.redirect('/login');
};

exports.ensureAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        return next();
    }
    res.status(403).send('Access Denied: Admins only.');
};
