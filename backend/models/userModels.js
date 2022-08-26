const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      trim: true,
      minLength: [3, 'Please provide name, with min 3 characters'],
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minLength: 6,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please provide confirm your password'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
      },
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.id = _id;
  return user;
};

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const genSalt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, genSalt);

  //Delete passwordConfirm field
  this.passwordConfirm = undefined;
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

UserSchema.methods.changesPasswordAfter = async function (JWTTimeStamps) {
  if (this.createdAt) {
    const changeTimesStamp = parseInt(this.createdAt.getTime() / 1000, 10);
    console.log(JWTTimeStamps < changeTimesStamp);
    return JWTTimeStamps < changeTimesStamp;
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
