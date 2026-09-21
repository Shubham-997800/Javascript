const memberName = "Shubham";
const membershipId = "FIT-2026-7734";
const gymName = "Iron Fitness Elite Club";
const gymBranch = "Andheri West Platinum Center";
const trainerName = "Vikram Rathore (K11 Certified Master Trainer)";
const fitnessGoal = "Strength Training & Lean Muscle Mass";
const startDate = "01-Oct-2026";
const expiryDate = "30-Sep-2027";

const planType = "Annual"; // Monthly, Quarterly, Half-Yearly, Annual
const includeTrainer = true;
const includeLocker = true;
const includeSauna = true;
const includeDietPlan = true;

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

let dietPlanFee = 0;
if (includeDietPlan) {
    dietPlanFee = 1200; // One-time customized nutritionist meal roadmap
}

const servicesTotal = basePrice + trainerFee + lockerFee + saunaFee + dietPlanFee + registrationFee;

// Plan discount calculation (applied on base plan price)
const planDiscount = (basePrice * discountPercent) / 100;
const discountedSubtotal = servicesTotal - planDiscount;

// GST 18% (9% CGST + 9% SGST)
const gstRate = 18;
const cgstAmount = (discountedSubtotal * 9) / 100;
const sgstAmount = (discountedSubtotal * 9) / 100;
const totalGst = cgstAmount + sgstAmount;

const totalAmount = discountedSubtotal + totalGst;

// Referral bonus / special promo coupon
const promoCode = "FITPASS300";
const referralDiscount = 300;
const finalAmount = Math.max(0, totalAmount - referralDiscount);

const paymentMethod = "UPI / PhonePe AutoPay";
const membershipStatus = "Active & Verified";

console.log("==================================================");
console.log("            🏋️ GYM MEMBERSHIP INVOICE");
console.log("==================================================");

console.log(`Member ID      : ${membershipId}`);
console.log(`Member Name    : ${memberName}`);
console.log(`Fitness Center : ${gymName}`);
console.log(`Branch Center  : ${gymBranch}`);
console.log(`Fitness Goal   : ${fitnessGoal}`);
console.log(`Validity Period: ${startDate} to ${expiryDate}`);
console.log(`Plan Category  : ${planType} (${durationMonths} Months Access)`);

console.log("--------------------------------------------------");
console.log(`Base Plan Fee  : ₹${basePrice.toFixed(2)} (${durationMonths} Months)`);
console.log(`Registration   : ₹${registrationFee.toFixed(2)} (One-time Admission)`);
if (includeTrainer) {
    console.log(`Personal Coach : ₹${trainerFee.toFixed(2)} (${durationMonths} mo with ${trainerName})`);
}
if (includeLocker) {
    console.log(`Locker Rental  : ₹${lockerFee.toFixed(2)} (${durationMonths} mo Dedicated Smart Locker)`);
}
if (includeSauna) {
    console.log(`Spa & Sauna    : ₹${saunaFee.toFixed(2)} (${durationMonths} mo Hydrotherapy Pass)`);
}
if (includeDietPlan) {
    console.log(`Diet Blueprint : ₹${dietPlanFee.toFixed(2)} (Custom Clinical Nutrition Plan)`);
}

console.log("--------------------------------------------------");
console.log(`Gross Charges  : ₹${servicesTotal.toFixed(2)}`);
if (planDiscount > 0) {
    console.log(`Tier Discount  : -₹${planDiscount.toFixed(2)} (${discountPercent}% Off Base Fee)`);
}
console.log(`Taxable Amount : ₹${discountedSubtotal.toFixed(2)}`);
console.log(`CGST (9%)      : ₹${cgstAmount.toFixed(2)}`);
console.log(`SGST (9%)      : ₹${sgstAmount.toFixed(2)}`);
console.log(`Total GST (18%): ₹${totalGst.toFixed(2)}`);
console.log(`Referral Promo : -₹${referralDiscount.toFixed(2)} (${promoCode})`);
console.log(`FINAL PAYABLE  : ₹${finalAmount.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Access Status  : ${membershipStatus}`);

console.log("==================================================");
console.log("       💪 SWEAT TODAY, SHINE TOMORROW!");
console.log("     Free locker access & hydration booth included");
console.log("==================================================");

console.log(typeof memberName);
console.log(typeof membershipId);
console.log(typeof planType);
console.log(typeof durationMonths);
console.log(typeof includeTrainer);
console.log(typeof finalAmount);
console.log(typeof membershipStatus);
