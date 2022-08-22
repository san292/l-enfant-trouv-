const express = require('express');
const app = express();
const morgan = require('morgan');
require('colors');

const authRouter = require('./routes/authRouter');

//Global middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTER
app.use('/api/v1/auth', authRouter);

module.exports = app;
