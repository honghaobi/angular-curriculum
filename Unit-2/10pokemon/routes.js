(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "pokemon.html",
                controllerAs: "Poke",
                controller: "pokeController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
