import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
console.log(myValidator);

// Rename Import
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator2 = new ZCV();

// Import entire module into a variable
import * as validator from "./ZipCodeValidator";
let myValidator3 = new validator.ZipCodeValidator();

// == Importing "non-module" (ones without export)
import "./my-module.js";

