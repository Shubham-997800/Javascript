const memberName = "Shubham";
const membershipId = "FIT-2026-7734";
const gymName = "Iron Fitness Club";
const planType = "Annual"; // Monthly, Quarterly, Half-Yearly, Annual
const includeTrainer = true;
const includeLocker = true;
const includeSauna = false;

let basePrice;
let durationMonths;
let discountPercent;

switch (planType) {
    case "Monthly":
        basePrice = 2000;
        durationMonths = 1;
        discountPercent = 0;
        break;
    case "Quarterly":
        basePrice = 5400;
        durationMonths = 3;
        discountPercent = 5;
        break;
    case "Half-Yearly":
        basePrice = 9600;
        durationMonths = 6;
        discountPercent = 10;
        break;
    case "Annual":
        basePrice = 16800;
        durationMonths = 12;
        discountPercent = 15;
        break;
    default:
        basePrice = 2000;
        durationMonths = 1;
        discountPercent = 0;
}

const registrationFee = 500;
let trainerFee = 0;
if (includeTrainer) {
    trainerFee = 1500 * durationMonths;
}

let lockerFee = 0;
if (includeLocker) {
    lockerFee = 300 * durationMonths;
}

let saunaFee = 0;
if (includeSauna) {
    saunaFee = 400 * durationMonths;
}

const servicesTotal = basePrice + trainerFee + lockerFee + saunaFee + registrationFee;

// Plan discount calculation
const planDiscount = (basePrice * discountPercent) / 100;
const discountedSubtotal = servicesTotal - planDiscount;

// GST 18%
const gstRate = 18;
const gstAmount = (discountedSubtotal * gstRate) / 100;

const totalAmount = discountedSubtotal + gstAmount;

// Referral bonus / special coupon
const referralDiscount = 300;
const finalAmount = totalAmount - referralDiscount;

const paymentMethod = "UPI";
const membershipStatus = "Active";

console.log("========================================");
console.log("      🏋️ GYM MEMBERSHIP INVOICE");
console.log("========================================");

console.log(`Member ID      : ${membershipId}`);
console.log(`Member Name    : ${memberName}`);
console.log(`Fitness Center : ${gymName}`);
console.log(`Plan Category  : ${planType} (${durationMonths} Months)`);

console.log("----------------------------------------");
console.log(`Base Plan Fee  : ₹${basePrice}`);
console.log(`Registration   : ₹${registrationFee}`);
if (includeTrainer) {
    console.log(`Personal Coach : ₹${trainerFee} (${durationMonths} mo)`);
}
if (includeLocker) {
    console.log(`Locker Rental  : ₹${lockerFee} (${durationMonths} mo)`);
}
if (includeSauna) {
    console.log(`Spa/Sauna Pass : ₹${saunaFee} (${durationMonths} mo)`);
}

console.log("----------------------------------------");
console.log(`Gross Charges  : ₹${servicesTotal}`);
if (planDiscount > 0) {
    console.log(`Plan Offer(${discountPercent}%): ₹${planDiscount.toFixed(2)}`);
}
console.log(`Taxable Amount : ₹${discountedSubtotal.toFixed(2)}`);
console.log(`GST (18%)      : ₹${gstAmount.toFixed(2)}`);
console.log(`Referral Promo : ₹${referralDiscount.toFixed(2)}`);
console.log(`Final Payable  : ₹${finalAmount.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Status         : ${membershipStatus}`);

console.log("========================================");
console.log("       💪 SWEAT TODAY, SHINE TOMORROW!");
console.log("========================================");

console.log(typeof memberName);
console.log(typeof membershipId);
console.log(typeof planType);
console.log(typeof durationMonths);
console.log(typeof includeTrainer);
console.log(typeof finalAmount);
console.log(typeof membershipStatus);
