(function() {
    'use strict';

    angular
        .module("app")
        .service("shoppingService", shoppingService);

    function shoppingService($http) {
      var shoppingService = {};
      shoppingService.cart = [];
      shoppingService.getItems = function(){
        return $http.get('tea.json').then(function(data){
            var items = data.data;
            var allCategory = [];
            for (var i = 0; i < items.length; i++) {
              for (var j = 0; j < items[i].categories.length; j++) {
                if ((allCategory.indexOf(items[i].categories[j])) <= 0) {
                  allCategory.push(items[i].categories[j]);
                }
              }
            }
            return {items, allCategory};
        });
      };

      shoppingService.addToCart = function(name, quantity, price, imageUrl){

        var addedToCart = shoppingService.cart.filter(function(obj){
          return obj.name == name;
        });

        if (addedToCart.length > 0) {
            addedToCart[0].quantity += quantity;
        } else {
          shoppingService.cart.push({ name: name, quantity: quantity, price: price, imageUrl: imageUrl});
        }
      }
      shoppingService.editQuantity = function(name, quantity){
        var editItem = shoppingService.cart.filter(function(obj){
          return obj.name == name;
        });
        editItem[0].quantity = quantity;

      }
      shoppingService.deleteItem = function(name){
        var itemObj = shoppingService.cart.filter(function(obj){
          return obj.name == name;
        });
        shoppingService.cart.splice(shoppingService.cart.indexOf(itemObj),1);
      }
      shoppingService.getTotalPrice = function(){
        var totalPrice = 0;
        for (var i = 0; i < shoppingService.cart.length; i++) {
          totalPrice += (shoppingService.cart[i].quantity * shoppingService.cart[i].price);
        }
        return totalPrice;
      }
      return shoppingService;
    };
})();
