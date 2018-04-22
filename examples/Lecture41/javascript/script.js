var message = "in global";
console.log("global: message = " + message);
console.log(this);
function a() {
	var message = "inside a";
	function b() {
		console.log('this in b is: ', this.message);
		console.log("a: message = " + message);
	}
	b();
}

a();