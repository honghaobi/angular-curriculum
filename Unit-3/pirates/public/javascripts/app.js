(function() {
    'use strict'

    angular
        .module("pirates", ['ui.router'])
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
