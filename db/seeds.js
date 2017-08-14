const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Trip = require('../models/trip');

mongoose.connect(dbURI);

Trip.collection.drop();

Trip
  .create([{
    name: 'India',
    numberOfDays: 21
  },{
    name: 'Russia',
    numberOfDays: 14
  },{
    name: 'Taiwan',
    numberOfDays: 7
  }])
  .then((trips) => {
    console.log(`${trips.length} trips created!`);
  })
  .finally(() => mongoose.connection.close());
