const customerName = "Shubham";
const consumerId = "EB-2026-9978";
const connectionType = "Domestic";

const unitsConsumed = 245;

let energyCharges = 0;

// Slab calculation
if (unitsConsumed <= 100) {
    energyCharges = unitsConsumed * 3.5;
} else if (unitsConsumed <= 200) {
    energyCharges = (100 * 3.5) + ((unitsConsumed - 100) * 5.0);
} else if (unitsConsumed <= 300) {
    energyCharges = (100 * 3.5) + (100 * 5.0) + ((unitsConsumed - 200) * 6.5);
} else {
    energyCharges = (100 * 3.5) + (100 * 5.0) + (100 * 6.5) + ((unitsConsumed - 300) * 8.0);
}

const fixedMeterCharge = 80;
const electricityDutyRate = 5;
const dutyAmount = (energyCharges * electricityDutyRate) / 100;

const subtotal = energyCharges + fixedMeterCharge + dutyAmount;

const promptPaymentDiscount = 50;
const finalAmount = subtotal - promptPaymentDiscount;

const paymentMethod = "UPI";
const billStatus = "Paid";

console.log("========================================");
console.log("       ⚡ ELECTRICITY BILL INVOICE");
console.log("========================================");

console.log(`Consumer ID    : ${consumerId}`);
console.log(`Consumer Name  : ${customerName}`);
console.log(`Connection     : ${connectionType}`);
console.log(`Units Consumed : ${unitsConsumed} kWh`);

console.log("----------------------------------------");
console.log(`Energy Charges : ₹${energyCharges.toFixed(2)}`);
console.log(`Meter Rent     : ₹${fixedMeterCharge.toFixed(2)}`);
console.log(`Elec Duty (5%) : ₹${dutyAmount.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Subtotal       : ₹${subtotal.toFixed(2)}`);
console.log(`Discount       : ₹${promptPaymentDiscount.toFixed(2)}`);
console.log(`Final Payable  : ₹${finalAmount.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Bill Status    : ${billStatus}`);

console.log("========================================");
console.log("       💡 SAVE ELECTRICITY, SAVE POWER!");
console.log("========================================");

console.log(typeof customerName);
console.log(typeof unitsConsumed);
console.log(typeof energyCharges);
console.log(typeof finalAmount);
console.log(typeof billStatus);
