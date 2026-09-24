// Function Practice

console.log("========================================");
console.log("       📚 JAVASCRIPT FUNCTION PRACTICE");
console.log("========================================\n");

// 1. Even or Odd Checker
const isEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log("--- 1. Even / Odd Checker ---");
console.log(`7 is  : ${isEven(7)}`);
console.log(`12 is : ${isEven(12)}\n`);

// 2. Find Maximum
const findMax = function (a, b) {
    return a > b ? a : b;
};

console.log("--- 2. Find Maximum ---");
console.log(`Max of 45 and 78 is : ${findMax(45, 78)}\n`);

// 3. Factorial Calculator
function calculateFactorial(n) {
    if (n < 0) return "Invalid Input";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log("--- 3. Factorial Calculator ---");
console.log(`Factorial of 5 : ${calculateFactorial(5)}`);
console.log(`Factorial of 0 : ${calculateFactorial(0)}\n`);

// 4. Celsius to Fahrenheit: (C * 9/5) + 32
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

console.log("--- 4. Temperature Converter ---");
console.log(`37°C in Fahrenheit : ${toFahrenheit(37).toFixed(1)}°F\n`);

// 5. Simple Interest: (P * R * T) / 100
function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    let totalAmount = principal + interest;
    return {
        interest: interest,
        total: totalAmount
    };
}

console.log("--- 5. Simple Interest Calculator ---");
let loanDetails = calculateSimpleInterest(10000, 7.5, 2);
console.log(`Interest Amount : ₹${loanDetails.interest}`);
console.log(`Total Payable   : ₹${loanDetails.total}\n`);

// 6. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("--- 6. Prime Number Check ---");
console.log(`Is 11 Prime? : ${isPrime(11)}`);
console.log(`Is 15 Prime? : ${isPrime(15)}\n`);

// 7. Discount Calculator
const calculateDiscount = (price, discountPercent = 10) => {
    let discountAmount = (price * discountPercent) / 100;
    let finalPrice = price - discountAmount;
    return {
        discountAmount,
        finalPrice
    };
};

console.log("--- 7. Discount Calculator ---");
let shirt = calculateDiscount(1200, 20);
console.log(`Original Price : ₹1200`);
console.log(`Discount (20%) : ₹${shirt.discountAmount}`);
console.log(`Final Price    : ₹${shirt.finalPrice}\n`);

console.log("========================================");
console.log("         ✅ PRACTICE COMPLETED");
console.log("========================================");
