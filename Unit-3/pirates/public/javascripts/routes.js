(function() {
    angular
        .module("pirates")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "views/pirates.html",
                controllerAs: "Pirates",
                controller: "PiratesController"
            })
            .when('/new', {
                templateUrl: "views/new.html",
                controllerAs: "Pirates",
                controller: "PiratesController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
