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


  this.createPosts = function(name, content, id, user_id){
    // debugger;
    var number = parseInt(id)
    var httpMethod = $http.post;
    var route = '/api/v1/posts';
    var data = {
      post: {
        name: name,
        content: content,
        user_id: user_id,
        goal_id: number

      }
    }

    return this.makeAjaxCall(httpMethod, route, data);
  };

}]);
