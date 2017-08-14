const Trip = require('../models/trip');

function indexTripRoute(req, res, next){
  Trip
    .find()
    .exec()
    .then(trips => res.json(trips))
    .catch(next);
}

module.exports = {
  indexTripRoute
};
