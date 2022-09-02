const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require('../controllers/usersControllers');
const {
  authenticateUser,
} = require('../middleware/authMiddleware/protectAuthRoute');

router.route('/').get(authenticateUser,getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
