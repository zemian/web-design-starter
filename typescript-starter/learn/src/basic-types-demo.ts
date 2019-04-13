// boolean
let isDone: boolean = false;
console.log([isDone]);

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log([decimal, hex, binary, octal]);

// string
let color: string = "blue";
color = 'red';
console.log([color]);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

// array
let list: number[] = [1, 2, 3];
console.log(list);
let list2: Array<number> = [1, 2, 3];
console.log(list2);

// tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;
console.log(c2);

// any type (Note: not the same as Object!)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// void type
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();
let unusable: void = undefined;
console.log(unusable);

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
console.log([u, n]);

// nerver type!
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// object type
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// type assertion (casting)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

// Using 'as'
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
console.log(strLength2);
