angular.module("app", ['ngRoute'])
.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'DogController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
