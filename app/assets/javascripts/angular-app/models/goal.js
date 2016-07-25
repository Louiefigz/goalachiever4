angular
  .module('app')
  .factory('Goal', Goal)
function Goal($resource) {


  var Goal = $resource('http://localhost:3003/api/v1/goals/:id', {id: '@id'}, {

  update: { method: 'PUT' },
  post: { method: 'POST'},
  get: { method: 'GET'}
});
  return Goal;
}
