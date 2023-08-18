/**
 * Object.values() and Object.entries(): Two new methods added to the Object object
 * that allow you to get an array of the values or key-value pairs of an object.
 */

// 1. Object.values() returns an array of the values of an object
const person = { name: "Ian", age: 24, country: "Kenya" };
const values = Object.values(person);
console.log(values); // Output: ["Ian", 24, "Kenya"]

// 2. Object.entries() returns an array of the key-value pairs of an object
const person1 = { name: "Ian", age: 24, country: "Kenya" };
const entries = Object.entries(person1);
console.log(entries);
// Output:
// [
//   ["name", "Ian"],
//   ["age", 24],
//   ["country", "Kenya"]
// ]

/**
 * You can use these methods to easily iterate over the properties of an object or perform
 * operations that require access to both keys and values. For example, you can use
 * Object.entries() to iterate through an object and log its properties
 */
const person3 = { name: "Ian", age: 24, country: "Kenya" };

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Ian
// age: 24
// country: Kenya