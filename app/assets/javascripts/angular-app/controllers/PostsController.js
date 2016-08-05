angular
  .module('app')
  .controller('PostsController', PostsController);

function PostsController($scope, $state, PostService, $resource, $rootScope) {




  this.addPost = function(data) {
    debugger;
    PostService.createPosts(data).then(function(resp){
      // ctrl.getGoals();
      debugger;
      ctrl.goals.push(resp.data.goal);
      // debugger;
    });
  };


}
