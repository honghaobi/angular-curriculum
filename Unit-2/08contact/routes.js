(function() {
    angular
        .module("app")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: "contacts.html",
                controllerAs: "Contact",
                controller: "ContactController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
