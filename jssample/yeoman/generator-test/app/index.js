
var generators = require('yeoman-generator');

module.exports  = generators.Base.extend({

	constructor : function(){
		// Calling the super constructor is important so our generator is correctly set up
    	generators.Base.apply(this, arguments);

    	// Next, add your custom code
    	this.option('coffee'); // This method adds support for a `--coffee` flag
	},

	method1 : function(){
		console.log('mehtod1 just run');
	},

	method2 : function(){
		 console.log('method2 just run');

		 console.log(this.templatePath('index.html'));
		 console.log(this.destinationPath('index.html'));

		 this.fs.copyTpl(
				this.templatePath('index.html'),
				this.destinationPath('index.html'),
				{
					title : 'Template with yeoman'
				}

			);
	}
});