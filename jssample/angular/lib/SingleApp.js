var singleApp = angular.module("singleApp",['ngRoute']);

singleApp.factory('personFactory', function(){
	var pf = {

		list : [
			{id:123, name:'john', location:'mumbai'}
		],

		add : function(newItem){

			this.list.push(newItem);
		},

		getById : function(id){
			var found  =null;
			
			for(var cnt=0; cnt<this.list.length; cnt++){
				
				if(this.list[cnt].id == id){
					found = this.list[cnt];
					break;
				}
			}


			return found;
		}
	}

	return pf;
});


var PersonListController = function(personFactory){
	var personList = this;
	personList.persons = personFactory.list;
};

var PersonViewController = function(personFactory, $routeParams){
	var personView = this;
	console.log('route param :', $routeParams.id);
	var p = personFactory.getById($routeParams.id);
	
	if(p){
		personView.id=p.id;
		personView.name  =p.name;
		personView.location = p.location;
	}else{
		personView.id='';
		personView.name="";
		personView.location="";
	}

}

var PersonController = function(personFactory){
	var person = this;
	person.id="";
	person.name="";
	person.location="";

	var clear = function(){
		person.id="";
		person.name="";
		person.location="";		
	};

	this.add = function(){

		if(person.id && person.name && person.location){

			personFactory.add({
				id : person.id,
				name : person.name,
				location : person.location
			});

			clear();
		}
		else
			console.log('Invalid Form');
	}
};

singleApp
	.controller("PersonListController", PersonListController)
	.controller("PersonController", PersonController)
	.controller("PersonViewController", PersonViewController);


singleApp.config([ "$routeProvider", function($routeProvider){
	$routeProvider
		.when('/persons', {
			templateUrl : 'partial/person-list.html',
			controller : 'PersonListController'
		}).
		when('/persons/new', {
			templateUrl : 'partial/person-new.html',
			controller : 'PersonController'
		}).
		when('/persons/:id',{
			templateUrl : 'partial/person-view.html',
			controller : 'PersonViewController'
		}).
		otherwise({
			redirectTo : '/persons'
		})
}]);
