const {
  register,
  login,
  verifyEmail,
} = require('../controllers/authControllers');
const { googleSignin } = require('../controllers/googleAuth');

const router = require('express').Router();

// router.route.post('/register', register);
// router.route.post('/login', login);

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google').post(googleSignin);
router.route('/verify-email').post(verifyEmail);

module.exports = router;
