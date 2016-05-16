(function() {
    'use strict';

    angular
        .module("pirates")
        .service("pirateService", pirateService);

    function pirateService() {
      var pirateService = {};

      return pirateService;
    };
})();
