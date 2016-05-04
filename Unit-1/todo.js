var TodoApp = angular.module('TodoApp', []);

TodoApp.controller('TodoController', TodoController);

function TodoController($scope) {
  $scope.vm = {};
  $scope.vm.todos = [{
    title: 'Learn Angular',
    priority: 1,
    finished: false
  },{
    title: 'Feed the Dog',
    priority: 4,
    finished: false
  },{
    title: 'Do the dishes',
    priority: 7,
    finished: false
  }];

  $scope.vm.addTodo = function() {
    $scope.vm.todos.push({
      title: $scope.vm.newTodo,
      priority: 10,
      finished: false
    });

    $scope.vm.newTodo = '';
  }

  $scope.vm.deleteTodo = function(index) {
    console.log(index)
    $scope.vm.todos.splice(index, 1);
    // remove from array
  }
}
