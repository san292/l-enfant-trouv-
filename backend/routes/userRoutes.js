const router = require('express').Router();
const { getAllUsers } = require('../controllers/usersControllers');
const protectRoute = require('../middleware/authMiddleware/protectAuthRoute');

router.route('/').get(protectRoute, getAllUsers);

module.exports = router;
