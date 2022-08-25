const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('mongoooooooo----->', process.env.MONGO_CONNECT);
  try {
    // const conn = await mongoose.connect(process.env.MONGO_CONNECT);
    const conn = await mongoose.connect(
      'mongodb+srv://association:hWibduU7nk23aHlq@association.l76oszk.mongodb.net/association?retryWrites=true&w=majority'
    );

    console.log(`Mongoose : ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console(`${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
