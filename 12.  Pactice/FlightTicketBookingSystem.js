const passengerName = "Shubham";
const bookingReference = "PNR-2026-9482";
const airlineName = "SkyWings Airlines";
const flightNumber = "SW-742";
const sourceAirport = "Mumbai (BOM)";
const destinationAirport = "New Delhi (DEL)";
const travelClass = "Business"; // Economy, Premium Economy, Business, First Class
const tripType = "Round Trip"; // One Way, Round Trip
const numberOfPassengers = 2;
const baggageWeightKg = 32;

let baseFarePerPax;
let baggageAllowanceKg;

switch (travelClass) {
    case "Economy":
        baseFarePerPax = 4800;
        baggageAllowanceKg = 15;
        break;
    case "Premium Economy":
        baseFarePerPax = 7500;
        baggageAllowanceKg = 20;
        break;
    case "Business":
        baseFarePerPax = 15000;
        baggageAllowanceKg = 30;
        break;
    case "First Class":
        baseFarePerPax = 25000;
        baggageAllowanceKg = 40;
        break;
    default:
        baseFarePerPax = 5000;
        baggageAllowanceKg = 15;
}

// Trip multiplier (Round trip gets a 10% round-trip discount on base fare)
let tripMultiplier = 1;
if (tripType === "Round Trip") {
    tripMultiplier = 1.9; // 2 legs with 10% return leg rebate
}

const totalBaseFare = baseFarePerPax * numberOfPassengers * tripMultiplier;

// Extra baggage calculation
let extraBaggageKg = 0;
if (baggageWeightKg > baggageAllowanceKg) {
    extraBaggageKg = baggageWeightKg - baggageAllowanceKg;
}
const extraBaggageRatePerKg = 450;
const totalBaggageFee = extraBaggageKg * extraBaggageRatePerKg * numberOfPassengers;

// Preferred seat selection
const seatPreference = "Extra Legroom"; // Standard, Window, Aisle, Extra Legroom
let seatSelectionFeePerPax;
switch (seatPreference) {
    case "Window":
        seatSelectionFeePerPax = 350;
        break;
    case "Aisle":
        seatSelectionFeePerPax = 300;
        break;
    case "Extra Legroom":
        seatSelectionFeePerPax = 800;
        break;
    default:
        seatSelectionFeePerPax = 0;
}
const totalSeatFee = seatSelectionFeePerPax * numberOfPassengers;

// In-flight meal selection
const mealChoice = "Gourmet Hot Meal"; // None, Standard Snack, Gourmet Hot Meal
let mealChargePerPax;
switch (mealChoice) {
    case "Standard Snack":
        mealChargePerPax = 350;
        break;
    case "Gourmet Hot Meal":
        mealChargePerPax = 750;
        break;
    default:
        mealChargePerPax = 0;
}
const totalMealCharge = mealChargePerPax * numberOfPassengers;

// Add-on services: Travel Insurance & Priority Airport Lounge
const includeInsurance = true;
const insuranceCharge = includeInsurance ? 499 * numberOfPassengers : 0;

const includeLoungeAccess = true;
const loungeCharge = includeLoungeAccess ? 1200 * numberOfPassengers : 0;

// Subtotal of airfare and selected add-ons
const flightSubtotal = totalBaseFare + totalBaggageFee + totalSeatFee + totalMealCharge + insuranceCharge + loungeCharge;

// Mandatory Airport & Aviation Taxes
const userDevelopmentFee = 650 * numberOfPassengers;
const aviationSecurityFee = 250 * numberOfPassengers;
const passengerServiceFee = 350 * numberOfPassengers;
const totalAirportFees = userDevelopmentFee + aviationSecurityFee + passengerServiceFee;

const taxableSubtotal = flightSubtotal + totalAirportFees;

// GST calculation: 5% on Economy, 12% on Premium/Business/First Class
let gstRate = 5;
if (travelClass === "Business" || travelClass === "First Class" || travelClass === "Premium Economy") {
    gstRate = 12;
}
const gstAmount = (taxableSubtotal * gstRate) / 100;

const totalAmount = taxableSubtotal + gstAmount;

// Promotional / Frequent Flyer Coupon Discount
const promoCoupon = "FLYHIGH2026";
const promoDiscount = 1200;
const finalAirfare = totalAmount - promoDiscount;

const paymentMethod = "UPI";
const bookingStatus = "Confirmed - E-Ticket Issued";
const boardingGate = "Gate 12B";
const boardingTime = "06:45 AM";

console.log("========================================");
console.log("      ✈️ FLIGHT BOARDING INVOICE");
console.log("========================================");

console.log(`Booking PNR    : ${bookingReference}`);
console.log(`Passenger Name : ${passengerName}`);
console.log(`Airlines       : ${airlineName} (${flightNumber})`);
console.log(`Route          : ${sourceAirport} -> ${destinationAirport}`);
console.log(`Cabin Class    : ${travelClass}`);
console.log(`Trip Itinerary : ${tripType}`);
console.log(`Passenger(s)   : ${numberOfPassengers} Person(s)`);

console.log("----------------------------------------");
console.log(`Base Airfare   : ₹${baseFarePerPax} × ${numberOfPassengers} (x${tripMultiplier}) = ₹${totalBaseFare.toFixed(2)}`);
if (extraBaggageKg > 0) {
    console.log(`Excess Luggage : ${extraBaggageKg} kg extra × ₹${extraBaggageRatePerKg} = ₹${totalBaggageFee.toFixed(2)}`);
}
if (totalSeatFee > 0) {
    console.log(`Seat Selection : ${seatPreference} = ₹${totalSeatFee.toFixed(2)}`);
}
if (totalMealCharge > 0) {
    console.log(`Meal Plan      : ${mealChoice} = ₹${totalMealCharge.toFixed(2)}`);
}
if (includeInsurance) {
    console.log(`Travel Insure  : ₹${insuranceCharge.toFixed(2)}`);
}
if (includeLoungeAccess) {
    console.log(`Lounge Access  : ₹${loungeCharge.toFixed(2)}`);
}

console.log("----------------------------------------");
console.log(`Flight Subtotal: ₹${flightSubtotal.toFixed(2)}`);
console.log(`Airport & ASF  : ₹${totalAirportFees.toFixed(2)}`);
console.log(`Taxable Amount : ₹${taxableSubtotal.toFixed(2)}`);
console.log(`GST (${gstRate}%)       : ₹${gstAmount.toFixed(2)}`);
console.log(`Promo Coupon   : -₹${promoDiscount.toFixed(2)} (${promoCoupon})`);
console.log(`Final Payable  : ₹${finalAirfare.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Booking Status : ${bookingStatus}`);
console.log(`Boarding Gate  : ${boardingGate}`);
console.log(`Boarding Time  : ${boardingTime}`);

console.log("========================================");
console.log("      🛫 HAVE A SAFE AND HAPPY FLIGHT!");
console.log("========================================");

console.log(typeof passengerName);
console.log(typeof bookingReference);
console.log(typeof travelClass);
console.log(typeof numberOfPassengers);
console.log(typeof includeInsurance);
console.log(typeof finalAirfare);
console.log(typeof bookingStatus);
