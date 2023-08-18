/**
 * The optional catch binding is a feature introduced in that allows you to omit
 * the binding identifier in a catch block when you don't need to use the caught error object.
 *
 * Prior to this feature, if you wanted to write a catch block that didn't use the error object, you still
 * had to provide a parameter to catch the error, even if you didn't intend to use it. The optional catch
 * binding simplifies this scenario.
 */

// Without optional catch binding (pre-ES10)
try {
  // Some code that may throw an error
  throw new Error("Error with details");
} catch (error) {
  // Catch block with unused error parameter
  console.error("An error occurred:", error.message);
}

// With optional catch binding (ES10 and later)
try {
  // Some code that may throw an error
  throw new Error("Error");
} catch {
  // Catch block without error parameter
  console.error("An error occurred, but we don't need details.");
}
