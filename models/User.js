const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
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

  favoriteChars: [{
    character: {
      name: {
        type: String,
      },
      realm: {
        type: String,
      },
      region: {
        type: String,
      }
    },
  }],

  tokens: [{
    token: {
      type: String,
      required: true,
    }
  }],
}, {
  timestamps: true
});

// Find Admin by credentials
userSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error('Unable to log in');
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error('Unable to log in');
  };

  return user;
}

// Generate Auth Session Token
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "797OQ1Qyz4O247H")

  user.tokens = [...user.tokens, {token}];
  await user.save();

  return token;
};

// Add Character to the favorite character list
userSchema.methods.addFavoriteChar = async function(charData) {
  console.log('here')
  const user = this;
  
  user.favoriteChars = [...user.favoriteChars, {charData}];
  await user.save();
}


userSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  };

  next();
})

let User = mongoose.model('User', userSchema);
module.exports = User;