angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(Goal, $scope, $state, Post, $resource, $rootScope, $location, $q) {

  var ctrl = this;

  if ($location.path() == '/goals') {
    return ctrl.goals = Goal.query();
  };


  ctrl.newGoal = function(data){
    debugger;
    new Goal(data);
  };


  var goalId = location.hash.split('/')[window.location.hash.split('/').length -1];
  ctrl.goal = Goal.query({ id: goalId });
  // ctrl.goal.$promise.then(function(resp){
  //   console.log(resp);
  //   debugger;
  // });




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
