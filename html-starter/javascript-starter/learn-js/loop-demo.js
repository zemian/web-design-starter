/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration


 for statement
 do...while statement
 while statement
 labeled statement
 break statement
 continue statement
 for...in statement
 for...of statement


 */

var step;
for (step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

// Looping over array, use for...of
let list1 = 'hello'.split('');
console.log(list1);
for (let c of list1) {
    console.log(c);
}

// Looping over map
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
    console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
    console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

// for...in is for looping over key/name of properties of an object!
let car = {'color': "Blue", 'make': "Honda"}
for (let k in car) {
    console.log(k);
}
