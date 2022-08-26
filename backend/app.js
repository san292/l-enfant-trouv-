const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
require('colors');

const authRouter = require('./routes/authRouter');

//Global middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTER
app.use('/api/v1/auth', authRouter);

//ERROR MIDDLEWARE

app.use(notFound);
app.use(errorHandler);

module.exports = app;
