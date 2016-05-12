(function() {
    'use strict';

    angular
        .module("app")
        .service("ContactList", ContactList);

    function ContactList() {
      var ContactList = {}

      ContactList.contactList = [{name:"henry", email:"henry@google.com"}, {name:"steve", email:"steve@apple.com"}];

      ContactList.addContact = function(obj){
        ContactList.contactList.push(obj);
      };
      ContactList.removeContact = function(name){
        var contactObj = ContactList.contactList.filter(function(obj){
          return obj.name == name;
        });
        ContactList.contactList.splice(ContactList.contactList.indexOf(contactObj),1);
      };
      return ContactList;
    };
})();
