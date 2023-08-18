/**
 * Promise.any() is a JavaScript method introduced in ECMAScript 2021 (ES12) that's used to handle a collection of
 * promises. It returns a single promise that fulfills as soon as any of the input promises fulfill, or rejects if
 * all of the input promises reject.
 */

// Syntax: Promise.any(iterable);
// The Promise.any() method accepts an iterable (such as an array) of promises and returns a single promise that
// resolves as soon as any of the input promises fulfills, or rejects if all of the input promises reject. The
// resolved value is the fulfillment value of the input promise that fulfilled, or an array of all rejected
// reasons if all input promises rejected.

// Example 1: Promise.any() with an array of promises
const promises = [
  Promise.reject("Error 1"),
  Promise.resolve("Success 1"),
  Promise.reject("Error 2"),
  Promise.resolve("Success 2"),
];

Promise.any(promises)
  .then((result) => {
    console.log("At least one promise fulfilled:", result);
  })
  .catch((error) => {
    console.log("All promises rejected:", error);
  });
// Expected output:
// "At least one promise fulfilled: Success 1"

/**
 * In the example above, even though some promises are rejected, Promise.any() will fulfill as soon as it
 * encounters the first fulfilled promise. If all promises are rejected, the returned promise will be rejected.
 */
