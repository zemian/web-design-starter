console.log("Numbers")
console.log(123);
console.log(123 === 123);
console.log(123 === '123');
console.log(Number(123));
console.log(123 === Number(123));
console.log(123 === new Number(123));
console.log(new Number(123) === Number(123));

// Number examples
console.log("Number range")
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
var biggestInt = 9007199254740991;
var smallestInt = -9007199254740991;
console.log([biggestNum, biggestInt]);

console.log("Convert string to number");
Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN

// BigInt
console.log("BigInt has 'n' suffix");
console.log(123n);
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n
console.log([theBiggestInt, alsoHuge, hugeString, hugeHex, hugeBin]);

// == Compare
// A BigInt is not strictly equal to a Number, but it is loosely so.
0n === 0
// ↪ false

0n == 0
// ↪ true

// But they can compare (<, >, <=, >=) with each other

// They can also mix in array
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
console.log(mixed);

// Calculate prime
function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) return false;
    }
    return true;
}

// Takes a BigInt as an argument and returns a BigInt
function nthPrime(nth) {
    let maybePrime = 2n;
    let prime = 0n;

    while (nth >= 0n) {
        if (isPrime(maybePrime)) {
            nth -= 1n;
            prime = maybePrime;
        }
        maybePrime += 1n;
    }

    return prime;
}

console.log(nthPrime(20n))
// ↪ 73n
