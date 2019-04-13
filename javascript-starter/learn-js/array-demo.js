console.log("Array creation");
let a1 = [1, 2, 3];
console.log(a1);
console.log("len=" + a1.length);

console.log("Append/push to array");
let a = [];
a.push('foo');
a.push('bar');
console.log(a);

// Map collection
let a2 = a.map(v => v.toUpperCase());
console.log(a2);

// Delete from array
var a3 = [1, 2, 3, 4, 5, 6];
a3.pop(); // => 6
a3.shift(); // => 1
console.log(a3);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2,2);
console.log([arr, removed]);

delete arr[0]; // NOTE it will NOT affect array length!
console.log(arr);

var arrNew = arr.filter(v => v > 7);
console.log(arrNew);

arr.length = 0; // reset
console.log(arr);
