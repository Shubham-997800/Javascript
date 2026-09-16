// Primitive Data Types :- Aisi basic value jo JavaScript mein ek single, fundamental value represent karti hai.

// JavaScript ke 7 primitive data types:

// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

// 1. String :- Text/data ko represent karta hai.

// let name = "Shubham";
// let city = 'Ahmedabad';
// let message = `Hello World`;

// All are strings.

// console.log("Hello");
// console.log("123");

// Important:

// 123     // Number
// "123"   // String

// String concatenation
// let firstName = "Shubham";
// let lastName = "Dangi";

// console.log(firstName + " " + lastName);

// Output:  Shubham Dangi

// Remember
// "Hello" → String
// "500"   → String
// 'India' → String

// 2. Number :- JavaScript mein normal numeric values ke liye Number use hota hai.

// Integer :-
// let age = 22;
// let score = 100;

// Decimal :-
// let price = 99.99;
// let rating = 4.5;

// Negative :-
// let temperature = -10;

// Special Number values :-
// let result = NaN;
// let value = Infinity;
// let negative = -Infinity;

// NaN ka meaning: Not-a-Number

// Example:
// console.log("hello" / 2);
// Output: NaN

// Infinity:
// console.log(10 / 0);
// Output: Infinity

// 3. BigInt :- Jab bahut bade integers ko represent karna ho, BigInt use kar sakte hain.

// Example:

// let bigNumber = 123456789012345678901234567890n;

// Notice last mein n Hai. Ye BigInt literal ko indicate karta hai.

// console.log(bigNumber);

// Output:- 123456789012345678901234567890n

// Number vs BigInt
// let a = 100;
// let b = 100n;
// 100  → Number
// 100n → BigInt

// ⚠️ Number aur BigInt ko normally directly mix nahi karna:

// 10 + 10n

// ❌ TypeError :- Pehle same type mein convert/handle karna padta hai.

// 4. Boolean :- Boolean ke sirf 2 possible values hote hain true or false.

// Example:
// let isLoggedIn = true;
// let isAdmin = false;

// Boolean mostly conditions/state represent karne ke liye use hota hai.

// let isOnline = true;

// if (isOnline) {
//     console.log("User is online");
// }

// Output: User is online

// 5. Undefined :- undefined ka matlab roughly Variable exist karta hai, lekin usko abhi koi value assign nahi hui.

// Example:-
// let username;
// console.log(username);

// Output:undefined

// Yahan:
// username → undefined //Explicitly bhi ho sakta hai
// let value = undefined; //But normally unnecessary hai.

// 6. Null :- Intentionally no value / empty value.

// Example:
// let selectedUser = null;

// Meaning: selectedUser → currently no user

// Baad mein: selectedUser = "Shubham";

// 7. Symbol :-Symbol unique value create karne ke liye use hota hai.

// const id = Symbol("id");

// Har Symbol unique hota hai.

// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1 === id2);

// Output:false

// Even though description same hai:

// Symbol("id")
// Symbol("id")

// dono different unique symbols hain.

// Basic use

// Objects ke unique property keys ke liye Symbol use kiya ja sakta hai:

// const userId = Symbol("userId");

// const user = {
//     name: "Shubham",
//     [userId]: 101
// };

// Symbol advanced topic hai, so abhi main thing yaad rakho: Symbol → unique identifier/value.
