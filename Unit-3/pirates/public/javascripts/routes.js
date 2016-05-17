(function() {
    angular
        .module("pirates")
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "views/pirates.html",
                controllerAs: "Pirates",
                controller: "PiratesController"
            })
            .state('new', {
                url: '/new',
                templateUrl: "views/new.html",
                controllerAs: "Pirates",
                controller: "PiratesController"
            });

    }

})();
