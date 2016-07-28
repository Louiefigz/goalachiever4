angular
  .module('app')
  .controller('GoalsController', GoalsController);
function GoalsController(GoalService) {
  var ctrl = this;
  ctrl.goals = GoalService.query();
}
