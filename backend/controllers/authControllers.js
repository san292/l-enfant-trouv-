const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');
const { StatusCodes } = require('http-status-codes');
const { createJwt, createSendTokenCookies } = require('../utils/jwtHelpers');
const CustomError = require('../error');
const crypto = require('crypto');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    throw new CustomError.UnauthenticatedError('Please provide all values');
  }

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const verificationToken = crypto.randomBytes(40).toString('hex');
  const user = await User.create({ ...req.body, role, verificationToken });

  res.status(StatusCodes.OK).json({
    status: 'Success',
    msg: 'Please verify your email!',
    verificationToken,
  });
  // const user = await User.create({ ...req.body, role });

  // const token = createJwt(user._id);

  // res.status(StatusCodes.CREATED).json({
  //   status: 'success',
  //   token,
  //   data: {
  //     user,
  //   },
  // });
});

exports.verifyEmail = catchAsync(async (req, res) => {
  const { verificationToken, email, password, passwordConfirm } = req.body;

  const user = await User.findOne({ email }).select(
    '-password -passwordConfirm'
  );
  if (!user) {
    throw new CustomError.UnauthenticatedError('Verification failed');
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError('Verification failed');
  }

  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = '';

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Email verified' });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError('Please includes all values');
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new CustomError.UnauthenticatedError('Your email is invalid');
  }

  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError('Please verify your email');
  }

  const isMatchPassword = await user.comparePassword(password);

  if (!isMatchPassword) {
    throw new CustomError.UnauthenticatedError('Your password is invalid');
  }

  createSendTokenCookies(user, StatusCodes.CREATED, res);
});
