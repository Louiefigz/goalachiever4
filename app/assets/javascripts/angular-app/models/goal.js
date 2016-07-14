angular
  .module('app')
  .factory('Goal', Goal)
function Goal($resource) {

  console.log("Goal.js");
  var Goal = $resource('http://localhost:3002/api/v1/goals/:id.json', {id: '@id'}, {
  update: { method: 'PUT' },
  post: { method: 'POST'},
  get: { method: 'GET'}
});
  return Goal;
}
