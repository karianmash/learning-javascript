// Introduction to variables in JavaScript
// ---------------------------------------------------------------------------------------------

/**
 * Variables are declared using the var, let, or const keywords
 * Variables are used to store data in JavaScript
 * Variables can be declared with a value
 * Variables can be declared without a value
 */

// 1. var keyword - old way of declaring variables
// ---------------------------------------------------------------------------------------------

// Declaring a variable with a value
var myName = "John Doe";

// Declaring a variable without a value
var myAge;

// Assigning a value to a variable
myAge = 25;

// Declaring multiple variables
var myName = "John Doe",
  myAge = 25;

// 2. let keyword - new way of declaring variables. Introduced in ES6 (2015). The difference between var and let
// is that var is function scoped and let is block scoped. This means that var can be accessed outside of the
// block it was declared in.
// ---------------------------------------------------------------------------------------------

// Declaring a variable with a value
let myName = "John Doe";

// Declaring a variable without a value
let myAge;

// Assigning a value to a variable
myAge = 25;

// Declaring multiple variables
let myName = "John Doe",
  myAge = 25;

// 3. const keyword - new way of declaring variables. Introduced in ES6 (2015). The difference between var and const
//  is that const is a constant and cannot be reassigned. It is also block scoped. This means that const can be 
// accessed outside of the block it was declared in. It is also important to note that const is not immutable. 
// This means that if the variable is an object or array, the object or array can be mutated.
// ---------------------------------------------------------------------------------------------

// Declaring a variable with a value
const myName = "John Doe";

// Declaring a variable without a value
const myAge;

// Assigning a value to a variable
myAge = 25; // This will throw an error

// Declaring multiple variables
const myName = "John Doe", myAge = 25;