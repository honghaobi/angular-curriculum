(function() {
    'use strict';

    angular
        .module("pirates")
        .controller("PiratesController", PiratesController)

    PiratesController.$inject = ['pirateService'];

    function PiratesController(pirateService) {
      var vm = this;
      vm.getPirates = pirateService.all().then(function(data){
        vm.pirates = data.data;
      });
      vm.create = pirateService.createNewPirate;
    }

})();
