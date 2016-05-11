(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "answer.html",
                controllerAs: "Answer",
                controller: "MathController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
