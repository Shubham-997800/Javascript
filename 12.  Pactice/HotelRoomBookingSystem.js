const guestName = "Shubham";
const bookingId = "HTL-2026-8842";
const hotelName = "Grand Heritage Resort";
const roomType = "Deluxe"; // Standard, Deluxe, Super Deluxe, Suite
const numberOfNights = 3;
const numberOfGuests = 2;
const mealPlan = "Breakfast"; // None, Breakfast, All-Meals

let roomRatePerNight;

switch (roomType) {
    case "Standard":
        roomRatePerNight = 2500;
        break;
    case "Deluxe":
        roomRatePerNight = 4500;
        break;
    case "Super Deluxe":
        roomRatePerNight = 6500;
        break;
    case "Suite":
        roomRatePerNight = 10000;
        break;
    default:
        roomRatePerNight = 3000;
}

let mealChargePerDay;
switch (mealPlan) {
    case "Breakfast":
        mealChargePerDay = 500 * numberOfGuests;
        break;
    case "All-Meals":
        mealChargePerDay = 1400 * numberOfGuests;
        break;
    default:
        mealChargePerDay = 0;
}

const totalRoomCharges = roomRatePerNight * numberOfNights;
const totalMealCharges = mealChargePerDay * numberOfNights;

// Extra person charge if guests > 2
let extraPersonCharges = 0;
if (numberOfGuests > 2) {
    extraPersonCharges = (numberOfGuests - 2) * 1200 * numberOfNights;
}

const serviceCharge = 500;
const roomSubtotal = totalRoomCharges + totalMealCharges + extraPersonCharges + serviceCharge;

// Weekend surcharge (10% if applicable)
const isWeekendStay = true;
let peakSurcharge = 0;
if (isWeekendStay) {
    peakSurcharge = (totalRoomCharges * 10) / 100;
}

const amountBeforeTax = roomSubtotal + peakSurcharge;

// GST slab: 12% if room rate <= 7500, else 18%
let gstRate = 12;
if (roomRatePerNight > 7500) {
    gstRate = 18;
}
const gstAmount = (amountBeforeTax * gstRate) / 100;

const totalAmount = amountBeforeTax + gstAmount;

const loyaltyDiscount = 400;
const finalPayable = totalAmount - loyaltyDiscount;

const paymentMethod = "Credit Card";
const bookingStatus = "Confirmed";

console.log("========================================");
console.log("       🏨 HOTEL RESERVATION INVOICE");
console.log("========================================");

console.log(`Booking ID     : ${bookingId}`);
console.log(`Guest Name     : ${guestName}`);
console.log(`Hotel Name     : ${hotelName}`);
console.log(`Room Category  : ${roomType}`);
console.log(`Stay Duration  : ${numberOfNights} Nights`);
console.log(`Total Guests   : ${numberOfGuests} Guests`);
console.log(`Meal Plan      : ${mealPlan}`);

console.log("----------------------------------------");
console.log(`Room Tariff    : ₹${roomRatePerNight} × ${numberOfNights} = ₹${totalRoomCharges}`);
console.log(`Meal Charges   : ₹${totalMealCharges}`);
if (extraPersonCharges > 0) {
    console.log(`Extra Guest Fee: ₹${extraPersonCharges}`);
}
console.log(`Service Charge : ₹${serviceCharge}`);
if (isWeekendStay) {
    console.log(`Weekend Surcharge (10%): ₹${peakSurcharge.toFixed(2)}`);
}

console.log("----------------------------------------");
console.log(`Taxable Amount : ₹${amountBeforeTax.toFixed(2)}`);
console.log(`GST (${gstRate}%)       : ₹${gstAmount.toFixed(2)}`);
console.log(`Total Amount   : ₹${totalAmount.toFixed(2)}`);
console.log(`Loyalty Coupon : ₹${loyaltyDiscount.toFixed(2)}`);
console.log(`Final Payable  : ₹${finalPayable.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Booking Status : ${bookingStatus}`);

console.log("========================================");
console.log("   🌴 WISHING YOU A PLEASANT STAY!");
console.log("========================================");

console.log(typeof guestName);
console.log(typeof bookingId);
console.log(typeof roomRatePerNight);
console.log(typeof numberOfNights);
console.log(typeof isWeekendStay);
console.log(typeof finalPayable);
console.log(typeof bookingStatus);
