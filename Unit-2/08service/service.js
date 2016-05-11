(function() {
    'use strict';

    angular
        .module("app")
        .service("firstService", firstService);

    function firstService() {
      var Users = ['henry', 'kelli', 'will'];
      // we must return an object, everything we return can be accessed externally
      return {
        sayHi: function(){
          return "Hello!"
        },
        sayGoodbye: function(){
          return "Goodbye!"
        },
        getAllUsers: function(){
          return Users;
        },
        addUser: function(user){
          Users.push(user);
          return 'user been added'
        }
      };
    }
})();
