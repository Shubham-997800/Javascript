//1. ARITHMETIC OPERATORS

Addition :- let a = 10; let b = 5;
console.log(a + b);
// Output: 15

// - Subtraction
console.log(a - b);
// Output: 5

// * Multiplication
console.log(a * b);
// Output: 50

// / Division
console.log(a / b);
// Output: 2

// % Modulus / Remainder
console.log(a % b);
// Output: 0

console.log(17 % 5);
// Output: 2

// ** Exponent / Power
console.log(2 ** 3);
// Output: 8

// ++ Increment
let x = 5;
x++;
console.log(x);
// Output: 6

// -- Decrement
let y = 5;
y--;
console.log(y);
// Output: 4



// 2. PRE-INCREMENT vs POST-INCREMENT

// POST-INCREMENT
let p = 5;
console.log(p++);
// Output: 5
console.log(p);
// Output: 6


// PRE-INCREMENT
let q = 5;
console.log(++q);
// Output: 6
console.log(q);
// Output: 6


// POST-DECREMENT
let r = 5;
console.log(r--);
// Output: 5
console.log(r);
// Output: 4


// PRE-DECREMENT
let s = 5;
console.log(--s);
// Output: 4
console.log(s);
// Output: 4



//3. ASSIGNMENT OPERATORS

// = Assignment
let score = 100;
console.log(score);
// Output: 100


// +=
let num1 = 10;
num1 += 5;
// Same as: num1 = num1 + 5
console.log(num1);
// Output: 15


// -=
let num2 = 10;
num2 -= 3;
// Same as: num2 = num2 - 3
console.log(num2);
// Output: 7


// *=
let num3 = 10;
num3 *= 2;
// Same as: num3 = num3 * 2
console.log(num3);
// Output: 20


// /=
let num4 = 20;
num4 /= 5;
// Same as: num4 = num4 / 5
console.log(num4);
// Output: 4


// %=
let num5 = 17;
num5 %= 5;
// Same as: num5 = num5 % 5
console.log(num5);
// Output: 2


// **=
let num6 = 2;
num6 **= 3;
// Same as: num6 = num6 ** 3
console.log(num6);
// Output: 8



//4. COMPARISON OPERATORS

// > Greater Than
console.log(10 > 5);
// Output: true

// < Less Than
console.log(10 < 5);
// Output: false

// >= Greater Than or Equal To
console.log(10 >= 10);
// Output: true

// <= Less Than or Equal To
console.log(10 <= 5);
// Output: false

// == Loose Equality
console.log(10 == "10");
// Output: true
// == value compare karta hai
// type conversion/coercion kar sakta hai


// === Strict Equality
console.log(10 === "10");
// Output: false
// === value + type dono check karta hai
// 10 = number
// "10" = string

// != Loose Inequality
console.log(10 != "10");
// Output: false

// !== Strict Inequality
console.log(10 !== "10");
// Output: true



//5. LOGICAL OPERATORS

// && AND
console.log(true && true);
// Output: true

console.log(true && false);
// Output: false

console.log(false && true);
// Output: false

console.log(false && false);
// Output: false

// Real Example
let age = 22;
let hasLicense = true;
console.log(age >= 18 && hasLicense);
// Output: true
// Dono conditions true honi chahiye.


// || OR
console.log(true || false);
// Output: true

console.log(false || true);
// Output: true

console.log(false || false);
// Output: false
// At least ONE condition true honi chahiye.

// Real Example
let isAdmin = false;
let isManager = true;
console.log(isAdmin || isManager);
// Output: true


// ! NOT
console.log(!true);
// Output: false

console.log(!false);
// Output: true

let isLoggedIn = true;
console.log(!isLoggedIn);
// Output: false



//6.  UNARY OPERATORS

// Unary operator = operator jo ek hi value par kaam karta hai.

// Unary +
let strNumber = "10";
console.log(+strNumber);
// Output: 10
console.log(typeof +strNumber);
// Output: "number"


// Unary -
let number = 10;
console.log(-number);
// Output: -10


// typeof
console.log(typeof "Hello");
// Output: "string"
console.log(typeof 100);
// Output: "number"


// ++
let count = 1;
++count;
console.log(count);
// Output: 2


// --
let counter = 5;
--counter;
console.log(counter);
// Output: 4



// 7. TERNARY OPERATOR

// Syntax: condition ? valueIfTrue : valueIfFalse


let userAge = 20;
let result = userAge >= 18 ? "Adult" : "Minor";
console.log(result);
// Output: "Adult"


// Another Example
let marks = 75;
let grade = marks >= 40 ? "Pass" : "Fail";
console.log(grade);
// Output: "Pass"


// Another Example
let isLogged = true;
let message = isLogged ? "Welcome!" : "Please Login";
console.log(message);
// Output: "Welcome!"



//8. OPERATOR PRECEDENCE

// Operator precedence decide karta hai
// ki expression mein pehle kaunsa operator execute hoga.


// Example
let answer1 = 10 + 5 * 2;
console.log(answer1);
// Output: 20
// Pehle: 5 * 2 = 10
// Phir: 10 + 10 = 20


// Parentheses sabse pehle
let answer2 = (10 + 5) * 2;

console.log(answer2);
// Output: 30


// Logical precedence
let answer3 = true || false && false;

console.log(answer3);
// Output: true

// && pehle execute hota hai:
// false && false = false
// true || false = true



//9. IMPORTANT: + OPERATOR WITH STRING

// Numbers
console.log(10 + 5);
// Output: 15


// String + Number
console.log("10" + 5);
// Output: "105"


// Number + String
console.log(10 + "5");
// Output: "105"


// String + String
console.log("Hello " + "World");
// Output: "Hello World"

// Jab + ke saath string involved hoti hai,
// JavaScript concatenation kar sakta hai.



//10. OTHER ARITHMETIC TYPE COERCION EXAMPLES

console.log("10" - 5);
// Output: 5

console.log("10" * 2);
// Output: 20

console.log("10" / 2);
// Output: 5

// -, *, / string ko number mein convert karne ki
// koshish karte hain.



//11. OPERATOR PRECEDENCE — SIMPLE ORDER
/*
High → Low

1. ()
2. **
3. * / %
4. + -
5. > < >= <=
6. == != === !==
7. &&
8. ||
9. ? :
10. = += -= *= /= %= **=

*/

// 12. PRACTICAL EXAMPLE — MARKS CALCULATION

let maths = 80;
let physics = 75;
let chemistry = 85;
let english = 70;
let computer = 90;

// Addition
let total = maths + physics + chemistry + english + computer;
console.log("Total:", total);
// Output: Total: 400

// Percentage
let percentage = (total / 500) * 100;
console.log("Percentage:", percentage);
// Output: Percentage: 80

// Average
let average = total / 5;
console.log("Average:", average);
// Output: Average: 80

// Pass/Fail
let status = percentage >= 40 ? "Pass" : "Fail";
console.log("Status:", status);
// Output: Status: Pass