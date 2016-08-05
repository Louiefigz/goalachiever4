angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController($scope, $state, GoalService, $resource, $rootScope) {
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

  ctrl.getGoal = function(id) {
    GoalService.showGoal(id).then(function(resp){
      // ctrl.getGoals();

      ctrl.goal = resp.data.goal;
      // debugger;
      // debugger;
    });
  };

var goalId = window.location.href.split('/')[window.location.href.split('/').length -1];
  ctrl.getGoals();
  //
  if($state.current.name === "home.goal") {

    ctrl.getGoal(goalId);
  }

}
