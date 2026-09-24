// ATM System

let accountHolder = "Shubham";
let accountNumber = "SBI-889922";
let accountType = "Savings";
let currentBalance = 15000;

console.log("========================================");
console.log("             🏧 ATM SYSTEM");
console.log("========================================");

console.log(`Account Holder : ${accountHolder}`);
console.log(`Account Number : ${accountNumber}`);
console.log(`Account Type   : ${accountType}`);
console.log(`Initial Balance: ₹${currentBalance}`);

console.log("----------------------------------------");

// 1. Cash Deposit
let depositAmount = 5000;
currentBalance += depositAmount;
console.log(`Deposit Amount : +₹${depositAmount}`);
console.log(`After Deposit  : ₹${currentBalance}`);

console.log("----------------------------------------");

// 2. Cash Withdrawal
let withdrawAmount = 3000;

if (withdrawAmount <= currentBalance) {
    currentBalance -= withdrawAmount;
    console.log(`Withdrawal     : -₹${withdrawAmount}`);
    console.log(`Status         : Successful`);
} else {
    console.log(`Withdrawal     : -₹${withdrawAmount}`);
    console.log(`Status         : Insufficient Balance!`);
}

console.log("----------------------------------------");
console.log(`FINAL BALANCE  : ₹${currentBalance}`);

console.log("========================================");
console.log("      THANK YOU FOR USING OUR ATM!");
console.log("========================================");

console.log(typeof accountHolder);
console.log(typeof accountNumber);
console.log(typeof currentBalance);
