// Types of conditional statements:
// ------------------------------------------------------------------------------------------------------------------------------

// 1. Conditional (ternary) operator
// ------------------------------------------------------------------------------

// The conditional (ternary) operator is the only JavaScript operator that takes three operands:
// a condition followed by a question mark (?), then an expression to execute if the condition is
// truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
// This operator is frequently used as a shortcut for the if statement.

// Syntax
// condition ? exprIfTrue : exprIfFalse

// Example
let age = 19;
let canDrive = age > 16 ? "yes" : "no";

// 2. if statement
// ------------------------------------------------------------------------------

// The if statement executes a statement if a specified condition is truthy. If the condition is falsy,
// another statement can be executed.

// Syntax
// if (condition) {
//   statement
// }

// Example
let myAge = 19;
if (myAge > 16) {
  console.log("yes");
}

// 3. if...else statement
// ------------------------------------------------------------------------------

// The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy,
// another statement is executed.

// Syntax
// if (condition) {
//   statement1
// } else {
//   statement2
// }

// Example (don't repeat variables names)
let myNewAge = 19;
if (myNewAge > 16) {
  console.log("yes");
} else {
  console.log("no");
}

// 4. if...else if...else statement
// ------------------------------------------------------------------------------

// The if...else if...else statement executes a statement if a specified condition is truthy. If the condition is falsy,
// another statement is executed.

// Syntax
// if (condition1) {
//   statement1
// } else if (condition2) {
//   statement2
// } else {
//   statement3
// }

// Example (don't repeat variables names)
let myNewNewAge = 19;
if (myNewNewAge > 16) {
  console.log("yes");
} else if (myNewNewAge < 16) {
  console.log("no");
} else {
  console.log("maybe");
}

// 5. switch statement
// ------------------------------------------------------------------------------