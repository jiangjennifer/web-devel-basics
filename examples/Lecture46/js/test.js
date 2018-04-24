function multiple(x, y) {
	return x * y;
}

multiple.purpose = 'multiply numbers';

console.log(multiple.purpose);

console.log(multiple(2, 6));

// Function factory 
function makeMultiplier(multiplier) {
	return function(x) {
		return x * multiplier;
	};
};

var multipleBy3 = makeMultiplier(3);
console.log(multipleBy3(10));

// Passing function as arguments
function doOperation(x, operation) {
	return operation(x);
};

var double = function(x) {
	return x * 2;
};

console.log(doOperation(1, double));