(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "home.html",
                controllerAs: "Home",
                controller: "HomeController"
            })
            .when('/cart', {
                templateUrl: "cart.html",
                controllerAs: "Cart",
                controller: "CartController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
