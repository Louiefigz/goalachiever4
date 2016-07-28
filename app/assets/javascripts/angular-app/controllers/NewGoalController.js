angular
  .module('app')
  .controller('NewGoalController', NewGoalController);

function NewGoalController(GoalService, $location) {
  // we will use $location to route back to another state
  var ctrl = this;
  // make a new note
  ctrl.newGoal = new GoalService.Goals();

  ctrl.addGoal = function(data) {

    ctrl.newGoal.goal = {};
    ctrl.newGoal.goal.body = data;



    GoalService.Goals.save(ctrl.newGoal, function(resp){

    
    });

    // GoalService.Goals.post(function() {
    //   $location.path('goals');
    // });
  };
}
