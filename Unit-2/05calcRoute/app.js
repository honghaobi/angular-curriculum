angular.module("app", ['ngRoute'])
.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/:num1/:operator/:num2', {
      templateUrl: 'calc.html',
      controller: 'CalcController'
    });
})
.controller('CalcController', function($scope,$routeParams){
    var operator = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/"
    };
    
    $scope.answer = eval($routeParams.num1 + operator[$routeParams.operator] + $routeParams.num2);
});
