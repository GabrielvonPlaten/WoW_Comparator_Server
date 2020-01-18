const mongoose = require('mongoose');

const queriesMadeSchema = new mongoose.Schema({
  queries: {
    type: Number
  }
});

let QueriesMade = mongoose.model('QueriesMade', queriesMadeSchema);

module.exports = QueriesMade;
