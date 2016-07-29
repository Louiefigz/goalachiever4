angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(GoalService, $resource) {
  GoalService.getGoals().then(function(resp){
    debugger;
  })
}
