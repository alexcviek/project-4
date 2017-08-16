angular
.module('tripApp')
.factory('Trip', Trip);

Trip.$inject = ['$resource'];
function Trip($resource){
  return $resource('/api/trips/:id', { id: '@id' }, {
    'update': { method: 'PUT' }
  });
}
