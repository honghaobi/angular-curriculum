(function() {
    'use strict';

    angular
        .module("app")
        .controller("TodoController", TodoController);

    TodoController.$inject = ['todoService'];

    function TodoController(todoService) {
      var vm = this;
      vm.todos = todoService.todos;
      vm.addTodo = function (todo){
        todoService.addTodo(todo);
      };
      vm.editTodo = function (todo, editTodo){
        todoService.editTodo(todo, editTodo);
      };
      vm.deleteTodo = function (todo){
        todoService.deleteTodo(todo);
      }
    }
})();
