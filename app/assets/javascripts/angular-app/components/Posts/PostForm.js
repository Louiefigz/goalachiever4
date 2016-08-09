function addPostForm() {
  return{
    controller: 'PostsController',
    restrict:'E',
    templateUrl: 'components/PostForm.html'
  }

};

angular.module('app').directive('addPostForm', addPostForm);
