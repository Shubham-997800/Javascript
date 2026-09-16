// TEMPLATE LITERALS :- Template Literals JavaScript mein strings banane ka modern aur powerful way hai.
// Template Literal ke liye BACKTICKS (` `) use hote hain.
// Example: let name = "Shubham";
// console.log(`Hello ${name}`);
// Output: Hello Shubham

// BACKTICKS
// Normal strings: "Hello",'Hello'
// Template literal: `Hello`
// Backtick keyboard par usually: ` key milti hai.
let message = `Hello JavaScript`;
console.log(message);
// Output: Hello JavaScript

//  STRING INTERPOLATION :-String ke andar variable ki value  insert kar sakte hain.
// Syntax:`${variable}`

let name = "Shubham";
console.log(`Hello ${name}`);
// Output: Hello Shubham

// Multiple variables
let firstName = "Shubham";
let age = 22;
console.log(`My name is ${firstName} and I am ${age} years old.`);

// Output: My name is Shubham and I am 22 years old.

// ${} — PLACEHOLDER
// ${} ke andar JavaScript expression likh sakte ho.
let username = "Shubham";
console.log(`Welcome, ${username}!`);
// Output: Welcome, Shubham!

let price = 500;
console.log(`Product price is ₹${price}`);
// Output: Product price is ₹500

// EXPRESSIONS INSIDE TEMPLATE LITERALS
// ${} ke andar sirf variable nahi,
// koi bhi valid JavaScript expression likh sakte hain.

// Addition
let a = 10;
let b = 20;
console.log(`Sum = ${a + b}`);
// Output: Sum = 30

// Subtraction
console.log(`Difference = ${b - a}`);
// Output: Difference = 10

// Multiplication
console.log(`Product = ${a * b}`);
// Output: Product = 200

// Division
console.log(`Division = ${b / a}`);
// Output: Division = 2

// Modulus
console.log(`Remainder = ${25 % 7}`);
// Output: Remainder = 4

// Power
console.log(`Power = ${2 ** 3}`);
// Output: Power = 8

//  MULTIPLE EXPRESSIONS
let product = "Laptop";
let quantity = 2;
let unitPrice = 50000;
console.log(
  `Product: ${product}, Quantity: ${quantity}, Total: ₹${quantity * unitPrice}`,
);
// Output: Product: Laptop, Quantity: 2, Total: ₹100000
