/*
See also:
- Iterable Protocol (object that works for "for..of")
    * A iterable object must has "@@iterator" property.
    * String, Array or Map are iterable objects. But Object is not!

- Iterator Protocol
    * A iterator object must has "next()" method. It must returns minimal of "done" and "value" properties.
    * String has built-in iterator object. But you need explicit Symbol to access it.
*/

// == Iterable
let a = [1, 2, 3];
for (let x of a) {
    console.log(x);
}

// == Iterator
let s = "hello";
let iterator = s[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Spread operator will auto expand iterator
let sAry = [...s];
console.log(sAry);

// Explicit Iterator
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]);

// Yield Generator object (function*)
function* myGenerator() {
    yield 4;
    yield 5;
    yield 6;
}
console.log([...myGenerator()]);

// NOTE You can't use "for..of" to loop a Generator object!
console.log("Nothing will output here...");
for (var x in myGenerator()) {
    console.log(x);
}

// More Generator example
// https://gist.github.com/jfairbank/8d36e4bde9c16dc0bac7
function* fibonacci(n) {
    const infinite = !n && n !== 0;
    let current = 0;
    let next = 1;

    while (infinite || n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}
console.log([...fibonacci(20)]);
