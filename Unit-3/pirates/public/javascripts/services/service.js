(function() {
    'use strict';

    angular
        .module("pirates")
        .factory("pirateService", pirateService);

    function pirateService($http, $location) {
      return {
        all: function() {
          return $http.get('/api/pirates');
        },
        createNewPirate: function(name, accesory, poison, image_url) {
          var data = {
            name, accesory, poison, image_url
          }
          return $http.post('/api/pirates', data);
        },
        updatePirate: function(name, accesory, poison, image_url, id) {
          var data = {
            name, accesory, poison, image_url
          }
          return $http.put('/api/pirates/'+ id, data);
        },
        deletePirate: function(id){
          return $http.delete('/api/pirates/' + id);
        }
      }
    }
})();
