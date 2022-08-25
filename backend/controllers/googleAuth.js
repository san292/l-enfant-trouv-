const { googleVerify } = require('../utils/googleVerify');
const createJwt = require('../utils/jwtHelpers');
const User = require('../models/userModels');

// exports.googleSignin = async (req, res) => {

// try{   res.json(
//       req.body,

//     )}
//   // try {
//   //   const { email, name, img } = await googleVerify(id_token);

//   //   let user = await User.findOne({ email });

//     // if (!user) {
//     //   // Tengo que crearlo
//     //   const data = {
//     //     name,
//     //     email,
//     //     password: ':P',
//     //     picture,
//     //     google: true,
//     //   };

//     //   user = new User(data);
//     //   await user.save();
//     // }

//     // Si el usuario en DB
//     // if (!user.estado) {
//     //   return res.status(401).json({
//     //     msg: 'Hable con el administrador, usuario bloqueado',
//     //   });
//     // }

//     // Generar el JWT
//     // const token = await createJwt(user.id);

//   } catch (error) {
//     res.status(400).json({
//       msg: 'Token de Google non valid',
//     });
//   }
// };

exports.googleSignin = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);

    // const {
    //   data: { jti },
    // } = req.body;
    // console.log(req.body);
    // console.log(jti);

    const { name, picture, email } = await googleVerify(token);
    console.log(email);
    let user = await User.findOne({ email });

    if (!user) {
      const data = {
        name,
        email,
      };

      user = new User(data);
      console.log(user);
      await user.save();
    }

    res.json({
      user,
    });
  } catch (error) {
    res.status(400).json({
      msg: 'Token de Google no es válido',
    });
  }
};
