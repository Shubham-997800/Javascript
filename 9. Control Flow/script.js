// 1. if :- Programming mein humein baar-baar decision lena padta hai Agar condition true hai → ye kaam karo.

// Syntax:
// if (condition) {
//     value;
// }

// Important: if ke andar ka code tabhi execute hota hai jab condition truthy ho.

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

// 2. else :- Agar if ki condition true nahi hai, to ye code execute karo.

// Syntax:
// if (condition) {
//     // condition true → this runs
// } else {
//     // condition false → this runs
// }

let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// 3.else if :- Jab multiple conditions check karni ho, `else if` use karte hain.

// Syntax :- 
// if (condition1) {
//     // code
// } else if (condition2) {
//     // code
// } else if (condition3) {
//     // code
// } else {
//     // none matched
// }

// Example :- 

let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 4.Nested if :- Ek `if` ke andar doosra `if` = Nested `if`.

// Example :- 

let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    }
}

// 5. TERNARY OPERATOR :- Ternary operator ek ** short form of simple`if...else` ** hai.

// Structure :- condition ? valueIfTrue : valueIfFalse

// Example :- 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);