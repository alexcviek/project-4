angular
  .module('tripApp')
  .controller('TripIndexCtrl', TripIndexCtrl);

TripIndexCtrl.$inject = ['Trip'];
function TripIndexCtrl(Trip) {
  const vm = this;

  vm.all = Trip.query();
}
