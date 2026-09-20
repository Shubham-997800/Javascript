const customerName = "Shubham";
const consumerNumber = "EB-2026-9978";
const meterNumber = "MTR-MH-884210";
const electricityBoard = "Maharashtra State Electricity Board (MSEB)";
const subDivision = "Andheri West Sub-Division";
const billingCycle = "August - September 2026";
const dueDate = "28-Sep-2026";

// Connection & Load specifications
const connectionType = "Domestic"; // Domestic, Commercial, Industrial
const sanctionedLoadKw = 5; // Sanctioned load in kW

// Meter readings
const previousReading = 14220;
const currentReading = 14605;
const totalUnitsConsumed = currentReading - previousReading; // 385 units

// Solar Rooftop Net-Metering
const hasSolarNetMetering = true;
const solarUnitsExported = 65; // Solar power generated & exported to grid
const netBilledUnits = hasSolarNetMetering ? (totalUnitsConsumed - solarUnitsExported) : totalUnitsConsumed;

// Tariff determination based on Connection Type
let fixedRatePerKw;
let slab1Rate;
let slab2Rate;
let slab3Rate;
let slab4Rate;

switch (connectionType) {
    case "Domestic":
        fixedRatePerKw = 65;
        slab1Rate = 3.60;  // 0 - 100 units
        slab2Rate = 5.40;  // 101 - 300 units
        slab3Rate = 7.80;  // 301 - 500 units
        slab4Rate = 9.90;  // Above 500 units
        break;

    case "Commercial":
        fixedRatePerKw = 150;
        slab1Rate = 7.50;
        slab2Rate = 9.80;
        slab3Rate = 12.00;
        slab4Rate = 14.50;
        break;

    case "Industrial":
        fixedRatePerKw = 250;
        slab1Rate = 8.50;
        slab2Rate = 10.50;
        slab3Rate = 13.00;
        slab4Rate = 15.50;
        break;

    default:
        fixedRatePerKw = 60;
        slab1Rate = 4.00;
        slab2Rate = 6.00;
        slab3Rate = 8.00;
        slab4Rate = 10.00;
}

// Progressive Slab Calculation on Net Billed Units
let energyCharges = 0;
let slab1Charge = 0;
let slab2Charge = 0;
let slab3Charge = 0;
let slab4Charge = 0;

if (netBilledUnits <= 100) {
    slab1Charge = netBilledUnits * slab1Rate;
    energyCharges = slab1Charge;
} else if (netBilledUnits <= 300) {
    slab1Charge = 100 * slab1Rate;
    slab2Charge = (netBilledUnits - 100) * slab2Rate;
    energyCharges = slab1Charge + slab2Charge;
} else if (netBilledUnits <= 500) {
    slab1Charge = 100 * slab1Rate;
    slab2Charge = 200 * slab2Rate;
    slab3Charge = (netBilledUnits - 300) * slab3Rate;
    energyCharges = slab1Charge + slab2Charge + slab3Charge;
} else {
    slab1Charge = 100 * slab1Rate;
    slab2Charge = 200 * slab2Rate;
    slab3Charge = 200 * slab3Rate;
    slab4Charge = (netBilledUnits - 500) * slab4Rate;
    energyCharges = slab1Charge + slab2Charge + slab3Charge + slab4Charge;
}

// Fixed demand charges
const fixedDemandCharges = sanctionedLoadKw * fixedRatePerKw;

// Fuel Adjustment Charges (FAC / FPPCA) @ ₹0.40 per net unit
const facRatePerUnit = 0.40;
const totalFacCharges = netBilledUnits * facRatePerUnit;

// Green Energy Cess / Renewable surcharge @ ₹0.15 per net unit
const greenEnergyCess = netBilledUnits * 0.15;

// State Electricity Duty (9% on Energy + Fixed charges)
const dutyAssessmentAmount = energyCharges + fixedDemandCharges;
const electricityDutyRate = 9;
const dutyAmount = (dutyAssessmentAmount * electricityDutyRate) / 100;

