angular
.module('tripApp')
.controller('TripIndexCtrl', TripIndexCtrl)
.controller('TripShowCtrl', TripShowCtrl)
.controller('TripNewCtrl', TripNewCtrl);

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

TripNewCtrl.$inject = ['$state', 'Trip'];
function TripNewCtrl($state, Trip){
  const vm = this;
  vm.trip = {};

  function tripCreate(){
    if(vm.tripNewForm.$valid){
      Trip
      .save(vm.trip)
      .$promise
      .then(() => {
        $state.go('tripsIndex');
      });
    }
  }
  vm.create = tripCreate;
}
