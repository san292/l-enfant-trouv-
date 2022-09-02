const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorMiddleware/error-handler');
const notFound = require('./middleware/errorMiddleware/not-found');
require('colors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const {
  authenticateUser,
} = require('./middleware/authMiddleware/protectAuthRoute');

//Global middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// var cors = require('cors');
// app.use(cors({ origin: true, credentials: true }));

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/hello', (req, res) => {
  // console.log(req.cookies);
  console.log(req.cookies);
  res.send('Hello Cookies');
});

//ROUTER
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

//ERROR MIDDLEWARE

app.use(notFound);
app.use(errorHandler);

module.exports = app;