// Gross Bill Amount
const grossBillAmount = energyCharges + fixedDemandCharges + totalFacCharges + greenEnergyCess + dutyAmount;

// Discounts & Incentives
const isPromptPayment = true;
const promptRebate = isPromptPayment ? (energyCharges * 1) / 100 : 0; // 1% on energy charges
const digitalPaymentDiscount = 25.0; // ₹25 instant digital incentive
const solarGreenIncentive = hasSolarNetMetering ? 50.0 : 0.0;

// Security Deposit Annual Interest Credit
const securityDepositInterestCredit = 42.50;

const totalRebates = promptRebate + digitalPaymentDiscount + solarGreenIncentive + securityDepositInterestCredit;

// Final Payable Amount
const finalPayable = grossBillAmount - totalRebates;

const paymentMethod = "UPI / Auto-Debit";
const billStatus = "Paid";

console.log("==================================================");
console.log("          ⚡ ELECTRICITY CONSUMER INVOICE");
console.log("==================================================");

console.log(`Consumer No    : ${consumerNumber}`);
console.log(`Consumer Name  : ${customerName}`);
console.log(`Board / Discom : ${electricityBoard}`);
console.log(`Sub-Division   : ${subDivision}`);
console.log(`Meter No       : ${meterNumber}`);
console.log(`Billing Cycle  : ${billingCycle}`);
console.log(`Payment Due Date: ${dueDate}`);
console.log(`Category / Load: ${connectionType} (${sanctionedLoadKw} kW Sanctioned)`);

console.log("--------------------------------------------------");
console.log(`Previous Meter : ${previousReading} kWh`);
console.log(`Current Meter  : ${currentReading} kWh`);
console.log(`Gross Consumed : ${totalUnitsConsumed} kWh`);
if (hasSolarNetMetering) {
    console.log(`Solar Exported : -${solarUnitsExported} kWh (Net Metering Active)`);
    console.log(`Net Billed Qty : ${netBilledUnits} kWh`);
}

console.log("--------------------------------------------------");
console.log(`Energy Charges : ₹${energyCharges.toFixed(2)} (Tiered Slab Tariffs)`);
console.log(`Fixed Demand   : ₹${fixedDemandCharges.toFixed(2)} (${sanctionedLoadKw} kW × ₹${fixedRatePerKw})`);
console.log(`FAC Charges    : ₹${totalFacCharges.toFixed(2)} (₹${facRatePerUnit}/kWh)`);
console.log(`Green Cess     : ₹${greenEnergyCess.toFixed(2)} (Renewable Surcharge)`);
console.log(`State Duty (9%): ₹${dutyAmount.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Gross Bill Amt : ₹${grossBillAmount.toFixed(2)}`);
if (isPromptPayment) {
    console.log(`Prompt Rebate  : -₹${promptRebate.toFixed(2)} (Early Pay 1%)`);
}
console.log(`Digital Promo  : -₹${digitalPaymentDiscount.toFixed(2)} (Online Mode)`);
if (hasSolarNetMetering) {
    console.log(`Solar Subsidy  : -₹${solarGreenIncentive.toFixed(2)} (Green Producer)`);
}
console.log(`Deposit Credit : -₹${securityDepositInterestCredit.toFixed(2)} (Annual Interest)`);
console.log(`FINAL PAYABLE  : ₹${finalPayable.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Method : ${paymentMethod}`);
console.log(`Payment Status : ${billStatus}`);

console.log("==================================================");
console.log("     💡 SAVE ELECTRICITY - POWER THE NATION!");
console.log("      🌱 Solar Power Reduces Carbon Footprint");
console.log("==================================================");

console.log(typeof customerName);
console.log(typeof consumerNumber);
console.log(typeof connectionType);
console.log(typeof totalUnitsConsumed);
console.log(typeof hasSolarNetMetering);
console.log(typeof finalPayable);
console.log(typeof billStatus);
