// Function :- Function JavaScript mein code ka ek reusable block hota hai jo ek specific task perform karta hai.

// Syntax and Structure :-
// function greet() {
//    │       │
//    │       └── Function name
//    │
//    └── function keyword
// }

// Example :-
function greet() {
    console.log("Hello Shubham");
}
greet();
greet();

// hoisting :- function ko declare krne se pahle call krna.
hello();
function hello() {
    console.log("Good Morning");
}

// paramiters :- Function banate waqt () ke andar jo variable likhte hain, use parameter kehte hain.
// Example :- 
let name = 'shubham';
function greet(name) {
    console.log(`hello ${name}`);
}
greet();


// argument :- Function ko call karte waqt jo actual value dete hain, use argument kehte hain.
// Example :- 
function sum(a, b) {
    console.log(a + b);
}
sum(20, 30);
// Note :- Argument missing ho to ans Undifined ata hai and agr extra argument dete hai to koi error nahi ata hai simple run ho jata hai.


// Return :- return function ke andar se kisi value ko function ke bahar bhejne ke liye use hota hai. return kisi value ko print nahii krta hai.
// Example :- 
function min(a, b) {
    return a - b;
}
let Minus = min(20, 10);
console.log(Minus);
// Note :- return ke bad function end ho jata hai.

// Function Extpression :- Function Expression mein hum function ko ek variable ke andar store kar dete hain.
// Example :- 
const greet = function () {
    console.log("Hello");
};
greet();

// Note :- Function Expression ko ham argumrnt and parameter and return ke sath bhi use kr skte hai.
const add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));

// Anonymous Function :- Aise Function jiske naam na ho.
// Example :-
function () {
    console.log("Hello");
}

// Note :- Ye Function aisi jgah likhte hai jo auto matiic call kr deta hai is function ko. 
// Example :- 
setTimeout(function () {
    console.log("Hello");
}, 2000);

// Arrow Function :- => ko arrow bolte hain, isi wajah se iska naam Arrow Function hai.
// Basic Syntax
const functionName = () => {
    // code
};
// Example :- 
const greet = () => {
    console.log("Hello");
};

const greet = (name) => {
    console.log("Hello " + name);
};

const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));

// Note :- Agar sirf ek parameter hai, to parentheses hata sakte ho. 
const greet = name => {
    console.log("Hello " + name);
};

// Note :- Agar function ka kaam sirf ek expression return karna hai, to {} aur return hata sakte ho.
const add = (a, b) => a + b;

// Hoisting :- Hoisting ka matlab ye hai ki JavaScript kuch declarations ko execution se pehle recognize kar leta hai.

// Function Expression :-  me ye refference error deta hai.
greet();
const greet = function () {
    console.log("Hello Bro!");
};

// Arrow Function :- same as expression functuion.
greet();
const greet = () => {
    console.log("Hello Bro!");
};

// Scope = kisi variable ko code ke kis area mein access kiya ja sakta hai.
// Example :- 
let name = "Shubham"; //global scoped 
function greet() {
    console.log(name);
}
greet();

// Function Scoped variable.
function greet() {
    let message = "Hello"; //function scoped
    console.log(message);
}
greet();

// First-Class Function :- JavaScript mein functions ko values ki tarah treat kiya ja sakta hai.
// Matlab function ko :- variable mein store kar sakte ho,doosre function ko argument ke roop mein pass kar sakte ho,function se return kar sakte ho,variable ki tarah reference kar sakte ho Isliye JavaScript functions ko first-class citizens kehta hai.

// Callback Function = ek function jo hum kisi doosre function ko argument ke roop mein pass karte hain, taaki doosra function usse baad mein call/execute kar sake.
// Example :- 
function greet() {
    console.log("Hello Bro!");
}
function execute(fn) {
    fn();
}
execute(greet);

// Callback with parameters :- Callback function ko arguments bhi de sakte hain.
// Example :- 
function greet(name) {
    console.log("Hello " + name);
}
function execute(fn) {
    fn("Shubham");
}
execute(greet);

// Anonymous callback Function :- Callback ko alag se function declare karna zaroori nahi. Direct function pass kar sakte ho.
// Example :- 
function execute(fn) {
    fn();
}
execute(function () {
    console.log("Hello Bro!");
});

// Arrow callback :- Arrow function bhi callback ban sakta hai.
// Example :- 
function execute(fn) {
    fn();
}
execute(() => {
    console.log("Hello Bro!");
});

