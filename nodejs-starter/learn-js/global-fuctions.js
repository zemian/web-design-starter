// Global Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Function_properties


// == eval()
// The eval() function evaluates JavaScript code represented as a string.
console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false

// == parseInt()
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

function roughScale(x, base) {
    var parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0

// == encodeURI()
// The encodeURI() function encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
var uri = 'https://mozilla.org/?x=шеллы';
var encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
    console.log(decodeURI(encoded));
    // expected output: "https://mozilla.org/?x=шеллы""
} catch(e) { // catches a malformed URI
    console.error(e);
}