const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URI_PROD
    : process.env.DB_URI_DEV;

mongoose.connect(
  "mongodb://heroku_v2pfv6l0:ljj3neqr6pqaie3nvslqsituqq@ds115569.mlab.com:15569/heroku_v2pfv6l0",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = {
  mongoose
};
