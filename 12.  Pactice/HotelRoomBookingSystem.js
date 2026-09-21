const guestName = "Shubham";
const bookingId = "HTL-2026-8842";
const hotelName = "Grand Heritage Resort & Spa";
const roomType = "Deluxe"; // Standard, Deluxe, Super Deluxe, Suite
const roomNumber = "Room 304 (Ocean View)";
const checkInDate = "22-Sep-2026 (02:00 PM)";
const checkOutDate = "25-Sep-2026 (11:00 AM)";
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

// Extra person charge if guests > 2 (₹1200 per extra guest per night)
let extraPersonCharges = 0;
if (numberOfGuests > 2) {
    extraPersonCharges = (numberOfGuests - 2) * 1200 * numberOfNights;
}

// Resort service charge and airport pickup add-on
const serviceCharge = 500;
const hasAirportTransfer = true;
const airportTransferCharge = hasAirportTransfer ? 850 : 0;

const roomSubtotal = totalRoomCharges + totalMealCharges + extraPersonCharges + serviceCharge + airportTransferCharge;

// Weekend/peak season surcharge (10% on room charges if applicable)
const isWeekendStay = true;
let peakSurcharge = 0;
if (isWeekendStay) {
    peakSurcharge = (totalRoomCharges * 10) / 100;
}

const amountBeforeTax = roomSubtotal + peakSurcharge;

// GST slab: 12% if room rate <= 7500 (6% CGST + 6% SGST), else 18% (9% CGST + 9% SGST)
let gstRate = 12;
if (roomRatePerNight > 7500) {
    gstRate = 18;
}
const cgstRate = gstRate / 2;
const sgstRate = gstRate / 2;
const cgstAmount = (amountBeforeTax * cgstRate) / 100;
const sgstAmount = (amountBeforeTax * sgstRate) / 100;
const totalGst = cgstAmount + sgstAmount;

const totalAmount = amountBeforeTax + totalGst;

// Loyalty/promo discount
const promoCouponCode = "HERITAGE400";
const loyaltyDiscount = 400;
const finalPayable = Math.max(0, totalAmount - loyaltyDiscount);

const paymentMethod = "Credit Card (HDFC Regalia)";
const bookingStatus = "Confirmed - Advance Paid";

console.log("==================================================");
console.log("         🏨 HOTEL RESERVATION INVOICE");
console.log("==================================================");

console.log(`Booking ID     : ${bookingId}`);
console.log(`Guest Name     : ${guestName}`);
console.log(`Hotel Name     : ${hotelName}`);
console.log(`Allocated Room : ${roomNumber}`);
console.log(`Room Category  : ${roomType}`);
console.log(`Check-In       : ${checkInDate}`);
console.log(`Check-Out      : ${checkOutDate}`);
console.log(`Stay Duration  : ${numberOfNights} Night(s)`);
console.log(`Total Guests   : ${numberOfGuests} Guest(s)`);
console.log(`Meal Plan      : ${mealPlan}`);

console.log("--------------------------------------------------");
console.log(`Room Tariff    : ₹${roomRatePerNight.toFixed(2)} × ${numberOfNights} = ₹${totalRoomCharges.toFixed(2)}`);
console.log(`Meal Charges   : ₹${totalMealCharges.toFixed(2)} (${mealPlan} for ${numberOfGuests} guests)`);
if (extraPersonCharges > 0) {
    console.log(`Extra Guest Fee: ₹${extraPersonCharges.toFixed(2)}`);
}
if (hasAirportTransfer) {
    console.log(`Airport Pickup : ₹${airportTransferCharge.toFixed(2)} (Private Sedan Transfer)`);
}
console.log(`Resort Service : ₹${serviceCharge.toFixed(2)}`);
if (isWeekendStay) {
    console.log(`Weekend Surge  : ₹${peakSurcharge.toFixed(2)} (10% on Room Tariff)`);
}

console.log("--------------------------------------------------");
console.log(`Taxable Amount : ₹${amountBeforeTax.toFixed(2)}`);
console.log(`CGST (${cgstRate.toFixed(1)}%)     : ₹${cgstAmount.toFixed(2)}`);
console.log(`SGST (${sgstRate.toFixed(1)}%)     : ₹${sgstAmount.toFixed(2)}`);
console.log(`Total GST      : ₹${totalGst.toFixed(2)} (${gstRate}%)`);
console.log(`Gross Total    : ₹${totalAmount.toFixed(2)}`);
console.log(`Loyalty Coupon : -₹${loyaltyDiscount.toFixed(2)} (${promoCouponCode})`);
console.log(`FINAL PAYABLE  : ₹${finalPayable.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Booking Status : ${bookingStatus}`);

console.log("==================================================");
console.log("        🌴 WISHING YOU A PLEASANT STAY!");
console.log("    Complimentary Breakfast served 7:30-10:30 AM");
console.log("==================================================");

console.log(typeof guestName);
console.log(typeof bookingId);
console.log(typeof roomRatePerNight);
console.log(typeof numberOfNights);
console.log(typeof isWeekendStay);
console.log(typeof finalPayable);
console.log(typeof bookingStatus);
