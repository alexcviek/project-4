const router = require('express').Router();
const tripsController = require('../controllers/trips');

router.route('/trips')
  .get(tripsController.indexTripRoute)
  .post(tripsController.createTripRoute);

router.route('/trips/:id')
  .get(tripsController.showTripRoute)
  .put(tripsController.updateTripRoute)
  .delete(tripsController.deleteTripRoute);


module.exports = router;
