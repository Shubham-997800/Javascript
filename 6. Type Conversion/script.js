// Type Conversion = ek data type ko doosre data type mein convert karna.

// Example: "100"  →  100
// Number → String
// String → Boolean

// JavaScript mein 2 tarah se conversion hota hai:
// 1. Explicit Conversion
// 2. Implicit Conversion / Coercion

// 1. EXPLICIT CONVERSION :- hum khud conversion karte hain.

// Kisi value ko String mein convert karta hai.
console.log(String("value"));
// Output: "value"

// Kisi value ko Number mein convert karta hai.
console.log(Number("value"));
// Output: value

// Kisi value ko true ya false mein convert karta hai.
console.log(Boolean("value"));
// Output: value

// String ke beginning se INTEGER parse karta hai.
// parseInt("100") → 100
// parseInt("10.5") → 10
// Agar beginning mein number milta hai,
// to valid numeric portion parse kar sakta hai.
console.log(parseInt("value"));
// Output: value

// String ke beginning se DECIMAL number parse karta hai.
console.log(parseFloat("value"));
// Output: value

// Number() vs parseInt() vs parseFloat()
console.log(Number("10px"));
// Output: NaN
console.log(parseInt("10px"));
// Output: 10
console.log(parseFloat("10.5px"));
// Output: 10.5

/*Number() → Complete value ko number banana chahta hai.
parseInt() → Starting integer part parse karta hai.
parseFloat() → Starting decimal part parse karta hai.*/

// IMPORTANT CONVERSION EDGE CASES
// Number("")
console.log(Number("")); // Output: 0

// Number(" ")
console.log(Number(" ")); // Output: 0

// Number("10")
console.log(Number("10")); // Output: 10

// Number("10.5")
console.log(Number("10.5")); // Output: 10.5

// Number("10px")
console.log(Number("10px")); // Output: NaN

// Number("hello")
console.log(Number("hello")); // Output: NaN

// parseInt("10px")
console.log(parseInt("10px")); // Output: 10

// parseInt("10.5")
console.log(parseInt("10.5")); // Output: 10

// parseFloat("10.5px")
console.log(parseFloat("10.5px")); // Output: 10.5

// parseFloat("hello")
console.log(parseFloat("hello")); // Output: NaN

// Boolean("")
console.log(Boolean("")); // Output: false

// Boolean("hello")
console.log(Boolean("hello")); // Output: true

// Boolean(0)
console.log(Boolean(0)); // Output: false

// Boolean(1)
console.log(Boolean(1)); // Output: true

// Boolean(null)
console.log(Boolean(null)); // Output: false

// Boolean(undefined)
console.log(Boolean(undefined)); // Output: false

// MORE IMPORTANT EDGE CASES

console.log(Number(null)); // Output: 0

console.log(Number(undefined)); // Output: NaN

console.log(String(null)); // Output: "null"

console.log(String(undefined)); // Output: "undefined"

console.log(Boolean("false")); // Output: true

console.log(Boolean("0")); // Output: true

console.log(Boolean([])); // Output: true

console.log(Boolean({})); // Output: true

// IMPLICIT CONVERSION
// Jab JavaScript khud automatically type convert karta hai,
// usse implicit conversion / coercion kehte hain.

// Example:
// String → Number during -
console.log("10" - 5); // Output: 5

// String → Number during *
console.log("10" * 2); // Output: 20

// String → Number during /
console.log("10" / 2); // Output: 5

// Boolean → Number
console.log(true + 1); // Output: 2
console.log(false + 1); // Output: 1
