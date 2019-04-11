const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 10,
    trim: true,
    validate(val) {
      if (val.toLowerCase().includes('password') || val.toLowerCase().includes('admin') || val.toLowerCase().includes('root')) {
        throw new Error('Password cannot be "Password", "admin" or "root"');
      }
    },
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error('Email is invalid')
      }
    },
  },

  tokens: [{
    token: {
      type: String,
      required: true,
    }
  }],
});

adminSchema.methods.generateAuthToken = async function() {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, "2r27rQl86shnp7q", { expiresIn: '3 days'})

  admin.tokens = [...admin.tokens, {token}];
  await admin.save();

  return token;
}

let Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;