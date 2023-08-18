/**
 * Numeric separators are a feature introduced in ECMAScript 2021 (ES12) that allow you to improve the readability
 * of numeric literals by inserting underscores (_) as separators within the digits of the number
 */
const population = 7_900_000_000; // Approximately 7.9 billion
const budget = 1_500_000.5; // Approximately 1.5 million
const exponent = 2_000_000_000_000_000_000_000n ** 200n; // 2 * 10^400n
const eNotation = 1_0e1_0; // 10 * 10^10

console.log(population);
console.log(budget);
console.log(exponent);
console.log(eNotation);

// Numeric separators can be placed anywhere within the number except at the beginning, end, or directly adjacent
// to a decimal point or exponent indicator (e or E). This allows you to structure the separators in a way
// that enhances readability.
