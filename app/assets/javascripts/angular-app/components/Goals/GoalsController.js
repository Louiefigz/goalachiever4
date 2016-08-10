angular
  .module('app')
  .controller('GoalsController', GoalsController);

function GoalsController(Goal, $scope, $state, Post, $resource, $rootScope, $location, $q) {

  var ctrl = this;

debugger;
  if ($location.path() == '/goals') {
    return ctrl.goals = Goal.query();
  }

  ctrl.newGoal = new Goal();


  var goalId = location.hash.split('/')[window.location.hash.split('/').length -1];
  ctrl.goal = Goal.get({ id: goalId });
  // var deferred = $q.defer();



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
