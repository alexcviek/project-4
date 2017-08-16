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

function showTripRoute(req, res, next){
  Trip
  .findById(req.params.id)
  .exec()
  .then(trip => {
    if(!trip) return res.notFound();
    return res.json(trip);
  })
  .catch(next);
}

function updateTripRoute(req, res, next){
  Trip
    .findById(req.params.id)
    .exec()
    .then(trip => {
      if(!trip) return res.notFound();

      trip = Object.assign(trip, req.body);
      return trip.save();
    })
    .then(trip => res.json(trip))
    .catch(next);
}

function deleteTripRoute(req, res, next) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();

      return trip.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  indexTripRoute,
  createTripRoute,
  showTripRoute,
  updateTripRoute,
  deleteTripRoute
};
