const { googleVerify } = require('../utils/googleVerify');
const User = require('../models/userModels');
const { StatusCodes } = require('http-status-codes');

exports.googleSignin = async (req, res) => {
  try {
    const { tokenId } = req.body;

    const { name, email } = await googleVerify(tokenId);

    let user = await User.findOne({ email });

    if (!user) {
      const data = {
        name,
        email,
        password: '******',
        passwordConfirm: '******',
        google: true,
      };

      user = new User(data);

      await user.save();
    }

    res.status(StatusCodes.OK).json(user);

  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "You don't have gmail account",
    });
  }
};
