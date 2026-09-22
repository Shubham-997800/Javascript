const customerName = "Shubham";
const pickupLocation = "Railway Station";
const dropLocation = "City Airport";

const cabType = "Sedan";
const distanceKm = 24;
const rideTimeMinutes = 45;

let baseFare;
let perKmRate;
let perMinuteRate;

switch (cabType) {
    case "Auto":
        baseFare = 30;
        perKmRate = 12;
        perMinuteRate = 1.0;
        break;

    case "Mini":
        baseFare = 50;
        perKmRate = 14;
        perMinuteRate = 1.5;
        break;

    case "Sedan":
        baseFare = 80;
        perKmRate = 18;
        perMinuteRate = 2.0;
        break;

    case "SUV":
        baseFare = 120;
        perKmRate = 24;
        perMinuteRate = 2.5;
        break;

    default:
        baseFare = 50;
        perKmRate = 15;
        perMinuteRate = 1.5;
}

const distanceFare = distanceKm * perKmRate;
const timeFare = rideTimeMinutes * perMinuteRate;

const rideSubtotal = baseFare + distanceFare + timeFare;

const isPeakHour = true;
let surgeMultiplier = 1;

if (isPeakHour) {
    surgeMultiplier = 1.25;
}

const amountWithSurge = rideSubtotal * surgeMultiplier;
const surgeAmount = amountWithSurge - rideSubtotal;

const tollCharges = 70;
const gstRate = 5;
const gst = (amountWithSurge * gstRate) / 100;

const grossTotal = amountWithSurge + tollCharges + gst;

const promoDiscount = 50;
const finalFare = grossTotal - promoDiscount;

const paymentMethod = "UPI";
const rideStatus = "Completed";

console.log("========================================");
console.log("         🚖 CAB RIDE INVOICE");
console.log("========================================");

console.log(`Passenger      : ${customerName}`);
console.log(`Pickup         : ${pickupLocation}`);
console.log(`Drop           : ${dropLocation}`);
console.log(`Cab Category   : ${cabType}`);
console.log(`Distance       : ${distanceKm} km`);
console.log(`Ride Duration  : ${rideTimeMinutes} mins`);

console.log("----------------------------------------");
console.log(`Base Fare      : ₹${baseFare}`);
console.log(`Distance Fare  : ₹${distanceFare}`);
console.log(`Time Fare      : ₹${timeFare.toFixed(2)}`);
console.log(`Ride Subtotal  : ₹${rideSubtotal.toFixed(2)}`);

if (isPeakHour) {
    console.log(`Surge (1.25x)  : ₹${surgeAmount.toFixed(2)}`);
}

console.log(`Toll Charges   : ₹${tollCharges}`);
console.log(`GST (5%)       : ₹${gst.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Gross Total    : ₹${grossTotal.toFixed(2)}`);
console.log(`Promo Discount : ₹${promoDiscount}`);
console.log(`Final Fare     : ₹${finalFare.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Method : ${paymentMethod}`);
console.log(`Ride Status    : ${rideStatus}`);

console.log("========================================");
console.log("       ⭐ THANK YOU FOR RIDING WITH US!");
console.log("========================================");

console.log(typeof customerName);
console.log(typeof cabType);
console.log(typeof distanceKm);
console.log(typeof isPeakHour);
console.log(typeof finalFare);
