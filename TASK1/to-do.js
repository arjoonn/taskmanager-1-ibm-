angular.module('todoApp', [])
  .controller('TodoListController', function() {
    //var to hold the list of todos
    var todoList = this;
    todoList.todos = [];
     
    //adding new todo items
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
 
      //clear the form after adding adding a new todo
      todoList.todoText = '';
    };
  
    //function to count the items that remain to be completed 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
     
    //function to clear the completed todos
    todoList.clear = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });