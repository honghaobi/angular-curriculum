var app = angular.module('circleApp', []);

app.directive('gsDie', function() {
  return {
    controller: function($scope) {
      $scope.view = {};
      $scope.view.roll = function(element) {
        $scope.view.randomNum = Math.ceil(Math.random()*6);
        element.html('<div class="die">' + $scope.view.randomNum+ '</div>');
      };
    },
    template: '<div class="die">1</div>',
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.view.roll(element);
      });
    }
  };
});
