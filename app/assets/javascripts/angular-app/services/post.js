angular
  .module('app')
  .service('PostService', ['$http', '$q',  function($http, $q){


    this.makeAjaxCall = function(httpMethod, route, data){
       // Create deferred object with $q

       var deferred = $q.defer();

       // Make ajax call to user route and return data
       httpMethod(route, data).then(
         // Success callback - return data with user info
         function(resp){

           deferred.resolve(resp);
         // Error callback - return data with errors
       }, function(resp){
           deferred.resolve(resp);
         }
       );

    return deferred.promise;
  }


  this.createPosts = function(data){
    debugger;
    var httpMethod = $http.post;
    var route = '/api/v1/goals';
    var data = {
      posts: {
        name: postParams,
        content: postParams

      }
    }

    return this.makeAjaxCall(httpMethod, route);
  };

}]);
