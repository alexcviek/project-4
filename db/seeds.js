const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Trip = require('../models/trip');

mongoose.connect(dbURI);

Trip.collection.drop();

Trip
  .create([{
    name: 'India',
    departure: new Date(),
    numberOfDays: 2,
    days: [{
      number: 1,
      date: new Date(),
      accomodation: true
    }, {
      number: 2,
      date: new Date(),
      accomodation: true
    }]
  },{
    name: 'Russia',
    departure: new Date(),
    numberOfDays: 3,
    days: [{
      number: 1,
      date: new Date(),
      accomodation: true
    }, {
      number: 2,
      date: new Date(),
      accomodation: true
    },{
      number: 3,
      date: new Date(),
      accomodation: false
    }]
  },{
    name: 'Taiwan',
    departure: new Date(),
    numberOfDays: 4
  }])
  .then((trips) => {
    console.log(`${trips.length} trips created!`);
  })
  .finally(() => mongoose.connection.close());
