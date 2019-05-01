const mongoose = require('mongoose');

const visitsSchema = new mongoose.Schema({
  visits: {
    type: Number,
  }
});

let Visits = mongoose.model('Visits', visitsSchema)

module.exports = Visits;