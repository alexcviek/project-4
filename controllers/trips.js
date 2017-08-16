const Trip = require('../models/trip');

function indexTripRoute(req, res, next){
  Trip
    .find()
    .exec()
    .then(trips => res.json(trips))
    .catch(next);
}

function createTripRoute(req, res, next){
  Trip
  .create(req.body)
  .then((trip) => res.status(201).json(trip))
  .catch(next);
}
module.exports = {
  indexTripRoute,
  createTripRoute
};
