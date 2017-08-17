angular
  .module('tripApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('tripsIndex', {
    url: '/trips',
    templateUrl: 'js/views/trips/index.html',
    controller: 'TripIndexCtrl as tripsIndex'
  })
  .state('tripsShow', {
    url: '/trips/:id',
    templateUrl: 'js/views/trips/show.html',
    controller: 'TripShowCtrl as tripsShow'
  })
  .state('tripsNew', {
    url: '/trips/new',
    templateUrl: 'js/views/trips/new.html',
    controller: 'TripNewCtrl as tripsNew'
  });
  $urlRouterProvider.otherwise('/');
}
