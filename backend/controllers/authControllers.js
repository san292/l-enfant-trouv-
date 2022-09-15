const User = require('../models/userModels');
const Token = require('../models/Token');
const catchAsync = require('../utils/catchAsync');
const { StatusCodes } = require('http-status-codes');
const { createSendTokenCookies } = require('../utils/jwtHelpers');
const CustomError = require('../error');
const crypto = require('crypto');
const sendVerificationEmail = require('../utils/email/sendVerificationEmail');
const sendResetPassswordEmail = require('../utils/email/sendResetPassword');
const createTokenUser = require('../utils/createTokenUser');
const createHash = require('../utils/createHash');

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

  const origin = 'http://localhost:3000';

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

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
  const { verificationToken, email } = req.body;
<<<<<<< HEAD
  console.log('verication req.body ', req.body);
  console.log('verication token ', verificationToken);
  console.log('verication email ', email);
  console.log(req.body);
=======

>>>>>>> 87614fb0bc102df1ee0bb43f513e3a431fabc0c7
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
  user.verified = user.updateAt;
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
  const tokenUser = createTokenUser(user);

  const isMatchPassword = await user.comparePassword(password);

  if (!isMatchPassword) {
    throw new CustomError.UnauthenticatedError('Your password is invalid');
  }

  // const tokenUser = createTokenUser(user);

  let refreshToken = '';

  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    refreshToken = existingToken.refreshToken;
    createSendTokenCookies(tokenUser, StatusCodes.OK, res, refreshToken);
    res
      .status(StatusCodes.OK)
      .json({ user: tokenUser, msg: 'You are connected' });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString('hex');

  const userAgent = req.headers['user-agent'];
  const ip = req.ip;
  const userToken = {
    refreshToken,
    ip,
    userAgent,
    user: user._id,
  };

  await Token.create(userToken);
  createSendTokenCookies(tokenUser, StatusCodes.OK, res, refreshToken);

  req.user = user;

  res.status(StatusCodes.OK).json({ user, msg: 'You are connected' });
});

exports.logout = catchAsync(async (req, res, next) => {
  console.log(req.user);
  await Token.findOneAndDelete({ user: req.user.user });
  console.log(req);
  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 20),
  });
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
});

exports.forgortPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    throw new CustomError.BadRequestError('Please provide valid email');
  }

  const user = await User.findOne({ email }).select(
    '-password -passwordConfirm'
  );

  if (user) {
    const passwordToken = crypto.randomBytes(70).toString('hex');

    //send Email

    const origin = 'http:localhost:3000';

    await sendResetPassswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;

    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Please check your email for reset password link ' });
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  const { token, email, password } = req.body;

  if (!token || !email || !password) {
    throw new CustomError.BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email }).select(
    '-password -passwordConfirm'
  );

  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }

  res.send('reset password');
});
