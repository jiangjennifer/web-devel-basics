console.log((5 + 5) / 3);

// for (var i = 0; i < 3; i++) {
// 	console.log('first loop!');
// }

// console.log('i is: ', i);

function a() {
	var i = 1;
	for (var i = 0; i < 3; i++) {
	console.log('first loop!');
	};

	console.log('i after first loop is: ', i);
	for (var i = 1; i < 4; i++) {
	console.log('second loop!');
	};

	console.log('i after sec loop is: ', i);

}
a();

var i = 1;
var i = 2;

function orderChickenWith(sideDish) {
	sideDish = sideDish || 'whatever';
	console.log('Chicken with ' + sideDish);
}

orderChickenWith('brocolli');
