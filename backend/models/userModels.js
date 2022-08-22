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
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const genSalt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, genSalt);

  //Delete passwordConfirm field
  this.passwordConfirm = undefined;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
