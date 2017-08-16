const router = require('express').Router();
const tripsController = require('../controllers/trips');

router.route('/trips')
  .get(tripsController.indexTripRoute)
  .post(tripsController.createTripRoute);

router.route('/trips/:id')
  .get(tripsController.showTripRoute)
  .delete(tripsController.deleteTripRoute);

router.route('/trips/:id/edit')
  .put(tripsController.updateTripRoute);

module.exports = router;
