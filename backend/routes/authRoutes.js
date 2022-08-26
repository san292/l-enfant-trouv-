const { register, login } = require('../controllers/authControllers');
const { googleSignin } = require('../controllers/googleAuth');

const router = require('express').Router();

// router.route.post('/register', register);
// router.route.post('/login', login);

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google').post(googleSignin);

module.exports = router;
