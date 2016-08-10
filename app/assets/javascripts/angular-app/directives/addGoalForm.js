function addGoalForm() {
  return{
    controller: 'GoalsController',
    restrict:'E',
    templateUrl: 'components/addGoalForm.html'
    // controllerAs: 'goalCtrl'
  }

};

angular.module('app').directive('addGoalForm', addGoalForm);
