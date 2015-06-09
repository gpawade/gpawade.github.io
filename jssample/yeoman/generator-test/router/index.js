var generators = require('yeoman-generator');

module.exports  = generators.NamedBase.extend({

	constructor : function(){
		// Calling the super constructor is important so our generator is correctly set up
    	generators.NamedBase.apply(this, arguments);

    	// Next, add your custom code
    	this.option('coffee'); // This method adds support for a `--coffee` flag

    	console.log('router constructor');
    	console.log(arguments);

	},


	method1 : function(){
		console.log('router mehtod1 just run');
	},

	method2 : function(){
		 console.log('router method2 just run');
		
		

	});