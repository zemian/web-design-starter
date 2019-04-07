/*
The Function constructor creates a new Function object. Calling the constructor directly can create
functions dynamically, but suffers from security and similar (but far less significant) performance
issues to eval. However, unlike eval, the Function constructor creates functions which execute in the
global scope only.
 */

var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8

/*


The Function constructor creates a new Function object. Calling the constructor directly can create
functions dynamically, but suffers from security and similar (but far less significant) performance
issues to eval. However, unlike eval, the Function constructor creates functions which execute in the
global scope only.

Every JavaScript function is actually a Function object. This can be seen with the
code (function(){}).constructor === Function which returns true.
 */
console.log((function(){}).constructor === Function);
