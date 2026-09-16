// Loops :- Loop ka use kisi code ko ** repeatedly execute ** karne ke liye hota hai jab tak ek condition satisfy hoti rahe.

// Example :-  Agar `1` se `5` tak numbers print karne hain:
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5); Ye possible hai, but inefficient hai.

// Loop :-
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Types of Loops :- 
// 1. `for`
// 2. `while`
// 3. `do...while`

// 1. For Loop :- 

// Syntax :- 
// for (initialization; condition; update) {
//   // code
// }

// -> Initialization :- Initialization ka matlab hai loop variable ko initial value dena. let i = 1;
// -> Condition :- Condition decide karti hai ki loop continue karega ya nahi. i <= 5
// -> Update / Increment / Decrement :- Update loop variable ki value change karta hai. i++

// 2. While Loop :- `while` loop tab useful hota hai jab tum condition ke basis par repetition karna chahte ho.

// Syntax :-
// while (condition) {
//   // code
// }

// Example :-
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// 3. Do While Loop :-  Loop body ** at least once ** execute hoti hai.

// Syntax :-
// do {
// code
// } while (condition);


// Example :- 
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// 4. Nested Loop :- Ek loop ke andar doosra loop:

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
// 5. Break :- `break` current loop ko completely terminate karta hai.

// Example :-
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// 6. Continue :- `continue` current iteration ko skip karta hai.

// Example :- 
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// 7. Labelled Statement :-JavaScript mein loops ko label kiya ja sakta hai.

// Syntax :-
// labelName:
// for (...) {
// }

// Example :-
outerLoop:
for (let i = 1; i <= 3; i++) {
    console.log("Outer:", i);
}

// 8. Labelled Break :- Nested loops mein `break` normally nearest loop ko stop karta hai.

// Example :-
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break;
        }
        console.log(i, j);
    }
}
// -> Yahan`break` ** inner loop ** ko stop karta hai.

// -> Agar outer loop ko directly break karna ho:
outerLoop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop;
        }
        console.log(i, j);
    }
}

// -> `break outerLoop` directly labelled outer loop se bahar nikalta hai.

// 9. Labelled Continue :- Label ke saath `continue` bhi use kar sakte hain.

outerLoop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue outerLoop;
        }
        console.log(i, j);
    }
}

// `continue outerLoop`:- inner loop ki current execution ko continue nahi karta; directly outer loop ki next iteration par jump karta hai.Ye advanced control - flow technique hai.