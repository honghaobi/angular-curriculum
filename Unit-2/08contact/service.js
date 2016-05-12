(function() {
    'use strict';

    angular
        .module("app")
        .service("ContactList", ContactList);

    function ContactList($http) {
      var ContactList = {}

      ContactList.contactList = [];

      ContactList.addContact = function(obj){
        ContactList.contactList.push(obj);
        ContactList.getGif(obj.name);
      };
      ContactList.getGif = function(name){
        $http.get(`http://api.giphy.com/v1/gifs/search?q=${name}&api_key=dc6zaTOxFJmzC`)
          .then(function(data){
            ContactList.contactList[ContactList.contactList.length - 1].gif = data.data.data[0].images.downsized.url;
            console.log(ContactList.contactList);
        });
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
