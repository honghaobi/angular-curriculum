(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "todolist.html",
                controllerAs: "Todo",
                controller: "TodoController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
