//NOTE: import = require() will only work if you use "export ="
// This only works if target is non-EMACScript (for AMD or CommonJS)
// import zip = require("./ZipCodeValidator");

// For this demo, we will import the "export default" instead
import zip from "./ZipCodeValidator";

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip();

// Show whether each string passed each validator
strings.forEach(s => {
    console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});
