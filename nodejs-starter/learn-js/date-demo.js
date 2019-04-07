/*
Creates a JavaScript Date instance that represents a single moment in time. Date objects use a Unix Time Stamp,
an integer value that is the number of milliseconds since 1 January 1970 UTC.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

The JavaScript date is based on a time value that is milliseconds since midnight January 1, 1970, UTC.
A day holds 86,400,000 milliseconds. The JavaScript Date object range is -100,000,000 days to 100,000,000 days
relative to January 1, 1970 UTC.

Invoking JavaScript Date as a function (i.e., without the new operator) will return a string representing
the current date and time.

 */

var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0

// Return date string
console.log(Date());

// == Date Creation
var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
console.log(birthday);

// == Elapse time using Date.now()
// NOTE: Date.now() returns number of millis since Epoch, not an date object!
// using Date objects
var start = Date.now();

// the event to time goes here:
//doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed);

// Elapse time using "new Date".getTime()
// using built-in methods
var start = new Date();

// the event to time goes here:
//doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
console.log(elapsed);

// == Get seconds
/*
In this case it's important to return only an integer (so a simple division won't do), and also to only
return actually elapsed seconds (that's why this code uses Math.floor() and not Math.round()).
 */
var seconds = Math.floor(Date.now() / 1000);
console.log(seconds);