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
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
