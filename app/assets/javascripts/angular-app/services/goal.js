// angular
//   .module('app')
//   .service('GoalService', ['$http', '$q',  function($http, $q){
//
//
//     this.makeAjaxCall = function(httpMethod, route, data){
//        // Create deferred object with $q
//
//        var deferred = $q.defer();
//
//        // Make ajax call to user route and return data
//        httpMethod(route, data).then(
//          // Success callback - return data with user info
//          function(resp){
//
//            deferred.resolve(resp);
//          // Error callback - return data with errors
//        }, function(resp){
//            deferred.resolve(resp);
//          }
//        );
//
//     return deferred.promise;
//   }
//
//
//   this.getGoals = function(){
//     var httpMethod = $http.get;
//     var route = '/api/v1/goals';
//     // var data = {params: {goals: goalsParams}}
//
//     return this.makeAjaxCall(httpMethod, route);
//   };
//
//
//
//
//
//
//   this.postGoals = function(goalsParams){
//     var httpMethod = $http.post;
//     var route = '/api/v1/goals';
//     var data = {
//       goal: {
//         body: goalsParams
//       }
//     }
//     return this.makeAjaxCall(httpMethod, route, data);
//   }
//
//   var goalId = window.location.href.split('/')[window.location.href.split('/').length -1];
//
//   this.showGoal = function(){
//     var httpMethod = $http.get;
//     var route = '/api/v1/goals/' + goalId;
//     return this.makeAjaxCall(httpMethod, route);
//   }
//
// }]);
//
//

angular
  .module('app')
  .factory("Goal", Goal);

function Goal($resource) {
  var Goal =[];
  Goal = $resource('/api/v1/goals/:id', {id: '@id'}, {
    query: {method: 'GET', isArray: false },
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });
  
  return Goal;

}
