(function() {
    'use strict';

    angular
        .module("app")
        .service("mathService", mathService);

    function mathService() {
      return {
        add: function(num1, num2){
          return num1 + num2;
        },
        subtract: function(num1, num2){
          return num1 - num2;
        },
        multiply: function(num1, num2){
          return  num1 * num2;
        },
        divide: function(num1, num2){
          return num1/num2;
        },
        power: function(num1, num2){
          return Math.pow(num1, num2);
        },
        calculate: function(num1, num2, operator){
          return this[operator](num1, num2);
        
        }
      };
    }
})();
