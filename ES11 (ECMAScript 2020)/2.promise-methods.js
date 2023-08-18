/**
 * Promise.allSettled() is a useful method introduced in ECMAScript 2020 (ES11) for handling multiple promises in
 * a way that allows you to wait for all promises to settle (either fulfill or reject) and then process the results.
 * This is different from Promise.all(), which would reject immediately if any of the promises is rejected.
 */

// Syntax: Promise.allSettled(iterable);
// The Promise.allSettled() method accepts an iterable (such as an array) of promises and returns a single promise
// that resolves when all of the input promises have settled (either fulfilled or rejected). The resolved value is
// an array of objects representing the outcome of each promise in the input iterable.

// Example 1: Promise.allSettled() with an array of promises
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "World");
});

const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);
// Expected output:
// "fulfilled"
// "rejected"

/**
 * In the example above, even though one of the promises is rejected, Promise.allSettled() will wait for all promises
 * to settle and provide information about each promise's outcome. This can be particularly useful when you want to
 * process the results of all promises, regardless of whether they were fulfilled or rejected.
 */

// Example 2: Promise.allSettled()
const promises1 = [
  Promise.resolve("Fulfilled promise"),
  Promise.reject("Rejected promise"),
  Promise.resolve("Another fulfilled promise"),
];

Promise.allSettled(promises1).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled:", result.value);
    } else {
      console.log("Rejected:", result.reason);
    }
  });
});
