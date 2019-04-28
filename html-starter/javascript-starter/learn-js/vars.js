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

// == Multiple vars can be define on same line!

// four variables are created and assigned in a single go,
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
console.log([myObj, str, rand, obj]);
