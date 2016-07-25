angular
  .module('app')
  .factory('Goal', Goal);
function Goal($resource) {


    var Goal = $resource('http://localhost:3003/api/v1/goals', {id: '@id'}, {
    update: { method: 'PUT' },
    query: { method: 'GET'},
    post: { method: 'POST'},
    get: { method: 'GET'}
  });
  return Goal;
}
