const analystName = "Shubham";
const analysisSessionId = "NUM-STAT-2026-902";
const rangeStart = 1;
const rangeEnd = 100;
const targetSampleNumber = 28; // Special target for deep single-number analytics

console.log("==========================================================");
console.log("             🔢 COMPREHENSIVE NUMBER ANALYZER");
console.log("==========================================================");
console.log(`Analyst Name    : ${analystName}`);
console.log(`Session ID      : ${analysisSessionId}`);
console.log(`Analysis Range  : ${rangeStart} to ${rangeEnd}`);
console.log("----------------------------------------------------------");

// Accumulators for range analysis
let evenCount = 0;
let oddCount = 0;
let evenSum = 0;
let oddSum = 0;
let totalSum = 0;

let primeCount = 0;
let primeNumbers = [];

let perfectSquareCount = 0;
let perfectSquares = [];

let fizzBuzzCount = 0; // Divisible by both 3 and 5
let fizzCount = 0;     // Divisible by 3 only
let buzzCount = 0;     // Divisible by 5 only

for (let n = rangeStart; n <= rangeEnd; n++) {
    totalSum += n;

    // Even / Odd categorization
    if (n % 2 === 0) {
        evenCount++;
        evenSum += n;
    } else {
        oddCount++;
        oddSum += n;
    }

    // FizzBuzz / Multiples check
    if (n % 3 === 0 && n % 5 === 0) {
        fizzBuzzCount++;
    } else if (n % 3 === 0) {
        fizzCount++;
    } else if (n % 5 === 0) {
        buzzCount++;
    }

    // Perfect Square Check
    const root = Math.round(Math.sqrt(n));
    if (root * root === n) {
        perfectSquareCount++;
        perfectSquares.push(n);
    }

    // Prime Number Check
    let isPrime = n > 1;
    for (let factor = 2; factor * factor <= n; factor++) {
        if (n % factor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeCount++;
        if (primeNumbers.length < 15) {
            primeNumbers.push(n);
        }
    }
}

const totalCount = (rangeEnd - rangeStart) + 1;
const averageMean = totalSum / totalCount;

console.log("📊 RANGE SUMMARY METRICS");
console.log("----------------------------------------------------------");
console.log(`Total Numbers   : ${totalCount}`);
console.log(`Total Sum       : ${totalSum}`);
console.log(`Arithmetic Mean : ${averageMean.toFixed(2)}`);
console.log(`Even Numbers    : ${evenCount} (Sum: ${evenSum})`);
console.log(`Odd Numbers     : ${oddCount} (Sum: ${oddSum})`);
console.log(`Multiples (3 & 5): ${fizzBuzzCount} numbers`);
console.log(`Multiples of 3  : ${fizzCount} numbers`);
console.log(`Multiples of 5  : ${buzzCount} numbers`);
console.log(`Prime Numbers   : ${primeCount} found (e.g. ${primeNumbers.join(", ")}...)`);
console.log(`Perfect Squares : ${perfectSquareCount} found (${perfectSquares.join(", ")})`);

console.log("----------------------------------------------------------");
console.log(`🎯 DEEP DIVE ON TARGET NUMBER: ${targetSampleNumber}`);
console.log("----------------------------------------------------------");

// Target number factor analysis
let factorSum = 0;
let factors = [];
for (let f = 1; f < targetSampleNumber; f++) {
    if (targetSampleNumber % f === 0) {
        factors.push(f);
        factorSum += f;
    }
}

// Perfect number check (Sum of proper divisors equals number, e.g., 6, 28, 496)
const isPerfectNumber = (factorSum === targetSampleNumber);

// Digit count and sum
let temp = targetSampleNumber;
let sumOfDigits = 0;
let digitCount = 0;
while (temp > 0) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
    digitCount++;
}

console.log(`Proper Divisors : ${factors.join(", ")}`);
console.log(`Sum of Divisors : ${factorSum}`);
console.log(`Is Perfect No.? : ${isPerfectNumber ? "YES (Rare Perfect Number!)" : "NO"}`);
console.log(`Digits Count    : ${digitCount}`);
console.log(`Sum of Digits   : ${sumOfDigits}`);
console.log(`Square Value    : ${targetSampleNumber ** 2}`);
console.log(`Cube Value      : ${targetSampleNumber ** 3}`);
console.log(`Binary Format   : 0b${targetSampleNumber.toString(2)}`);
console.log(`Hexadecimal     : 0x${targetSampleNumber.toString(16).toUpperCase()}`);

console.log("==========================================================");
console.log("        💡 MATHEMATICAL ANALYSIS COMPLETE!");
console.log("==========================================================");

console.log(typeof analystName);
console.log(typeof totalSum);
console.log(typeof primeCount);
console.log(typeof isPerfectNumber);
console.log(typeof averageMean);