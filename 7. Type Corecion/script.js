// Type Coercion = JavaScript ka automatically ek type ko doosre type mein convert karna.

// STRING COERCION
// Jab operation ki wajah se value string mein convert hoti hai.
// + operator mein string important hai.
console.log("Hello " + "World"); // Output: "Hello World"
console.log("Age: " + 22); // Output: "Age: 22"
console.log("Score: " + 90); // Output: "Score: 90"

// NUMBER COERCION
// -, *, / generally operands ko number mein convert karte hain.
console.log("10" - 2); // Output: 8

console.log("10" * 2); // Output: 20

console.log("10" / 2); // Output: 5

console.log("10" - "5"); // Output: 5

// BOOLEAN COERCION
// true → 1
console.log(true + 1); // Output: 2

// false → 0
console.log(false + 1); // Output: 1
console.log(true * 5); // Output: 5
console.log(false * 5); // Output: 0

// OPERATOR BEHAVIOUR
// + ke saath agar string involved hai, to concatenation ho sakta hai.

console.log("5" + 2); // Output: "52"
console.log(5 + "2"); // Output: "52"
console.log("Hello" + 5); // Output: "Hello5"
console.log(5 + 2); // Output: 7
console.log("5" + true); // Output: "5true"
console.log(true + "5"); // Output: "true5"
console.log(null + "5"); // Output: "null5"
console.log(undefined + "5"); // Output: "undefined5"

// OPERATOR BEHAVIOUR
// -string ko number mein convert karne ki koshish karta hai.
console.log("5" - 2); // Output: 3
console.log("10" - "5"); // Output: 5
console.log("10" - 2); // Output: 8
console.log("10.5" - 0.5); // Output: 10
console.log("10px" - 2); // Output: NaN

// *OPERATOR BEHAVIOUR
console.log("5" * 2); // Output: 10
console.log("10" * "2"); // Output: 20
console.log("10.5" * 2); // Output: 21
console.log("10px" * 2); // Output: NaN

// / OPERATOR BEHAVIOUR
console.log("10" / 2); // Output: 5
console.log("20" / "5"); // Output: 4
console.log("10.5" / 2); // Output: 5.25
console.log("10px" / 2); // Output: NaN

// == COERCION
// == loose equality hai.
//JavaScript zarurat padne par type conversion kar sakta hai.

console.log("10" == 10); // Output: true
console.log("5" == 5); // Output: true
console.log(true == 1); // Output: true
console.log(false == 0); // Output: true
console.log("" == false); // Output: true
console.log(null == undefined); // Output: true

// === STRICT COMPARISON
// === value + type dono compare karta hai.
// Type conversion nahi karta.
console.log("10" === 10); // Output: false
console.log("5" === 5); // Output: false
console.log(true === 1); // Output: false
console.log(false === 0); // Output: false
console.log("" === false); // Output: false
console.log(null === undefined); // Output: false

// == vs ===
console.log(10 == "10"); // true
console.log(10 === "10"); // false
