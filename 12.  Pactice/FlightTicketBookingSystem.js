const passengerName = "Shubham";
const bookingReference = "PNR-2026-9482";
const airlineName = "SkyWings Airlines";
const flightNumber = "SW-742 (Boeing 787-9 Dreamliner)";
const sourceAirport = "Mumbai (BOM) - T2";
const destinationAirport = "New Delhi (DEL) - T3";
const departureTime = "23-Sep-2026 07:30 AM";
const arrivalTime = "23-Sep-2026 09:45 AM";
const flightDuration = "2h 15m (Non-Stop)";
const travelClass = "Business"; // Economy, Premium Economy, Business, First Class
const tripType = "Round Trip"; // One Way, Round Trip
const numberOfPassengers = 2;
const allocatedSeats = "2A, 2B";
const baggageWeightPerPaxKg = 32; // Actual weight per passenger

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

// Trip multiplier (Round trip gets a 10% round-trip rebate on the return leg base fare)
let tripMultiplier = 1;
if (tripType === "Round Trip") {
    tripMultiplier = 1.9; // 2 legs with 10% return leg rebate
}

const totalBaseFare = baseFarePerPax * numberOfPassengers * tripMultiplier;

// Extra baggage calculation per passenger
let extraBaggagePerPaxKg = 0;
if (baggageWeightPerPaxKg > baggageAllowanceKg) {
    extraBaggagePerPaxKg = baggageWeightPerPaxKg - baggageAllowanceKg;
}
const extraBaggageRatePerKg = 450;
const totalBaggageFee = extraBaggagePerPaxKg * extraBaggageRatePerKg * numberOfPassengers;

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

// Add-on services: Comprehensive Travel Insurance & Airport VIP Lounge Access
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

// GST calculation: 5% on Economy (2.5% CGST + 2.5% SGST), 12% on Premium/Business/First Class (6% CGST + 6% SGST)
let gstRate = 5;
if (travelClass === "Business" || travelClass === "First Class" || travelClass === "Premium Economy") {
    gstRate = 12;
}
const cgstRate = gstRate / 2;
const sgstRate = gstRate / 2;
const cgstAmount = (taxableSubtotal * cgstRate) / 100;
const sgstAmount = (taxableSubtotal * sgstRate) / 100;
const totalGst = cgstAmount + sgstAmount;

const totalAmount = taxableSubtotal + totalGst;

// Promotional / Frequent Flyer Coupon Discount
const promoCoupon = "FLYHIGH2026";
const promoDiscount = 1200;
const finalAirfare = Math.max(0, totalAmount - promoDiscount);

const paymentMethod = "UPI / NetBanking";
const bookingStatus = "Confirmed - E-Ticket Issued";
const boardingGate = "Gate 12B";
const boardingTime = "06:45 AM";

console.log("==================================================");
console.log("             ✈️ FLIGHT E-TICKET INVOICE");
console.log("==================================================");

console.log(`Booking PNR    : ${bookingReference}`);
console.log(`Primary Pax    : ${passengerName}`);
console.log(`Airline & Craft: ${airlineName} [${flightNumber}]`);
console.log(`Route          : ${sourceAirport} ➔ ${destinationAirport}`);
console.log(`Departure      : ${departureTime}`);
console.log(`Arrival        : ${arrivalTime} (${flightDuration})`);
console.log(`Cabin Class    : ${travelClass}`);
console.log(`Trip Itinerary : ${tripType}`);
console.log(`Seat(s)        : ${allocatedSeats} (${numberOfPassengers} Pax)`);

console.log("--------------------------------------------------");
console.log(`Base Airfare   : ₹${baseFarePerPax.toFixed(2)} × ${numberOfPassengers} (x${tripMultiplier}) = ₹${totalBaseFare.toFixed(2)}`);
if (extraBaggagePerPaxKg > 0) {
    console.log(`Excess Luggage : ${extraBaggagePerPaxKg} kg/pax extra × ₹${extraBaggageRatePerKg} = ₹${totalBaggageFee.toFixed(2)}`);
}
if (totalSeatFee > 0) {
    console.log(`Seat Selection : ₹${totalSeatFee.toFixed(2)} (${seatPreference} for ${numberOfPassengers} pax)`);
}
if (totalMealCharge > 0) {
    console.log(`Inflight Meals : ₹${totalMealCharge.toFixed(2)} (${mealChoice} for ${numberOfPassengers} pax)`);
}
if (includeInsurance) {
    console.log(`Travel Insure  : ₹${insuranceCharge.toFixed(2)} (Comprehensive Multi-Risk Policy)`);
}
if (includeLoungeAccess) {
    console.log(`Lounge Access  : ₹${loungeCharge.toFixed(2)} (Airport Executive Lounge Access)`);
}

console.log("--------------------------------------------------");
console.log(`Flight Subtotal: ₹${flightSubtotal.toFixed(2)}`);
console.log(`Airport Taxes  : ₹${totalAirportFees.toFixed(2)} (UDF + ASF + PSF)`);
console.log(`Taxable Amount : ₹${taxableSubtotal.toFixed(2)}`);
console.log(`CGST (${cgstRate.toFixed(1)}%)     : ₹${cgstAmount.toFixed(2)}`);
console.log(`SGST (${sgstRate.toFixed(1)}%)     : ₹${sgstAmount.toFixed(2)}`);
console.log(`Total GST      : ₹${totalGst.toFixed(2)} (${gstRate}%)`);
console.log(`Gross Total    : ₹${totalAmount.toFixed(2)}`);
console.log(`Promo Coupon   : -₹${promoDiscount.toFixed(2)} (${promoCoupon})`);
console.log(`FINAL PAYABLE  : ₹${finalAirfare.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Booking Status : ${bookingStatus}`);
console.log(`Boarding Gate  : ${boardingGate}`);
console.log(`Boarding Time  : ${boardingTime}`);

console.log("==================================================");
console.log("         🛫 HAVE A SAFE AND HAPPY FLIGHT!");
console.log("      Web check-in closes 60 mins before departure");
console.log("==================================================");

console.log(typeof passengerName);
console.log(typeof bookingReference);
console.log(typeof travelClass);
console.log(typeof numberOfPassengers);
console.log(typeof includeInsurance);
console.log(typeof finalAirfare);
console.log(typeof bookingStatus);
