const {
  register,
  login,
  verifyEmail,
  logout,
} = require('../controllers/authControllers');
const { googleSignin } = require('../controllers/googleAuth');
const {
  authenticateUser,
} = require('../middleware/authMiddleware/protectAuthRoute');

const router = require('express').Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google').post(googleSignin);
router.route('/verify-email').post(verifyEmail);
router.route('/logout', authenticateUser).delete(logout);

module.exports = router;
