angular
 .module('app', ['ui.router', 'ngResource', 'templates'])
 .config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.new', {
       url: 'new',
       templateUrl: 'components/addGoalForm.html',
       controller: 'NewGoalController as ctrl'
     })
     .state('home.goals', {
       url: 'goals',
       templateUrl: 'home/goals.html',
       controller: 'GoalsController as ctrl'
     })
     .state('home.goal', {
       url: 'goals/:goalId',
       templateUrl: 'home/goal.html',
       controller: 'GoalsController as ctrl'
     })





  $urlRouterProvider.otherwise('/');
});
