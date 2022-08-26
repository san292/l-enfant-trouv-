const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const user = await User.find({});

  res.status(200).json(user);
});
