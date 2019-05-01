const mongoose = require('mongoose');

const stylesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  backgroundImage: {
    type: String,
    minlength: 1,
    required: true,
  }
});

let Styles = mongoose.model('Styles', stylesSchema)

module.exports = Styles;