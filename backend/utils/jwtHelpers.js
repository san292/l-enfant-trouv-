const jwt = require('jsonwebtoken');

const createJwt = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const createSendTokenCookies = (user, statusCode, res) => {
  const token = createJwt(user._id);

  const cookiesOptions = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };
  if (process.env.NODE_ENV === 'production') cookiesOptions.secure = true;
  res.cookie('jwt', token, cookiesOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

module.exports = { createJwt, isTokenValid, createSendTokenCookies };
