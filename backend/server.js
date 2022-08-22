require('dotenv').config();
const connectDB = require('./db/connectDB');

const app = require('./app');

const port = process.env.PORT || 8000;

const start = async () => {
	try {
		await connectDB();
		const server = app.listen(port, () =>
			console.log(`App running on port ${port}`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
