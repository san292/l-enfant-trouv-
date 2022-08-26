const catchAsync = require('../../utils/catchAsync');
const User = require('../../models/userModels');
const { isTokenValid } = require('../../utils/jwtHelpers');
const CustomError = require('../../error');

module.exports = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  const decoded = isTokenValid(token);
  const currentUser = await User.findById(decoded.payload);

  if (!currentUser) {
    throw new CustomError.UnauthenticatedError(
      'The user belonging this token, does not exists'
    );
  }

  const updateFreshUser = await currentUser.changesPasswordAfter(decoded.iat);

  if (updateCurrentUser) {
    throw new CustomError.BadRequestError(
      'User recently changed password,Please log again'
    );
  }
  req.user = currentUser;

  next();
});
