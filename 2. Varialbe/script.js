// variable :-Variable ek named container/reference hai jiske through hum program mein kisi value ko store aur later access karte hain.

// Variable mein different types ki values ho sakti hain:

let name = "Shubham";
console.log(name);

let age1 = 22;
console.log(age);

let isStudent = true;
console.log(isStudent);

let price = 99.99;
console.log(price);

// variable declare in tree type :- var , let , const
// let   → declare kar sakte ho without value
// var   → declare kar sakte ho without value
// const → declaration ke time value deni hoti hai

// let       → keyword
// name      → identifier
// =         → assignment operator
// "Shubham" → value

// let name = "Shubham";
//         ↑
//    initialization

let age2; // Declaration
age2 = 22; // Assignment

// Assignment ke baad value change kar sakte ho
let score = 50;
score = 80;
console.log(score);

//Reassignment = Existing value ko change karna

// Reassignment :- Jo variable already ek value hold kar raha hai, usko ek new value dena.

// Ex:-

let age = 22;
age = 25;
console.log(age);

// var :-  Reassignment allowed , Redclaration Allowed
// let :-  Reassignment allowed , Redclaration Not Allowed
// const :-  Reassignment NOT allowed , Redclaration Not Allowed

// Naming Rules :- Variable/Identifier ka naam kaise likhna hai
// JavaScript identifiers ke basic rules:

// Allowed
// let name = "Shubham";
// let userName = "Shubham";
// let age2 = 22;
// let _value = 100;
// let $price = 500;

// Not allowed
// let 2age = 22;       // ❌ number se start
// let user-name = "";  // ❌ hyphen
// let user name = "";  // ❌ space
// let let = 10;        // ❌ reserved keyword

// Case-sensitive
// let name = "Shubham";
// let Name = "Rahul";
// console.log(name);
// console.log(Name);
// Dono different variables hain.
// name ≠ Name ≠ NAME
