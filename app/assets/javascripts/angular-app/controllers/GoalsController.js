angular
  .module('app')
  .controller('GoalsController', GoalsController);
function GoalsController(Goal) {
  var ctrl = this;
  ctrl.goals = Goal.query();
}
