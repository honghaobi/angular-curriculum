
(function() {
    'use strict'
    angular
        .module('simpleDirectiveApp', []).directive('gsAngularLogo', gsAngularLogo);

        function gsAngularLogo() {
          return {
            templateUrl: 'angular.html'
          };
        };
})();
