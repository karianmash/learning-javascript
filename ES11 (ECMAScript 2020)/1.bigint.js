/**
 * BigInt: A new primitive type that allows you to represent integers larger than 2^53-1.
 * 
 * BigInt is a relatively new data type introduced in ECMAScript 2020 (ES11) to address limitations with the
 * Number data type in JavaScript. It allows you to represent and perform arithmetic operations on large
 * integers that cannot be accurately represented using the standard Number type.
 */

// BigInts are created by appending the letter n or N to the end of an integer literal:
const bigInt = 1234567890123456789012345678901234567890n;

// BigInts support various arithmetic operations, just like regular numbers:
const a = 1234567890n;
const b = 9876543210n;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;

// You can compare BigInts using comparison operators (<, >, <=, >=, ===, !==):
const a1 = 1234567890n;
const b1 = 9876543210n;

console.log(a1 < b1); // Output: true

// BigInts cannot be implicitly converted to regular numbers, but you can explicitly convert them if needed:
const bigIntValue = 1234567890n;
const regularNumber = Number(bigIntValue);

// Limitations:
/**
 * While BigInts are powerful for working with large integers, they have some limitations. For example, you cannot
 * mix BigInts and regular numbers in arithmetic operations without explicit conversion.
 */

// Use Cases:
// BigInts are useful when dealing with large numbers in scenarios like cryptography, financial calculations, and
// other applications where precision is crucial.
const bigIntA = 1234567890123456789012345678901234567890n;
const bigIntB = 9876543210987654321098765432109876543210n;

const sum1 = bigIntA + bigIntB;
console.log(sum1); // Output: 11111111101111111110111111110111111110100n

// Remember, BigInts and regular numbers (integers and floating-point) are distinct types, and you need to be
// mindful of how you use and convert between them.
