/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

// == Simple function
function square(number) {
    return number * number;
}

// == Parameter pass by reference for object, value for primative
function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

// == Function expression

// Anonymous function exp
var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
console.log(x);

// Named function exp
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3));

// == Passing function as objects
function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
var f = function(x) {
    return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);

// == Function arguments
function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    console.log(result);
    return result;
}
// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

// == Default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // 5

/*
 An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax
 compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions
 are always anonymous. See also this hacks.mozilla.org blog post: "ES6 In Depth: Arrow functions".
 */
var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]
