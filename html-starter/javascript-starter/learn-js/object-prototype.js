// == More on Object prototype
/*
Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods)
from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be
deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this
is no longer true (e.g. with Object.setPrototypeOf).

Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties
and methods subject to those changes are overridden further along the prototype chain. This provides a very
powerful although potentially dangerous mechanism to override or extend object behavior.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 */


var Person = function(name) {
    this.name = name;
    this.canTalk = true;
};

Person.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name);
    }
};

var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
};

var Customer = function(name) {
    Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);

var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();

// == Using function like class
function Player(name, score) {
    this.name = name;
    this.score = score;
}
let p1 = new Player('Zemian', 300);
console.log("Player1 " + p1);
console.log("Player1 " + p1.name);
console.log("Player1 " + p1.score);
