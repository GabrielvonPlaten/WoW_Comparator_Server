const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/wow_comparator', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


// mongoose.connect('mongodb://gabriel:nuxt1234@ds119606.mlab.com:19606/nuxt-testing-app', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
module.exports = {
  mongoose,
}