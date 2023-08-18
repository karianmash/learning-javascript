/**
 * Logical assignment operators are shorthand operators introduced in ECMAScript 2022 (ES13) that allow you to
 * perform a logical operation and assign a value in a single step. These operators combine the logical
 * operation (AND, OR, or nullish coalescing) with the assignment operation.
 */

// 1. Logical AND assignment (&&=)
// The logical AND assignment (&&=) operator performs a logical AND operation and assigns the result to the
// left operand if the result is truthy. If the result is falsy, it assigns the result to the left operand and
// short-circuits the right operand.

// Syntax: x &&= y
// The logical AND assignment operator (&&=) is equivalent to x && (x = y).

// Example 1: Using the logical AND assignment operator
let a = true;
let b = false;

a &&= false; // a is now false
b &&= true; // b remains false

// 2. Logical OR assignment (||=)
// The logical OR assignment (||=) operator performs a logical OR operation and assigns the result to the left
// operand if the result is falsy. If the result is truthy, it assigns the result to the left operand and
// short-circuits the right operand.

// Syntax: x ||= y
// The logical OR assignment operator (||=) is equivalent to x || (x = y).

// Example 2: Using the logical OR assignment operator
let x = false;
let y = true;

x ||= true; // x is now true
y ||= false; // y remains true

// 3. Nullish coalescing assignment (??=)
// The nullish coalescing assignment (??=) operator assigns the value of its right-hand side operand to its
// left-hand side operand if its left-hand side operand is nullish (null or undefined). Otherwise, it does
// nothing.

// Syntax: x ??= y
// The nullish coalescing assignment operator (??=) is equivalent to x ?? (x = y).

// Example 3: Using the nullish coalescing assignment operator
let value = null;

value ??= "default"; // value is now 'default'

/**
 * These operators provide a concise way to combine logical operations and assignments, reducing the need for
 * explicit if statements or ternary operators.
 */
