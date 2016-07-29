angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(GoalService, $resource) {
  var ctrl = this;
  GoalService.getGoals().then(function(resp){
    ctrl.goals = resp.data.goals;
  })
}
