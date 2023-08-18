/**
 * The Nullish Coalescing Operator (??) and Optional Chaining (?.) are two important features introduced in
 * ECMAScript 2020 (ES11) that enhance the way you handle null or undefined values in JavaScript.
 */

// 1. Nullish Coalescing Operator (??):
// The nullish coalescing operator allows you to provide a default value when encountering a null or undefined value.
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its
// left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const username = null;
const displayName = username ?? "Guest";
console.log(displayName); // Output: Guest

// 2. Optional Chaining (?.):
// The optional chaining operator allows you to access nested properties or methods without worrying about whether
// any intermediate property is null or undefined.
const user = {
  name: "Ian",
  address: {
    city: "Example City",
    postalCode: "12345",
  },
};

const city = user?.address?.city;
console.log(city); // Output: Example City

const postalCode = user?.address?.postalCode;
console.log(postalCode); // Output: 12345

const phoneNumber = user?.contact?.phoneNumber;
console.log(phoneNumber); // Output: undefined
