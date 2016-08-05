function addPostForm() {
  return{
    controller: 'PostsController',
    restrict:'E',
    templateUrl: 'components/addPostForm.html'
  }

};

angular.module('app').directive('addPostForm', addPostForm);
