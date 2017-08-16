const router = require('express').Router();
const tripsController = require('../controllers/trips');

router.route('/trips')
  .get(tripsController.indexTripRoute)
  .post(tripsController.createTripRoute);

module.exports = router;
