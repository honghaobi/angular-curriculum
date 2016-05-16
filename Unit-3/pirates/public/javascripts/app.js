(function() {
    'use strict'

    angular
        .module("pirates", ['ngRoute'])
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
