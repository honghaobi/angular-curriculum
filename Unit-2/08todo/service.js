(function() {
    'use strict';

    angular
        .module("app")
        .service("todoService", todoService);

    function todoService() {
      var todoService = {}

      todoService.todos = ['party', 'pingpong', 'eating'];
      todoService.addTodo = function(todo){
        todoService.todos.push(todo);
      };
      todoService.editTodo = function(todo, editTodo){
        todoService.todos[todoService.todos.indexOf(todo)] = editTodo;
      };
      todoService.deleteTodo = function(todo){
        todoService.todos.splice(todoService.todos.indexOf(todo),1);
      };
      return todoService;
    };
})();
