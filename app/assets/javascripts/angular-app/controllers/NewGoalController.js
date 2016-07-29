angular
  .module('app')
  .controller('NewGoalController', NewGoalController);

function NewGoalController(GoalService, $location, $state) {
  // we will use $location to route back to another state
  var ctrl = this;
  // make a new note


  ctrl.addGoal = function(data) {
  GoalService.postGoals(data).then(function(resp){
    debugger;
    $state.go('/goals');
  })


  };
}
