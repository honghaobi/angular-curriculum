(function() {
    'use strict'
    angular
        .module('app').directive('caffeineMeter', caffeineMeter);

        function caffeineMeter() {
          return {
            templateUrl: 'caffeine.html'
          };
        };
})();
