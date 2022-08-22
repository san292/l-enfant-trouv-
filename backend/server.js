require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 8000;
console.log('process------------------->', process.env.PORT);

const server = app.listen(port, () =>
  console.log(`App running on port ${port}`)
);
