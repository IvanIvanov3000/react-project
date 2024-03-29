const router = require('express').Router();
const users = require('./users');
const movies = require('./movies');
const blog = require('./blog');

const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
//router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/movies', movies);
router.use('/blog', blog);
router.use('/test', test);

module.exports = router;
