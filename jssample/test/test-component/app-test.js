define(['app'],function(app){
	
	console.log ( 'test');
	describe('app model', function(){
		it('should app hve name',function(){
			var instance = new app();
 
			expect(instance.name).toBe('app name');
		});

		it('should have welcome message',function(){
			var instance = new app();

			expect(instance.getMsg()).toEqual('some');
		})

	});

});