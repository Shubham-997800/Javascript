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


// Higher Order Function :- A Higher Order Function wo function hota hai jo ek ya zyada functions ko argument ke roop mein accept kare, OR ek function return kare.
// Example :-
function execute(fn) {
    fn();
}
// execute() ek Higher Order Function hai, kyunki ye function ko argument ke roop mein accept kar raha hai.
function greet() {
    console.log("Hello");
}
execute(greet);

// Yahan :-execute → Higher - Order Function greet → Callback Function 
// 2. Callback vs Higher - Order Function

// HOF ka real power :- Suppose hume numbers par different operations perform karne hain.
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
// Ab ek common function:
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));

// HOF + Arrow Function :-Modern JavaScript mein ye aur concise ho sakta hai:
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 20, (a, b) => a + b));
console.log(calculate(10, 20, (a, b) => a * b));
// Yahan anonymous arrow function callback ke role mein hai.
// HOF ka ek aur example :- 
function repeat(action) {
    action();
    action();
    action();
}
repeat(() => {
    console.log("Hello");
});
repeat()  // HOF
// Arrow function → Callback


// Rest Parameters ... :-Jab hume pata nahi ho ki function ko kitne arguments milenge, rest parameter use kar sakte hain.
function add(...numbers) {
    console.log(numbers);
}
add(10, 20, 30, 40);
// Rest parameter remaining arguments ko collect karta hai.


// Spread with Functions ... :- Rest aur Spread ka syntax same ...hai, kaam opposite hai.
// Rest function add(...numbers) { } Arguments ko collect karta hai.
// Spread let numbers = [10, 20, 30]; add(...numbers); Values ko spread / unpack karta hai.
// Example :- 
function add(a, b, c) {
    return a + b + c;
}
let numbers = [10, 20, 30];
console.log(add(...numbers));


// arguments Object :- Normal functions ke andar JavaScript ek special object - like value provide karta hai:
// Example :-
function add() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(add(10, 20, 30));

// Nested Functions :- Ek function ke andar doosra function define kar sakte ho.
function outer() {
    function inner() {
        console.log("Hello");
    }
    inner();
}
outer();

// Nested function outer function ke variables access kar sakta hai:
function outer() {
    let name = "Shubham";
    function inner() {
        console.log(name);
    }
    inner();
}
outer();


// Lexical Scope :- Lexical scope ka matlab hai ki variable access ka scope function ke code mein uski position / definition se determine hota hai.
// Example :-
let name = "Global";
function outer() {
    let name = "Outer";
    function inner() {
        console.log(name);
    }
    inner();
}
outer();

// Closures :- Ab Function chapter ka one of the most important concepts.
// Example :-
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// IIFE :- Immediately Invoked Function Expression . Function expression jo define hote hi immediately execute ho jaye.
// Example :- 
(function () {
    console.log("Hello");
})();
(function () {
    console.log("Hello");
})
    // Parameters bhi de sakte ho

    (function (name) {
        console.log("Hello " + name);
    })("Shubham");

// IIFE historically private scope / create isolated code ke liye commonly use hota tha.Modern JavaScript mein modules aur block scope ki wajah se iska usage kam hua hai, but concept important hai.


// this with Normal Functions :- this ki value function ko kaise call kiya gaya hai, us par depend kar sakti hai.
// Example :-
const user = {
    name: "Shubham",
    greet: function () {
        console.log(this.name);
    }
};
user.greet();
// yahan this user object ko refer kar raha hai.

// Arrow Function + this :- Arrow functions ka this normal function jaisa nahi hota.Arrow function apna this create nahi karta.
// Example :-
const user = {
    name: "Shubham",
    greet: () => {
        console.log(this.name);
    }
};
user.greet();

// Function Composition :- Do functions ko combine karke ek function ka output doosre function ke input mein de sakte ho.
// Example :-
function double(x) {
    return x * 2;
}
function addTen(x) {
    return x + 10;
}
let result = addTen(double(5));
console.log(result);

// Functions with Objects :- Functions objects ke andar methods ke roop mein bhi use hote hain.
const user = {
    name: "Shubham",
    greet: function () {
        console.log("Hello " + this.name);
    }
};
user.greet();