const router = require('express').Router();
const userRoutes = require('./logInRoutes');
const apiRoutes = require('./');
const signupRoutes = require('./signupRoutes')
router.use('/users', userRoutes);

module.exports = router;
