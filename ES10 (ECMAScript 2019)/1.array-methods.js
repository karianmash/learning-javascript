/**
 * Array.flat() and Array.flatMap(): Two new methods added to the Array prototype that allow you
 * to flatten nested arrays and map over them at the same time.
 */

// 1. Array.prototype.flat():
// This method is used to flatten nested arrays. It creates a new array with all sub-array elements
// concatenated into it recursively up to a specified depth.
const nestedArray = [1, 2, [3, 4, [5, 6]]];

const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// 2. Array.prototype.flatMap():
// This method is similar to map() followed by flat(), but it's more efficient. It first maps each element
// using a mapping function, then flattens the result into a new array.
const nestedArray1 = [[1], [2, 3], [4, 5, 6]];

const flattenedAndMapped = nestedArray1.flatMap((subArray) =>
  subArray.map((num) => num * 2)
);
console.log(flattenedAndMapped); // Output: [2, 4, 6, 8, 10, 12]

// flatMap() can be used to both map and flatten arrays in a concise manner.
