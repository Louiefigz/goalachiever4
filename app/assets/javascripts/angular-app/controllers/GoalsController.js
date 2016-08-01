angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(GoalService, $resource, $scope) {
  var ctrl = this;

  ctrl.getGoals = function(){
    GoalService.getGoals().then(function(resp){
      ctrl.goals = resp.data.goals;
    });
  };


  ctrl.addGoal = function(data) {
    GoalService.postGoals(data).then(function(resp){
      // ctrl.getGoals();

      ctrl.goals.push(resp.data.goal);
      // debugger;

    });
  };


  ctrl.getGoals();
}
