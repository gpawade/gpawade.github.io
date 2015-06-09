
var todoApp  = angular.module('todoApp',[]);

todoApp.controller('TodoListController',function(){
	var todoList = this;

	todoList.todos=[];
	todoList.query = "";

	todoList.addTodo = function(){
		todoList.todos.push({
			text : todoList.todoText,
			done : false
		});

		todoList.todoText = "";
	};

	todoList.remaining = function(){
		var count = 0;

		angular.forEach(todoList.todos, function(todo){
			count += todo.done ? 0 : 1;
		});

		return count;
	};

});



//var personApp = angular.module('personApp', []);

todoApp.controller("personListController", function($http){

	var personList = this;

	personList.message = 'welcom';

	personList.list = [];

	 $http.get('person.json').success(function(data) {
	 	console.log(data);
	    personList.list = data;
	  });


});

