const express = require('express');
const app = express();
const morgan = require('morgan');
require('colors');

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.get('/hello', (req, res) => {
	res.send('Hello all it works');
});

module.exports = app;
