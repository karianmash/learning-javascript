/**
 * String padding is the process of adding characters to the beginning or end of a string
 * until it reaches a certain length. This is often used to format strings in a specific way,
 * such as when displaying numbers with a fixed number of digits.
 */

// padStart() and padEnd()
// padStart() and padEnd() are two new string methods that are used to pad strings with characters
// until they reach a certain length. padStart() adds characters to the beginning of a string,
// while padEnd() adds characters to the end of a string. Both methods take two arguments:
// the target length of the string and the character to pad it with.

// 1. padStart()
const paddedString = '42'.padStart(5, '0');
console.log(paddedString); // Output: "00042"

// 2. padEnd()
const paddedString1 = '42'.padEnd(5, '0');
console.log(paddedString1); // Output: "42000"