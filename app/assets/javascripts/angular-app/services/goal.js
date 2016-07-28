
function GoalService($resource) {

  var Goals = $resource('http://localhost:3000/api/v1/goals');

  var Goal = $resource('http://localhost:3000/api/v1/goals/:id', {id: '@id'}, {
    update: { method: 'PUT' },
    delete: {method: 'DELETE'},
    get: { method: 'GET'}
  });


  return{
    Goals: Goals,
    Goal:Goal
  };
}

angular
  .module('app')
  .factory('GoalService', GoalService);
