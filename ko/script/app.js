function myModel(){
	this.name = "some text";
}



ko.applyBindings(new myModel());


//apply binding with holder
//ko.applyBindings(new myModel(), document.getElementById('hodler'));