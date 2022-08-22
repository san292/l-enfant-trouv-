const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');
const { StatusCodes } = require('http-status-codes');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password) {
    throw Error('Please provide all values');
  }

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json(user);
});
exports.login = catchAsync(async (req, res, next) => {
  res.json(req.body);
});
