var app = angular.module('app', []);

app.directive('gsParent', function() {
  return {
    templateUrl: 'partials/parent.html',
    controller: function($scope) {
      $scope.view = {};
      $scope.view.parentMessage = function() {
        alert("I live on the parent!");
      };
    },
  };
});

app.directive('gsChild', function() {
  return {
    templateUrl: 'partials/child.html',
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.view.parentMessage();
      });
    }
  };
});
