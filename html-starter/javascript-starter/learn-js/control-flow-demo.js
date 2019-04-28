/*

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

 NOTE: Important: JavaScript prior to ECMAScript2015 (6th edition) does not have block scope.

 */

console.log("== while loop");
let x = 0;
while (x < 10) {
    x++;
}
console.log(x);

console.log("random()=" + Math.random());
x = Math.floor(10 * Math.random());
console.log("x = " + x);
if (x > 5) {
    console.log("x is > 5");
} else if (x < 3) {
    console.log("x is < 3");
} else {
    console.log("other.");
}

// == False values
/*
 Falsy values

 The following values evaluate to false (also known as Falsy values):

 false
 undefined
 null
 0
 NaN
 the empty string ("")

 */
let s = "";
if (s) {
    console.log("var s is not empty");
} else {
    console.log("var is empty");
}

// Ternary operator
let out = s ? "empty" : "non-empty";
console.log(out);

console.log("== Switch statement");
let fruittype = "Apples";
switch (fruittype) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $0.56 a pound.');
        break;
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");

console.log("== Throw/Catch error handling");
function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new Error('InvalidMonthNo'); //throw keyword is used here
    }
}
myMonth = 13;
try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
    monthName = 'unknown';
    console.log('error' + e); // pass exception object to error handler -> your own function
} finally {
    console.log("monthName = " + monthName);
}
