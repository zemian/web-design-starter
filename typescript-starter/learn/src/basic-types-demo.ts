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
console.log([color])

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
