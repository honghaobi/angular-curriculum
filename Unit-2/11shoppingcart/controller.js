(function() {
    'use strict';

    angular
        .module("app")
        .controller("HomeController", HomeController)
        .controller("CartController", CartController)
        .controller("MenuController", MenuController);

    HomeController.$inject = ['shoppingService'];
    CartController.$inject = ['shoppingService'];

    function HomeController(shoppingService) {
      var vm = this;
      shoppingService.getItems().then(function(data){
        vm.items = data.items;
      });
      vm.addToCart = shoppingService.addToCart;
    }

    function CartController(shoppingService) {
      var vm = this;
      vm.cart = shoppingService.cart;
      vm.editQuantity = function(name, quantity){
        shoppingService.editQuantity(name, quantity);
        vm.totalPrice = shoppingService.getTotalPrice();
      }
      vm.deleteItem = function(name){
        shoppingService.deleteItem(name);
        vm.totalPrice = shoppingService.getTotalPrice();
      }
      vm.totalPrice = shoppingService.getTotalPrice();
    }

    function MenuController(shoppingService) {
      var vm = this;
      vm.cart = shoppingService.cart;
      shoppingService.getItems().then(function(data){
        vm.allCategory = data.allCategory;
      });
      vm.pay= function(){
        swal({  title: "Pay!",
                text: "Paying Yo Sweet Ass Tea",   type: "success",   confirmButtonText: "Nice" });
      }
    }

})();
