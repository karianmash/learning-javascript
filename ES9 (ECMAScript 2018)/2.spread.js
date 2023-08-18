/**
 * The spread operator (...) is used to spread the elements of an iterable (like an array) into
 * individual elements. It's commonly used to create a shallow copy of an array, concatenate arrays,
 * or pass array elements as individual arguments to a function.
 */

// 1. Spread operator
// The spread operator is indicated by three dots (…) followed by the name of the iterable that you want to spread.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// You can also use the spread operator to pass array elements as individual arguments to a function
function multiply(a, b, c) {
  return a * b * c;
}
const numbers = [2, 3, 4];
const result = multiply(...numbers);
console.log(result); // Output: 24

// Another common use case is creating a copy of an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// The spread operator is used to create shallow copies of objects, merge objects, or create new
// objects with additional properties.
const person = { name: "Ian", age: 28 };
const address = { city: "New York", country: "USA" };
const mergedPerson = { ...person, ...address };
console.log(mergedPerson);
// Output: { name: 'Ian', age: 28, city: 'New York', country: 'USA' }

// You can also use the spread operator to create a shallow copy of an object
const originalObject = { key1: "value1", key2: "value2" };
const copiedObject = { ...originalObject };
console.log(copiedObject);
// Output: { key1: 'value1', key2: 'value2' }
