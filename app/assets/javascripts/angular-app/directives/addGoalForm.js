function addGoalForm() {
  return{
    controller: 'GoalsController',
    restrict:'E',
    templateUrl: 'components/addGoalForm.html'
  }

};

angular.module('app').directive('addGoalForm', addGoalForm);
