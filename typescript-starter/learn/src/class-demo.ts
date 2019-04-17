namespace SimpleClass {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");
    console.log(greeter.greet());
}

namespace ClassInheritance {
    class Animal {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }

    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}

namespace ClassInheritance2 {
    // NOTE: If subclass MUST invoke super()!!!
    class Animal {
        name: string;
        constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);
}

namespace Modifiers {
    // Default is "public", so below is explicitly using "public"
    class Animal {
        public name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    namespace PrivateExample {
        // When a member is marked private, it cannot be accessed from outside of its containing class. For example:
        class Animal {
            private name: string;

            constructor(theName: string) {
                this.name = theName;
            }
        }

        //new Animal("Cat").name; // Error: 'name' is private;
    }

    // NOTE: The private modifiers will make type distinct, unlike JS
    namespace TypeCompareWithPrivate {
        class Animal {
            private name: string;
            constructor(theName: string) { this.name = theName; }
        }

        class Rhino extends Animal {
            constructor() { super("Rhino"); }
        }

        class Employee {
            private name: string;
            constructor(theName: string) { this.name = theName; }
        }

        let animal = new Animal("Goat");
        let rhino = new Rhino();
        let employee = new Employee("Bob");

        animal = rhino;
        // animal = employee; // Error: 'Animal' and 'Employee' are not compatible
    }

    namespace ProtectedExample {
        class Person {
            protected name: string;
            constructor(name: string) { this.name = name; }
        }

        class Employee extends Person {
            private department: string;

            constructor(name: string, department: string) {
                super(name);
                this.department = department;
            }

            public getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`;
            }
        }

        let howard = new Employee("Howard", "Sales");
        console.log(howard.getElevatorPitch());
        //console.log(howard.name); // error
    }
}

namespace ReadonlyMember {
    // NOTE: Readonly properties must be initialized at their declaration or in the constructor.
    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor (theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit"; // error! name is readonly.
}

namespace ParamterProps {
    class Octopus {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
}

namespace GetterAndSetter {
    let passcode = "secret passcode";

    class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}

namespace StaticMember {
    class Grid {
        static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor (public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
}
