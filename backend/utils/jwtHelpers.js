const jwt = require('jsonwebtoken');

const createJwt = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const createSendTokenCookies = (user, statusCode, res, refreshToken) => {
  const token = createJwt({ payload: { user } });
  const refreshTokenJWT = createJwt({ payload: { user, refreshToken } });

  const shortExp = process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000;
  const longerExp =
    process.env.JWT_COOKIE_EXPIRES_IN * 1000 * 60 * 60 * 24 * 30;

  const cookiesOptionsShort = {
    httpOnly: true,
    expires: new Date(Date.now() + shortExp),
    signed: true,
  };
  const cookiesOptionsLong = {
    httpOnly: true,
    expires: new Date(Date.now() + longerExp),
    signed: true,
  };

  if (process.env.NODE_ENV === 'production') cookiesOptionsShort.secure = true;
  res.cookie('accessToken', token, cookiesOptionsShort);
  res.cookie('refreshToken', refreshTokenJWT, cookiesOptionsLong);

  // res.user.password = undefined;

  // res.status(statusCode).json({
  //   status: 'success',
  //   token,
  //   data: {
  //     user,
  //   },
  // });
};

module.exports = { createJwt, isTokenValid, createSendTokenCookies };
