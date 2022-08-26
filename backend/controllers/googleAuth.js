const { googleVerify } = require('../utils/googleVerify');
const createJwt = require('../utils/jwtHelpers');
const User = require('../models/userModels');
const jwt = require('jsonwebtoken');

exports.googleSignin = async (req, res) => {
  try {
    const { tokenId } = req.body;
    console.log(tokenId);

    const { name, email } = await googleVerify(tokenId);

    let user = await User.findOne({ email });
    console.log(user);

    // if (user) {
    //   res.status(400).json({ msg: 'Tu es deja connecte' });
    // }

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

    res.json({
      msg: 'ok',
      tokenId,
      user,
    });
  } catch (error) {
    res.status(400).json({
      msg: 'Token de Google no es válido',
    });
  }
};
