// https://www.typescriptlang.org/docs/handbook/interfaces.html

// == Required Properties, (Caller can give more!)
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// == Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);

// Interface with function signature
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
console.log(mySearch("hello", "lo"));

// Interface with "index-able" signature.
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);


// == Interface and Class implementation
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
let clock = new Clock(8, 30);
clock.setTime(new Date());
console.log(clock);


// Extending interface
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);

// == Extending multiple interfaces
function mulInterface() {
    interface Shape {
        color: string;
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    console.log(square);
}
console.log(mulInterface());

// == Interface can extends Class!!
//    This is used to limit subclass of a parent class to a certain interface!
{ // namespace to avoid dup names

    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): void;
    }

    class Button extends Control implements SelectableControl {
        select() {
        }
    }

    class TextBox extends Control {
        select() {
        }
    }

    // // Error: Property 'state' is missing in type 'Image'.
    // class Image implements SelectableControl {
    //     private state: any;
    //
    //     select() {
    //     }
    // }

    class Location {

    }
}
