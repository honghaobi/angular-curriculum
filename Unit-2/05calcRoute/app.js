angular.module("app", ['ngRoute'])
.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/:operator/:num1/:num2', {
      templateUrl: 'calc.html',
      controller: 'CalcParamsController'
    }).when('/:operator/?', {
      templateUrl: 'calc.html',
      controller: 'CalcQueryController'
    });
})
.controller('CalcParamsController', function($scope, $routeParams){
    var operator = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/"
    };

    $scope.answer = eval($routeParams.num1 + operator[$routeParams.operator] + $routeParams.num2);
})
.controller('CalcQueryController', function($scope, $location, $routeParams){

    if ( $location.search().hasOwnProperty( 'x' ) && $location.search().hasOwnProperty( 'y' )) {
     var x = $location.search()['x'];
     var y = $location.search()['y'];
  }
    var operator = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/"
    };

    $scope.answer = eval(x + operator[$routeParams.operator] + y);
});
