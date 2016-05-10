angular.module("app", ['ngRoute']).controller('httpController', httpController);

function httpController($http) {
  var vm = this;

  vm.requestData = function(){
    $http.get('https://still-tundra-8387.herokuapp.com/messages')
      .error(function(error, status){
        vm.error = {error: error, status: status};
        console.log(vm.error);
      })
      .then(function(data){
        console.log(data);
        vm.data = data.data;
    });
  }

  vm.requestData();

  vm.postData = function(){
    var data = {
      name: vm.name,
      content: vm.content
    }

    $http.post('https://still-tundra-8387.herokuapp.com/messages', data)
      .then(function(data){
        console.log(data);
        vm.requestData();
    });
  }

}
