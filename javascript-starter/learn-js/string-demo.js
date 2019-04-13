/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

console.log("== String samples");
console.log('string text');
console.log("string text");
console.log("中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית");

console.log("== Template string");
let s = "World";
console.log(`Hello ${s}`);

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
console.log(longString);

longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longString);

console.log("== Concat strings");
s = "";
s = s + "foo";
s += " bar";
console.log(s);

console.log("== String index access");
let name = "Zemian";
console.log(name[0]); // same as string.charAt(int);
console.log(name[name.length - 1]);

console.log("== String primative vs object");
var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"

// Careful with eval
var s1 = '2 + 2';             // creates a string primitive
var s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1));        // returns the number 4
console.log(eval(s2));        // returns the string "2 + 2"

console.log("== Looping string one char at time");
let loopStr = "Hello";
for (let i = 0; i < loopStr.length; i++) {
    console.log(loopStr[i]);
}

// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript
var text = 'tree 木';

// With ES6
[...text].forEach(c => console.log(c))

// With the `of` operator
for (const c of text) {
    console.log(c)
}

// With ES5
for (var x = 0, c=''; c = text.charAt(x); x++) {
    console.log(c);
}

// ES5 without the for loop:
text.split('').forEach(function(c) {
    console.log(c);
});

console.log("== Common String methods");
console.log("hello".toUpperCase());
console.log("hello".toUpperCase().toLowerCase());
console.log("hello".indexOf('e')); // => 1
console.log("hello".indexOf('l')); // => 2
console.log("hello".substring(0, 2)); // => he
console.log("  hello ".trim() === "hello");
console.log("hello".split(''));
console.log("hello".search(/l{2}/));
console.log("hello ".repeat(3));
console.log("hello".slice(3, 5));
console.log("hello".endsWith("o"));
console.log("hello".replace('l', 'L'));
