const customerName = "Shubham";
const bookingId = "CRB-2026-7821";
const rideOtp = "4892";

// Driver & Vehicle details
const driverName = "Ramesh Kumar";
const driverRating = 4.85;
const vehicleModel = "Toyota Etios";
const vehicleNumber = "MH-02-CB-4491";

// Route details
const pickupLocation = "Andheri Railway Station";
const dropLocation = "Terminal 2, Mumbai International Airport";
const distanceKm = 24.5;
const rideDurationMinutes = 48;
const waitingTimeMinutes = 12;
const numberOfStops = 1;

// Cab category selection
const cabType = "Prime Sedan"; // Bike, Auto, Mini, Prime Sedan, Prime SUV, Luxury

let baseFare;
let perKmRate;
let perMinuteRate;
let minFare;

switch (cabType) {
    case "Bike":
        baseFare = 20;
        perKmRate = 8;
        perMinuteRate = 0.5;
        minFare = 35;
        break;
    case "Auto":
        baseFare = 30;
        perKmRate = 12;
        perMinuteRate = 1.0;
        minFare = 45;
        break;
    case "Mini":
        baseFare = 50;
        perKmRate = 14;
        perMinuteRate = 1.5;
        minFare = 80;
        break;
    case "Prime Sedan":
        baseFare = 80;
        perKmRate = 18;
        perMinuteRate = 2.0;
        minFare = 120;
        break;
    case "Prime SUV":
        baseFare = 130;
        perKmRate = 24;
        perMinuteRate = 2.5;
        minFare = 180;
        break;
    case "Luxury":
        baseFare = 220;
        perKmRate = 35;
        perMinuteRate = 4.0;
        minFare = 300;
        break;
    default:
        baseFare = 60;
        perKmRate = 16;
        perMinuteRate = 1.8;
        minFare = 100;
}

// Distance and travel time fare
const distanceFare = distanceKm * perKmRate;
const travelTimeFare = rideDurationMinutes * perMinuteRate;

// Waiting fee calculation (First 5 minutes free, then ₹3/min)
const freeWaitingMinutes = 5;
let billableWaitMinutes = 0;
if (waitingTimeMinutes > freeWaitingMinutes) {
    billableWaitMinutes = waitingTimeMinutes - freeWaitingMinutes;
}
const waitingChargePerMinute = 3.0;
const totalWaitingCharge = billableWaitMinutes * waitingChargePerMinute;

// Extra stops charge (₹40 per intermediate stop)
const extraStopCharge = numberOfStops * 40;

// Standard meter fare
let standardFare = baseFare + distanceFare + travelTimeFare + totalWaitingCharge + extraStopCharge;
let isMinFareApplied = false;
if (standardFare < minFare) {
    standardFare = minFare;
    isMinFareApplied = true;
}

// Surge pricing based on demand level
const demandTrafficLevel = "High"; // Normal, Moderate, High, Severe
let surgeMultiplier = 1.0;

switch (demandTrafficLevel) {
    case "Moderate":
        surgeMultiplier = 1.15;
        break;
    case "High":
        surgeMultiplier = 1.30;
        break;
    case "Severe":
        surgeMultiplier = 1.50;
        break;
    default:
        surgeMultiplier = 1.0;
}

const fareWithSurge = standardFare * surgeMultiplier;
const surgeAmount = fareWithSurge - standardFare;

// Night ride surcharge (10% extra between 11:00 PM and 5:00 AM)
const isNightRide = true;
let nightSurcharge = 0;
if (isNightRide) {
    nightSurcharge = (fareWithSurge * 10) / 100;
}

// Toll, Parking & Airport entry fees
const tollCharges = 70;
const airportParkingFee = 110;
const totalAccessTolls = tollCharges + airportParkingFee;

const rideTaxableSubtotal = fareWithSurge + nightSurcharge + totalAccessTolls;

// GST calculation (5% - 2.5% CGST + 2.5% SGST)
const gstRate = 5;
const cgstAmount = (rideTaxableSubtotal * 2.5) / 100;
const sgstAmount = (rideTaxableSubtotal * 2.5) / 100;
const totalGst = cgstAmount + sgstAmount;

