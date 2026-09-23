// ==========================================
// 🏧 ATM SYSTEM USING FUNCTIONS
// ==========================================

// Global / Account State
let accountHolder = "Shubham";
let accountNumber = "SBI-889922";
let balance = 15000;
let transactionHistory = [];

// Helper Function: Add transaction record
function recordTransaction(type, amount, currentBal) {
    transactionHistory.push({
        type: type,
        amount: amount,
        balanceAfter: currentBal,
        time: new Date().toLocaleTimeString()
    });
}

// Function 1: Check Current Balance
const checkBalance = () => {
    console.log(`ℹ️ [BALANCE] Current Balance: ₹${balance}`);
    return balance;
};

// Function 2: Deposit Money
function deposit(amount) {
    if (amount <= 0) {
        console.log("❌ [ERROR] Deposit amount must be greater than 0!");
        return false;
    }

    balance += amount;
    recordTransaction("DEPOSIT", amount, balance);
    console.log(`✅ [DEPOSIT] ₹${amount} deposited successfully! New Balance: ₹${balance}`);
    return true;
}

// Function 3: Withdraw Money
function withdraw(amount) {
    if (amount <= 0) {
        console.log("❌ [ERROR] Invalid withdrawal amount!");
        return false;
    }

    if (amount > balance) {
        console.log(`⚠️ [FAILED] Insufficient balance! Tried to withdraw ₹${amount}, but balance is ₹${balance}`);
        return false;
    }

    balance -= amount;
    recordTransaction("WITHDRAW", amount, balance);
    console.log(`💸 [WITHDRAW] ₹${amount} withdrawn successfully! Remaining Balance: ₹${balance}`);
    return true;
}

// Function 4: Mini Statement / Receipt
function printMiniStatement() {
    console.log("\n========================================");
    console.log("         🏧 ATM MINI STATEMENT");
    console.log("========================================");
    console.log(`Account Holder : ${accountHolder}`);
    console.log(`Account Number : ${accountNumber}`);
    console.log(`Current Balance: ₹${balance}`);
    console.log("----------------------------------------");
    console.log("Recent Transactions:");

    if (transactionHistory.length === 0) {
        console.log("  No transactions yet.");
    } else {
        transactionHistory.forEach((tx, index) => {
            console.log(`  ${index + 1}. [${tx.time}] ${tx.type} : ₹${tx.amount} | Bal: ₹${tx.balanceAfter}`);
        });
    }

    console.log("========================================");
    console.log("      THANK YOU FOR VISITING SBI!");
    console.log("========================================\n");
}

// ------------------------------------------
// 🚀 Performing Operations Using Functions
// ------------------------------------------

console.log("========================================");
console.log("       WELCOME TO SBI ATM SYSTEM");
console.log("========================================\n");

// Check initial balance
checkBalance();

// Perform deposit
deposit(5000);

// Perform valid withdrawal
withdraw(3000);

// Perform invalid withdrawal (insufficient balance check)
withdraw(25000);

// Perform another deposit
deposit(1200);

// Print Final Statement
printMiniStatement();
