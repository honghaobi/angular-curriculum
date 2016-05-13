(function() {
    'use strict';

    angular
        .module("app")
        .controller("pokeController", pokeController);

    pokeController.$inject = ['pokeService'];

    function pokeController(pokeService) {
      var vm = this;
      vm.catchEm = function(){
        vm.pokeArray = [];
        for (var i = 0; i < 5; i++) {
          pokeService.catchEm().then(function(pokeData){
            vm.pokeArray.push(pokeData);
          });
        }
      }
    }
})();
