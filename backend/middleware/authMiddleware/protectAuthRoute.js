const catchAsync = require('../../utils/catchAsync');

const Token = require('../../models/Token');
const {
  isTokenValid,
  createSendTokenCookies,
} = require('../../utils/jwtHelpers');
const CustomError = require('../../error');
const { StatusCodes } = require('http-status-codes');

// module.exports = catchAsync(async (req, res, next) => {
//   let token;

//   if (req.headers && req.headers.authorization.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   const decoded = isTokenValid(token);
//   const currentUser = await User.findById(decoded.payload);

//   if (!currentUser) {
//     throw new CustomError.UnauthenticatedError(
//       'The user belonging this token, does not exists'
//     );
//   }

//   const updateCurrentUser = await currentUser.changesPasswordAfter(decoded.iat);

//   if (updateCurrentUser) {
//     throw new CustomError.BadRequestError(
//       'User recently changed password,Please log again'
//     );
//   }
//   req.user = currentUser;

//   next();
// });

const authenticateUser = catchAsync(async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
    }
    const payload = isTokenValid(refreshToken);
    console.log(payload.user.user);
    const existingToken = await Token.findOne({
      user: payload.user.user,
    });

    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Authentication Invalid');
    }

    createSendTokenCookies(payload.user, StatusCodes, res, existingToken);

    req.user = payload.user;
  } catch (error) {
    console.log(error.message);
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

  next();
});

module.exports = {
  authenticateUser,
};
