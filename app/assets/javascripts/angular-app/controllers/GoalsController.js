angular
  .module('app')
  .controller('GoalsController', GoalsController);
function GoalsController(GoalService) {
  var ctrl = this;
  debugger;
  ctrl.goals = GoalService.Goals();
}
