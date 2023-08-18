/**
 * async/await: A new way to write asynchronous code in JavaScript that
 * makes it easier to reason about and avoid callback hell.
 */

async function hello() {
  return "Hello World";
}
console.log(hello()); // Output: Promise { 'Hello World' }

// The async keyword is used to define an asynchronous function.
// An asynchronous function is a function that will return a promise.
// The await keyword is used to pause the execution of an async function
// and wait for the resolution of a promise.
// The await keyword can only be used inside an async function.

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();
  console.log(post);
}
getPost();