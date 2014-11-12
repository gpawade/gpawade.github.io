function MyViewModel(){
	this.name = "some text";
}



ko.applyBindings(new MyViewModel());


//apply binding with holder
//ko.applyBindings(new MyViewModel(), document.getElementById('hodler'));