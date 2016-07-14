angular
  .module('app')
  .controller('NewGoalController', NewGoalController);
function NewGoalController(Goal, $location) {
  // we will use $location to route back to another state
  var ctrl = this;
  // make a new note
  ctrl.goal = new Goal();
  ctrl.addGoal = function() {
    debugger;
    ctrl.goal.$save(function() {
      $location.path('goals');
    });
  };
}
