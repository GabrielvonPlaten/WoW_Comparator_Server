const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },

  subtitle: {
    type: String,
    required: true,
    minlength: 1
  },

  slug: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },

  blocks: Mixed
});

let Post = mongoose.model('Post', postSchema)

module.exports = Post;