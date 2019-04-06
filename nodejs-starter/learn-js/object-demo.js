/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.

When called in a non-constructor context, Object behaves identically to new Object().
 */

console.log("New empty object");
console.log(new Object());
foo = {}; // Should be the same as above
console.log(foo);

// Empty objects
// The following examples store an empty Object object in o:
var o = new Object();
var o = new Object(undefined);
var o = new Object(null);

// Boolean Objects
// equivalent to o = new Boolean(true);
var o = new Object(true);
// equivalent to o = new Boolean(false);
var o = new Object(Boolean());

// You can wrap an int, but it's not an INT but Object
console.log("New object wraps single value");
foo2 = new Object(99);
console.log(foo2);
console.log(typeof(foo2));

// Constructor - The 'Object' is a function/constructor that return new instance
console.log("Object constructor function");
console.log(Object);
console.log(new Object()); // Should be same as above
console.log(Object()); // Note this is not the same as using 'new'!

// Default length is 1
// The meaning of length is class implementation specific
console.log("Object length");
console.log(Object.length);
console.log(new Object().length); // This is undefined! We can't get length from instance!
console.log("abc".length);
console.log([1, 2, 3, 4, 5].length);
