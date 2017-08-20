const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  departure: { type: Date, required: true },
  numberOfDays: { type: Number, required: true },
  days: [{
    number: { type: Number },
    date: { type: Date },
    accomodation: { type: Boolean }
  }]
});


module.exports = mongoose.model('Trip', tripSchema);
