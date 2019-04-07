// Declaring vars
a = 99;
var b = 99.9;
let c = 100.1;
const d = 3.14;
console.log([a, b, c, d]);

// re-assignment
a = 88;
b = 88.9;
c = 88.1;
//d = 88.14; // This will fail since we can't reassign const var!
console.log([a, b, c, d]);


// Built-in types
function printType(x) {
    console.log(x + ", type=" + typeof(x));
}
printType(99);
printType(99.11);
printType(true);
printType(false);
printType('foo');
printType(`hello ${a}`);
printType(1 / 0);
printType([1, 2, 3]); // array
printType({'foo': 123, 'bar': 99}); // object / map
