const patientName = "Shubham";
const patientId = "MED-2026-9154";
const hospitalName = "Apollo Multi-Specialty Hospital";
const wardCategory = "Deluxe ICU"; // General Ward, Semi-Private, Deluxe Room, ICU, Deluxe ICU
const daysAdmitted = 4;
const attendingPhysician = "Dr. Rajesh Sharma (MD, Cardiology)";
const department = "Cardiology";

let roomTariffPerDay;
let nursingCarePerDay;

switch (wardCategory) {
    case "General Ward":
        roomTariffPerDay = 1800;
        nursingCarePerDay = 500;
        break;
    case "Semi-Private":
        roomTariffPerDay = 3500;
        nursingCarePerDay = 900;
        break;
    case "Deluxe Room":
        roomTariffPerDay = 6500;
        nursingCarePerDay = 1400;
        break;
    case "ICU":
        roomTariffPerDay = 12000;
        nursingCarePerDay = 2500;
        break;
    case "Deluxe ICU":
        roomTariffPerDay = 18000;
        nursingCarePerDay = 3500;
        break;
    default:
        roomTariffPerDay = 3000;
        nursingCarePerDay = 800;
}

const totalRoomCharges = roomTariffPerDay * daysAdmitted;
const totalNursingCharges = nursingCarePerDay * daysAdmitted;

// Doctor & Specialist consultations
const physicianVisitFee = 1500 * daysAdmitted;
const specialistVisits = 3;
const specialistFeePerVisit = 2200;
const totalSpecialistFees = specialistVisits * specialistFeePerVisit;

// Medical investigations & pharmacy
const labInvestigationFees = 5400;
const radiologyScanFees = 7800;
const pharmacyMedicineBill = 12400;
const surgicalConsumables = 3800;

// Hospital administrative fees
const admissionRegistrationFee = 1200;
const sanitizationEquipmentFee = 1000;

// Total hospital gross charges
const grossMedicalCharges = totalRoomCharges + totalNursingCharges + physicianVisitFee +
    totalSpecialistFees + labInvestigationFees + radiologyScanFees +
    pharmacyMedicineBill + surgicalConsumables + admissionRegistrationFee +
    sanitizationEquipmentFee;

// Health Insurance processing
const hasInsurance = true;
const insuranceProvider = "Star Health & Allied Insurance";
const policyNumber = "STAR-2026-HL-7731";
const coveragePercentage = 80;
const fixedDeductible = 4000;

let insuranceApprovedAmount = 0;
let patientShare = 0;

if (hasInsurance) {
    const claimableAmount = grossMedicalCharges - fixedDeductible;
    insuranceApprovedAmount = (claimableAmount * coveragePercentage) / 100;
    patientShare = grossMedicalCharges - insuranceApprovedAmount;
} else {
    patientShare = grossMedicalCharges;
}

const corporateDiscount = 1500;
const netPatientPayable = patientShare - corporateDiscount;

const paymentMethod = "TPA Cashless + UPI";
const dischargeStatus = "Fit for Discharge (Stable)";

console.log("========================================");
console.log("     🏥 HOSPITAL DISCHARGE BILLING");
console.log("========================================");

console.log(`Patient ID     : ${patientId}`);
console.log(`Patient Name   : ${patientName}`);
console.log(`Hospital       : ${hospitalName}`);
console.log(`Department     : ${department}`);
console.log(`Primary Doctor : ${attendingPhysician}`);
console.log(`Ward Category  : ${wardCategory}`);
console.log(`Stay Duration  : ${daysAdmitted} Days`);

console.log("----------------------------------------");
console.log(`Room Rent      : ₹${roomTariffPerDay} × ${daysAdmitted} = ₹${totalRoomCharges}`);
console.log(`Nursing Care   : ₹${nursingCarePerDay} × ${daysAdmitted} = ₹${totalNursingCharges}`);
console.log(`Physician Fees : ₹${physicianVisitFee}`);
console.log(`Specialist Cons: ₹${totalSpecialistFees} (${specialistVisits} visits)`);
console.log(`Laboratory     : ₹${labInvestigationFees}`);
console.log(`Radiology/Scan : ₹${radiologyScanFees}`);
console.log(`Pharmacy Bill  : ₹${pharmacyMedicineBill}`);
console.log(`Consumables    : ₹${surgicalConsumables}`);
console.log(`Admission/Admin: ₹${admissionRegistrationFee + sanitizationEquipmentFee}`);

console.log("----------------------------------------");
console.log(`Gross Charges  : ₹${grossMedicalCharges.toFixed(2)}`);
if (hasInsurance) {
    console.log(`Insurance TPA  : ${insuranceProvider}`);
    console.log(`Policy No      : ${policyNumber}`);
    console.log(`TPA Approved   : -₹${insuranceApprovedAmount.toFixed(2)} (${coveragePercentage}%)`);
    console.log(`Patient Share  : ₹${patientShare.toFixed(2)}`);
}
console.log(`Hospital Rebate: -₹${corporateDiscount.toFixed(2)}`);
console.log(`Net Payable    : ₹${netPatientPayable.toFixed(2)}`);

console.log("----------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Patient Status : ${dischargeStatus}`);

console.log("========================================");
console.log("      ❤️ WISHING YOU A SPEEDY RECOVERY!");
console.log("========================================");

console.log(typeof patientName);
console.log(typeof patientId);
console.log(typeof wardCategory);
console.log(typeof daysAdmitted);
console.log(typeof hasInsurance);
console.log(typeof netPatientPayable);
console.log(typeof dischargeStatus);
