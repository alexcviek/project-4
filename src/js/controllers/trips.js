angular
.module('tripApp')
.controller('TripIndexCtrl', TripIndexCtrl)
.controller('TripShowCtrl', TripShowCtrl)
.controller('TripNewCtrl', TripNewCtrl)
.controller('TripEditCtrl', TripEditCtrl);

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
        console.log(vm.trip.numberOfDays)
      })
      .then(() => {
        $state.go('tripsIndex');
      });
    }
  }
  vm.create = tripCreate;
}

TripEditCtrl.$inject = ['Trip', '$stateParams', '$state'];
function TripEditCtrl(Trip, $stateParams, $state) {
  const vm = this;

  Trip.get($stateParams)
    .$promise
    .then((trip) => {
      vm.trip = trip;
      vm.trip.departure = new Date(vm.trip.departure);
    });

  function tripsUpdate() {
    if (vm.tripEditForm.$valid) {
      vm.trip
        .$update()
        .then(() => $state.go('tripsIndex'));
    }
  }

  vm.update = tripsUpdate;
}
