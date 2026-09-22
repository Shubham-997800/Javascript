// Number Analyzer - Practice Program

let start = 1;
let end = 50;

let evenCount = 0;
let oddCount = 0;
let totalSum = 0;

console.log("========================================");
console.log("          🔢 NUMBER ANALYZER");
console.log("========================================");

// 1 se 50 tak Even, Odd aur Sum nikalna
for (let i = start; i <= end; i++) {
    totalSum += i;

    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Range          : ${start} to ${end}`);
console.log(`Total Numbers  : ${end - start + 1}`);
console.log(`Total Sum      : ${totalSum}`);
console.log(`Even Numbers   : ${evenCount}`);
console.log(`Odd Numbers    : ${oddCount}`);

console.log("----------------------------------------");
console.log("Multiples Check (1 to 50):");

let divBy3And5 = 0;
let divBy3 = 0;
let divBy5 = 0;

for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        divBy3And5++;
    } else if (i % 3 === 0) {
        divBy3++;
    } else if (i % 5 === 0) {
        divBy5++;
    }
}

console.log(`Divisible by 3 & 5 : ${divBy3And5}`);
console.log(`Divisible by 3     : ${divBy3}`);
console.log(`Divisible by 5     : ${divBy5}`);

console.log("----------------------------------------");
// Single Number Check (Example: 28)
let num = 28;
let factorSum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        factorSum += i;
    }
}

let isEven = (num % 2 === 0);
let isPerfect = (factorSum === num);

console.log(`Target Number  : ${num}`);
console.log(`Even or Odd    : ${isEven ? "Even" : "Odd"}`);
console.log(`Factors Sum    : ${factorSum}`);
console.log(`Is Perfect No  : ${isPerfect ? "Yes" : "No"}`);
console.log(`Square         : ${num * num}`);
console.log(`Cube           : ${num * num * num}`);

console.log("========================================");

console.log(typeof start);
console.log(typeof totalSum);
console.log(typeof isEven);
console.log(typeof isPerfect);