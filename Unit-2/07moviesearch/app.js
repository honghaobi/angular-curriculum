angular.module("app", ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/allmovies.html',
      controller: 'MainController'
    })
    .when('/:id', {
      templateUrl: 'partials/movie.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
