angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(GoalService, $resource) {
  var ctrl = this;

  ctrl.getGoals = function(){
    GoalService.getGoals().then(function(resp){
      ctrl.goals = resp.data.goals;
    });
  };


  ctrl.addGoal = function(data) {
    GoalService.postGoals(data).then(function(resp){
      // debugger;
      // ctrl.getGoals();

      ctrl.goals.push(resp.data.goal);
    });
  };


  ctrl.getGoals();
}
