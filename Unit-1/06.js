var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});

app.controller("ExerciseController", function($scope){
  $scope.FavColor = 'Orange';
  $scope.secondsInACentury = 60 * 60 * 24 * 7 * 52 * 10;
  $scope.rightNow = Date.now();
});

app.controller("MadLibsController", function($scope){
  $scope.input = {};
  $scope.output = {};

  $scope.generate = function () {
    $scope.output.boy = $scope.input.boy
    $scope.output.adjective = $scope.input.adjective
    $scope.output.pn1 = $scope.input.pn1
    $scope.output.pn2 = $scope.input.pn2
    $scope.output.insect = $scope.input.insect
    $scope.output.pn3 = $scope.input.pn3
    $scope.output.verb = $scope.input.verb
  }

  $scope.clear = function () {
    $scope.input = {};
    $scope.output = {};
  }
  
});
