/**
 * String.prototype.replaceAll(): A new method added to the String prototype that allows you to replace all
 * occurrences of a substring in a string.
 */

// Syntax: str.replaceAll(searchValue, replaceValue)
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern
// can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If
// pattern is a string, only the first occurrence will be replaced.

// Example 1: Using replaceAll() with a string
const str = "Hello World";
console.log(str.replaceAll("World", "JavaScript")); // "Hello JavaScript"

// Example 2: Using replaceAll() with a regular expression
const phoneNumber = "123-456-7890";
const hiddenPhoneNumber = phoneNumber.replaceAll(/\d/g, "X");

console.log(hiddenPhoneNumber); // Output: 'XXX-XXX-XXXX'

/**
 * Please note that replaceAll() returns a new string with the replacements, leaving the original string unchanged.
 * Also, keep in mind that replaceAll() is case-sensitive, so it will only replace exact matches.
 */
