(function() {
    'use strict';

    angular
        .module("app")
        .controller("ContactController", ContactController);

    ContactController.$inject = ['ContactList'];

    function ContactController(ContactList) {
      var vm = this;
      vm.contacts = ContactList.contactList;
      vm.addContact = function (name, email){
        var obj = {name, email}
        ContactList.addContact(obj);
      };
      vm.removeContact = function (name){
        ContactList.removeContact(name);
      }
    }
})();
