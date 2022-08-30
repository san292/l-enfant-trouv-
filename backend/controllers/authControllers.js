const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');
const { StatusCodes } = require('http-status-codes');
const { createJwt } = require('../utils/jwtHelpers');
const CustomError = require('../error');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  console.log('reqbody----------------->', req.body);

  if (!name || !email || !password || !passwordConfirm) {
    throw Error('Please provide all values');
  }
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
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
    throw new CustomError.BadRequestError('Please includes all values');
  }

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new CustomError.UnauthenticatedError('Your email is invalid');
  }

  const isMatchPassword = await user.comparePassword(password);

  if (!isMatchPassword) {
    throw new CustomError.UnauthenticatedError('Your password is invalid');
  }

  const token = createJwt(password);

  res.status(StatusCodes.OK).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});
