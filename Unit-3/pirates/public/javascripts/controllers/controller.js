(function() {
    'use strict';

    angular
        .module("pirates")
        .controller("PiratesController", PiratesController)

    PiratesController.$inject = ['pirateService'];

    function PiratesController(pirateService) {
      var vm = this;
      vm.num = 3;
    }

})();
