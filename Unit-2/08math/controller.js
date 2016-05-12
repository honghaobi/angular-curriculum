(function() {
    'use strict';

    angular
        .module("app")
        .controller("MathController", MathController);

    MathController.$inject = ['mathService'];

    function MathController(mathService) {
      var vm = this;
      vm.calculate = function() {
        vm.answer = mathService.calculate(vm.num1, vm.num2, vm.operator);
      }
    }
})();
