angular
  .module('tripApp')
  .controller('TripIndexCtrl', TripIndexCtrl)
  .controller('TripShowCtrl', TripShowCtrl);

TripIndexCtrl.$inject = ['Trip'];
function TripIndexCtrl(Trip) {
  const vm = this;

  vm.all = Trip.query();
}

TripShowCtrl.$inject = ['Trip', '$stateParams', '$state'];
function TripShowCtrl(Trip, $stateParams, $state) {
  const vm = this;

  vm.trip = Trip.get($stateParams);

  function tripsDelete() {
    vm.trip
      .$remove()
      .then(() => $state.go('tripsIndex'));
  }

  vm.delete = tripsDelete;
}
