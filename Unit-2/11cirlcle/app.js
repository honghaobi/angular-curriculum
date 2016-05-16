var app = angular.module('circleApp', []);

app.directive('gsBigRedCircle', function() {
  return {
    controller: function($scope) {
      $scope.view = {};
      $scope.view.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    },
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        scope.view.sayHi();
      });

    }
  };
});
