(function() {
    'use strict';

    angular
        .module("app")
        .controller("pokeController", pokeController);

    pokeController.$inject = ['pokeService'];

    function pokeController(pokeService) {
      var vm = this;
      vm.catchEm = function(pokemonId){
        pokeService.catchEm(pokemonId).then(function(pokeData){
          vm.pokeData = pokeData;
          console.log(pokeData);
        });
      }
    }
})();
