(function() {
    'use strict';

    angular
        .module("pirates")
        .factory("pirateService", pirateService);

    function pirateService($http) {
      return {
        all: function() {
          return $http.get('/api/pirates');
        }
      }
    }
})();
