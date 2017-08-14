const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numberOfDays: { type: Number, required: true }
});


module.exports = mongoose.model('Trip', tripSchema);
