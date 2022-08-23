const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');
const { StatusCodes } = require('http-status-codes');
const { createJwt } = require('../utils/jwtHelpers');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password) {
    throw Error('Please provide all values');
  }

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new Error('Email already exists');
  }

  const user = await User.create(req.body);

  const token = createJwt(user._id);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('Please includes all values');
  }

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw Error('Your email is invalid');
  }

  const isMatch = await user.comparePassword(password);
  console.log(isMatch);
  if (!isMatch) {
    throw Error('Your password is invalid');
  }

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      user,
    },
  });
});
