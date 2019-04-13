
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

// array
var a = [1, 2, 3];
var mixedAry = [1, 'hello', 99.0];
console.log([a, mixedAry]);

// dict/map/associate array (Plain JS style)
//var dict = new Object();

// or the shorthand way
// var dict = {};

// Init values
var dict = {
    FirstName: "Zemian",
    "foo": 1,
    99: "bar"
};

// using the Indexer
dict["foo"] = 2;
dict[99] = "one";
dict.FirstName = "Lily";
console.log(dict);

// looping
for (var key in dict) {
    console.log(dict[key]);
}

// == The new JS Map type
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}); // undefined, because keyFunc !== function () {}
console.log(myMap);

for (var [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
