/*
Math is a built-in object that has properties and methods for mathematical constants and functions.
Not a function object.

Unlike the other global objects, Math is not a constructor. All properties and methods of Math are static.
You refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the
method's argument. Constants are defined with the full precision of real numbers in JavaScript.\
 */

// Examples
console.log("Math Constants");
console.log([Math.PI, Math.E, Math.LOG2E]);

console.log("Math functions");
console.log(Math.random());
console.log(Math.sin(Math.random()));
console.log(Math.sqrt(49));
console.log(Math.exp(99));
console.log(Math.floor(Math.random()));

// Extending Math object!
console.log("Extending Math");
/* Variadic function -- Returns the greatest common divisor of a list of arguments */
Math.gcd = function() {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
};
console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
