(function() {
    'use strict';

    angular
        .module("app")
        .controller("FirstController", FirstController);

    FirstController.$inject = ['firstService'];

    function FirstController(firstService) {
        var vm = this;
        vm.greeting = firstService.sayHi();
        vm.users = firstService.getAllUsers();
        vm.message = firstService.addUser('steve');
    }
})();
