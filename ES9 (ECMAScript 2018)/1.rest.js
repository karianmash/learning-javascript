/**
 * The rest operator (...) allows you to gather the remaining elements of an iterable (like an array)
 * into a new array. It's often used in function parameters to capture any number of arguments into an array.
 */

// 1. Rest parameters
// Rest parameters are used to capture any number of arguments into an array.
// Rest parameters are indicated by three dots (…) followed by the name of the array that will contain the rest of the values.
// Rest parameters must be the last parameter in a function definition.
// Rest parameters are used to capture any number of arguments into an array.

// In this example, the sum function takes any number of arguments and gathers them into the numbers
// array using the rest operator.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// Similarly to arrays, the rest operator can be used with objects to gather the remaining properties
// into a new object.
const person = {
  userName: "Ian",
  age: 28,
  country: "USA",
  profession: "Engineer",
};
const { userName, age, ...details } = person;
console.log(userName); // Output: "Ian"
console.log(age); // Output: 28
console.log(details); // Output: { country: 'USA', profession: 'Engineer' }
