require.config({
	baseUrl : 'script/',
	path : {
		cal:'cal'
	}
});

//require(["add"]);


var onAdd = function(){
	console.log("add button clicked");
	require(["cal"],function(){
		console.log(cal.add(5,2));
	});
	return false;
};



var onSub = function(){
	console.log("sub button clicked");
	require(["cal"],function(){
		console.log(cal.sub(5,2));
	});
};