const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://127.0.0.1:27017/wow_comparator', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });


mongoose.connect('mongodb://heroku_v2pfv6l0:ljj3neqr6pqaie3nvslqsituqq@ds115569.mlab.com:15569/heroku_v2pfv6l0', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
module.exports = {
  mongoose,
}