var a = 7;
var b = a;
console.log('a is: ', a);
console.log('b is: ', b);

b = 5; 
console.log('After update');
console.log('a is: ', a);
console.log('b is: ', b);

/* Pass by reference */
var a = {x: 7};
var b = a;
console.log('a is: ', a);
console.log('b is: ', b);

b.x = 5;
console.log('after b.x update to 5');
console.log('a is: ', a);

b = {y: 10};
console.log('after b change reference to {y: 10}');
console.log('a is: ', a);