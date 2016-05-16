(function() {
    'use strict';

    angular
        .module("pirates")
        .factory("pirateService", pirateService);

    function pirateService($http) {
      return {
        all: function() {
          return $http.get('/api/pirates');
        },
        createNewPirate: function(name, accesory, poison, image_url) {
          var data = {
            name, accesory, poison, image_url
          }
          $http.post('/api/pirates', data);
        }

      }
    }
})();
