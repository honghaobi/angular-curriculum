angular.module("app").controller('MainController', MainController);

function MainController($http) {
  var vm = this;

  vm.moviesRequest = function(){
    $http.get(`http://www.omdbapi.com/?s=${vm.input}&type=${vm.type}`)
      .then(function(data){
        vm.movies = data.data.Search;
    });
  }
  vm.movieRequest = function(movieID){
    console.log(vm.tomato);
    $http.get(`http://www.omdbapi.com/?i=${movieID}&tomatoes=${vm.tomato}`)
      .then(function(data){
        vm.showMovie = data.data;
    });
  }
}
