const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.name, err.message);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === 'CastError') {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }
  if (err.name === 'TypeError') {
    customError.msg = `You are not logged in! Please log in to get access`;
    customError.statusCode = 404;
  }
  if (err.name === 'TokenExpiredError') {
    customError.msg = `Your token has expired! Please log in to get access`;
    customError.statusCode = 404;
  }
  if (err.name === 'JsonWebTokenError') {
    customError.msg = `Your token is not valid! Please log in to get access`;
    customError.statusCode = 404;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
