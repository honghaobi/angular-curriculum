(function() {
    'use strict';

    angular
        .module("pirates")
        .controller("PiratesController", PiratesController)

    PiratesController.$inject = ['pirateService', '$location'];

    function PiratesController(pirateService, $location) {
      var vm = this;

      vm.getPirates = function(){
        pirateService.all().then(function(data){
          vm.pirates = data.data;
        });
      }
      vm.getPirates();

      vm.create = function(name, accesory, poison, image_url){
        pirateService.createNewPirate(name, accesory, poison, image_url).then(function(data){
            vm.getPirates();
            $location.url('/');
        });
      }

      vm.update = function(name, accesory, poison, image_url, id){
        pirateService.updatePirate(name, accesory, poison, image_url, id).then(function(data){
            vm.getPirates();
            $location.url('/');
        });
      }

      vm.delete = function(id){
        pirateService.deletePirate(id).then(function(data){
          vm.getPirates();
        });
      }
    }

})();
