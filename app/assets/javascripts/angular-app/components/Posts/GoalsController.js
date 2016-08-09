angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(Goal, $scope, $state, Post, $resource, $rootScope, $location) {

  var ctrl = this;



  if ($location.path = 'goals') {
    return ctrl.posts = Goal.query();
  }

  ctrl.newGoal = new Goal();

  debugger;
  ctrl.goal = Goal.get({ id: $stateParams.id });

  ctrl.newPost = new Post();

  ctrl.addPost = function(post) {
    ctrl.newPost.name = post.name;
    ctrl.newPost.content = post.content;
    ctrl.newPost.$save(function() {
      // $state.go('goals')
    });
  }

  ctrl.editPost = function(){
    $update
  };

  ctrl.deletePost = function(){
    $delete
  }




}
