(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "template.html",
                controllerAs: "FC",
                controller: "FirstController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
