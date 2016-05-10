angular.module("app").controller('HomeController', function($scope){
  $scope.home = 'henrys home';
}).controller('DogController', function($scope){
  $scope.dog = 'Jay';
}).controller('BioController', function($scope){
}).controller('ProjectController', function($scope){
}).controller('ResumeController', function($scope){
}).controller('HeaderController', function($scope, $location){
  $scope.isActive = function (viewLocation) {
     return viewLocation === $location.path();
  };
});
