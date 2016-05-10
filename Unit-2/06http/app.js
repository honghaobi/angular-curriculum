angular.module("app", ['ngRoute']).controller('httpController', httpController);

function httpController($http) {
  var vm = this;
  $http.get('itunes.json')
    .error(function(error, status){
      vm.error = {error: error, status: status};
      console.log(vm.error);
    })
    .then(function(data){
    vm.songs = data.data.results;
    console.log(vm.songs);
  });
}
