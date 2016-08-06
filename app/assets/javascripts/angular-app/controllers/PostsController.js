angular
  .module('app')
  .controller('PostsController', PostsController);

function PostsController($scope, $state, PostService, $resource, $rootScope, GoalService) {


  var goalId = window.location.href.split('/')[window.location.href.split('/').length -1];

  this.addPost = function(data) {


    PostService.createPosts(data.name, data.content, goalId).then(function(resp){
      // GoalService.getGoals().then(function(resp){
      //   ctrl.goals = resp.data.goals;
      // });
      // ctrl.getGoals();
      // debugger;
      // ctrl.goal.posts.push(resp.data.goal);
      // debugger;
    });
  };


}