const grossFare = rideTaxableSubtotal + totalGst;

// Coupon / Promo code discount & optional driver tip
const promoCouponCode = "MEGA50";
const couponDiscount = 60;
const driverTip = 30;

const finalAmount = Math.max(0, grossFare - couponDiscount) + driverTip;

const paymentMethod = "UPI / PhonePe";
const rideStatus = "Completed";

console.log("========================================");
console.log("         🚖 CAB RIDE INVOICE");
console.log("========================================");

console.log(`Booking ID     : ${bookingId}`);
console.log(`Ride OTP       : ${rideOtp}`);
console.log(`Passenger      : ${customerName}`);
console.log(`Driver Name    : ${driverName} (⭐ ${driverRating})`);
console.log(`Vehicle Details: ${vehicleModel} [${vehicleNumber}]`);
console.log(`Cab Category   : ${cabType}`);

console.log("----------------------------------------");
console.log(`Pickup Point   : ${pickupLocation}`);
console.log(`Drop Point     : ${dropLocation}`);
console.log(`Total Distance : ${distanceKm} km`);
console.log(`Duration       : ${rideDurationMinutes} mins`);
console.log(`Wait Time      : ${waitingTimeMinutes} mins (${billableWaitMinutes} mins billable)`);
console.log(`En-route Stops : ${numberOfStops} Stop(s)`);

console.log("----------------------------------------");
console.log(`Base Fare      : ₹${baseFare.toFixed(2)}`);
console.log(`Distance Fare  : ₹${distanceFare.toFixed(2)} (${distanceKm} km × ₹${perKmRate.toFixed(2)})`);
console.log(`Time Fare      : ₹${travelTimeFare.toFixed(2)} (${rideDurationMinutes} mins × ₹${perMinuteRate.toFixed(2)})`);
if (totalWaitingCharge > 0) {
    console.log(`Waiting Charge : ₹${totalWaitingCharge.toFixed(2)}`);
}
if (extraStopCharge > 0) {
    console.log(`Stops Surcharge: ₹${extraStopCharge.toFixed(2)}`);
}
if (isMinFareApplied) {
    console.log(`Min Fare Notice: ₹${minFare.toFixed(2)} minimum ride threshold applied`);
}
if (surgeMultiplier > 1.0) {
    console.log(`Surge (${surgeMultiplier}x ${demandTrafficLevel}): ₹${surgeAmount.toFixed(2)}`);
}
if (isNightRide) {
    console.log(`Night Charge   : ₹${nightSurcharge.toFixed(2)} (10%)`);
}
console.log(`Tolls & Airport: ₹${totalAccessTolls.toFixed(2)} (Toll: ₹${tollCharges.toFixed(2)}, Airport: ₹${airportParkingFee.toFixed(2)})`);

console.log("----------------------------------------");
console.log(`Taxable Subtotal: ₹${rideTaxableSubtotal.toFixed(2)}`);
console.log(`CGST (2.5%)     : ₹${cgstAmount.toFixed(2)}`);
console.log(`SGST (2.5%)     : ₹${sgstAmount.toFixed(2)}`);
console.log(`Total GST (5%)  : ₹${totalGst.toFixed(2)}`);
console.log(`Gross Total     : ₹${grossFare.toFixed(2)}`);
console.log(`Coupon Discount : -₹${couponDiscount.toFixed(2)} (${promoCouponCode})`);
console.log(`Driver Tip      : ₹${driverTip.toFixed(2)}`);
console.log(`FINAL PAYABLE   : ₹${finalAmount.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode    : ${paymentMethod}`);
console.log(`Ride Status     : ${rideStatus}`);

console.log("========================================");
console.log("   ⭐ THANK YOU FOR RIDING WITH US!");
console.log("        Drive Safely, Arrive Happy!");
console.log("========================================");

console.log(typeof customerName);
console.log(typeof bookingId);
console.log(typeof driverName);
console.log(typeof cabType);
console.log(typeof distanceKm);
console.log(typeof isNightRide);
console.log(typeof finalAmount);
console.log(typeof rideStatus);
