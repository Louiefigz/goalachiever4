function AuthController($scope, $state, Auth){

  $scope.login = function(){
    debugger;
    Auth.login($scope.user).then(function(){
      $state.go('/');
    });
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('/');
    });
  };


}

angular
  .module('app')
  .controller('AuthController', AuthController)
