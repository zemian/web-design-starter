/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Classes are in fact "special functions", and just as you can define function expressions
and function declarations, the class syntax has two components: class expressions and class declarations.
 */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle.name);
console.log(new Rectangle(10, 20));

// Class expression
// unnamed
let Rectangle2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle2.name);
// output: "Rectangle2"

// named
let Rectangle3 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle3.name);
// output: "Rectangle3"

// == Public vs Private fields

// class Rectangle4 {
//     height = 0;
//     width;
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(new Rectangle4(10, 15));
// class Rectangle5 {
//     #height = 0;
//     #width;
//     constructor(height, width) {
//         this.#height = height;
//         this.#width = width;
//     }
// }
// console.log(new Rectangle4(10, 16));


// == Class Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(this.name + ' barks.');
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
