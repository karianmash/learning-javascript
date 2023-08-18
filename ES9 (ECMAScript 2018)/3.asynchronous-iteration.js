/**
 * Asynchronous iteration is a feature that allows you to iterate over asynchronous data sources,
 * such as Promises or other asynchronous iterators. It is particularly useful when dealing with
 * asynchronous operations like fetching data from a server or reading from a file.
 */

async function fetchPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postData = await response.json();
  return postData;
}

async function fetchMultiplePosts(postIds) {
  const posts = [];

  for await (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
  }

  return posts;
}

const postIds = [1, 2, 3]; // Change this to an array of desired post IDs
fetchMultiplePosts(postIds)
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });

// The for await...of loop iterates over the array of post IDs, fetching each post data in parallel,
// and then the retrieved posts are logged to the console.

// The for await...of loop is an important feature in JavaScript, particularly in modern environments that
// support asynchronous iteration, like when working with Promises, async functions, and asynchronous generators.
// It provides a concise and elegant way to iterate over asynchronous data, such as Promises, and perform actions
// on them one by one, ensuring proper sequencing and handling of asynchronous operations.
