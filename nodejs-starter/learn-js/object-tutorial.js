/*
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties,
and a property is an association between a name (or key) and a value. A property's value can be a
function, in which case the property is known as a method. In addition to objects that are predefined
in the browser, you can define your own objects.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

console.log("Object property using simple dot-notation");
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);
console.log(myCar.color); // undefined!

console.log("Object property using bracket notation");
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
console.log(myCar);

/*
An object property name can be any valid JavaScript string, or anything that can be converted to
a string, including the empty string. However, any property name that is not a valid JavaScript
identifier (for example, a property name that has a space or a hyphen, or that starts with a number)
can only be accessed using the square bracket notation.

Please note that all keys in the square bracket notation are converted to string unless they're
Symbols, since JavaScript object property names (keys) can only be strings or Symbols
(at some point, private names will also be added as the class fields proposal progresses,
but you won't use them with [] form). For example, in the above code, when the key obj is added
to the myObj, JavaScript will call the obj.toString() method, and use this result string as the new
key.
 */

// four variables are created and assigned in a single go,
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

// You can also access properties by using a string value that is stored in a variable:
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';


// You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.
function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));


// == Object Initializer
// NOTE: Object initializers are expressions. It needs ";" at the end!
console.log("Object Initializer");
var value_1 = 99, value_2 = "foo", value_n = true;
var obj = {
    property_1:   value_1,   // property_# may be an identifier...
    2:            value_2,   // or a number...
    // ...,
    'property n': value_n }; // or a string
console.log(obj);

/*
you can create an object with these two steps:

    Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
    Create an instance of the object with new.

Note no ";" is needed when defining function!
 */
console.log("Object constructor function");
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
console.log([mycar, kenscar, vpgscar]);


/*
Objects can also be created using the Object.create() method. This method can be very useful,
because it allows you to choose the prototype object for the object you want to create, without
having to define a constructor function.
 */

// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
        console.log(this.type);
    }
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

/*
All objects in JavaScript inherit from at least one other object. The object being inherited from is
known as the prototype, and the inherited properties can be found in the prototype object of the
constructor.
 */

/*
You can add a property to a previously defined object type by using the prototype property. This
defines a property that is shared by all objects of the specified type, rather than by just one
instance of the object. The following code adds a color property to all objects of type Car, and
then assigns a value to the color property of the object car1.
 */

Car.prototype.color = null;
myCar.color = 'black';
console.log(myCar);

/*
A method is a function associated with an object, or, simply put, a method is a property of an
object that is a function. Methods are defined the way normal functions are defined, except that
they have to be assigned as the property of an object. See also method definitions for more details.
An example is:
 */

// Deleting properties
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // yields "false"
