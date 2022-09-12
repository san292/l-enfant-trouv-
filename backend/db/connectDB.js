const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECT);

    console.log(`Mongoose : ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console(`${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
