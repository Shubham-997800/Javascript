const patientName = "Shubham";
const patientId = "MED-2026-9154";
const hospitalName = "Apollo Multi-Specialty Hospital & Research Centre";
const wardCategory = "Deluxe ICU"; // General Ward, Semi-Private, Deluxe Room, ICU, Deluxe ICU
const bedNumber = "ICU-Bed-04 (Cardiac Critical Care Unit)";
const admissionDate = "16-Sep-2026 (08:30 AM)";
const dischargeDate = "20-Sep-2026 (04:15 PM)";
const daysAdmitted = 4;
const attendingPhysician = "Dr. Rajesh Sharma (MD, DM Cardiology)";
const department = "Cardiology & Interventional Care";

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

// Medical investigations, radiology & lab charges
const labInvestigationFees = 5400;
const radiologyScanFees = 7800; // 2D Echo & CT Angiography
const pharmacyMedicineBill = 12400;
const surgicalConsumables = 3800;

// Emergency ambulance & hospital administrative facility fees
const ambulanceCharges = 1500; // Emergency ALS Ambulance with paramedic
const admissionRegistrationFee = 1200;
const sanitizationEquipmentFee = 1000;

// Total hospital gross charges
const grossMedicalCharges = totalRoomCharges + totalNursingCharges + physicianVisitFee +
    totalSpecialistFees + labInvestigationFees + radiologyScanFees +
    pharmacyMedicineBill + surgicalConsumables + ambulanceCharges +
    admissionRegistrationFee + sanitizationEquipmentFee;

// Health Insurance / Mediclaim processing (Cashless TPA)
const hasInsurance = true;
const insuranceProvider = "Star Health & Allied Insurance";
const policyNumber = "STAR-2026-HL-7731";
const tpaClaimRef = "TPA-APOLLO-992014";
const coveragePercentage = 80; // 80% covered by insurance
const fixedDeductible = 4000; // Mandatory policy deductible

let insuranceApprovedAmount = 0;
let patientShare = 0;

if (hasInsurance) {
    const claimableAmount = Math.max(0, grossMedicalCharges - fixedDeductible);
    insuranceApprovedAmount = (claimableAmount * coveragePercentage) / 100;
    patientShare = Math.max(0, grossMedicalCharges - insuranceApprovedAmount);
} else {
    patientShare = grossMedicalCharges;
}

// Corporate / Hospital Goodwill Discount
const corporateDiscount = 1500;
const netPatientPayable = Math.max(0, patientShare - corporateDiscount);

const paymentMethod = "TPA Cashless Settlement + UPI";
const dischargeStatus = "Fit for Discharge (Stable - Follow-up in 10 Days)";

console.log("==================================================");
console.log("          🏥 HOSPITAL DISCHARGE BILLING");
console.log("==================================================");

console.log(`Patient ID     : ${patientId}`);
console.log(`Patient Name   : ${patientName}`);
console.log(`Hospital       : ${hospitalName}`);
console.log(`Department     : ${department}`);
console.log(`Primary Doctor : ${attendingPhysician}`);
console.log(`Ward / Bed     : ${wardCategory} [${bedNumber}]`);
console.log(`Admitted On    : ${admissionDate}`);
console.log(`Discharged On  : ${dischargeDate}`);
console.log(`Stay Duration  : ${daysAdmitted} Days`);

console.log("--------------------------------------------------");
console.log(`Room Rent      : ₹${roomTariffPerDay.toFixed(2)} × ${daysAdmitted} = ₹${totalRoomCharges.toFixed(2)}`);
console.log(`Nursing Care   : ₹${nursingCarePerDay.toFixed(2)} × ${daysAdmitted} = ₹${totalNursingCharges.toFixed(2)}`);
console.log(`Physician Fees : ₹${physicianVisitFee.toFixed(2)} (Daily Round Checks)`);
console.log(`Specialist Cons: ₹${totalSpecialistFees.toFixed(2)} (${specialistVisits} visits @ ₹${specialistFeePerVisit.toFixed(2)})`);
console.log(`Laboratory     : ₹${labInvestigationFees.toFixed(2)} (Blood Panel & Pathology)`);
console.log(`Radiology/Scan : ₹${radiologyScanFees.toFixed(2)} (2D Echo & CT Angiography)`);
console.log(`Pharmacy Bill  : ₹${pharmacyMedicineBill.toFixed(2)} (Prescription Medications)`);
console.log(`Consumables    : ₹${surgicalConsumables.toFixed(2)} (Sterile Kits & PPE)`);
console.log(`Emergency ALS  : ₹${ambulanceCharges.toFixed(2)} (Paramedic Ambulance Transit)`);
console.log(`Admin/Sanitize : ₹${(admissionRegistrationFee + sanitizationEquipmentFee).toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Gross Charges  : ₹${grossMedicalCharges.toFixed(2)}`);
if (hasInsurance) {
    console.log(`Insurance TPA  : ${insuranceProvider}`);
    console.log(`Policy Number  : ${policyNumber}`);
    console.log(`Claim Ref No.  : ${tpaClaimRef}`);
    console.log(`Policy Co-pay  : ₹${fixedDeductible.toFixed(2)} Deductible`);
    console.log(`TPA Approved   : -₹${insuranceApprovedAmount.toFixed(2)} (${coveragePercentage}% Settled by Insurer)`);
    console.log(`Patient Share  : ₹${patientShare.toFixed(2)}`);
}
console.log(`Hospital Rebate: -₹${corporateDiscount.toFixed(2)} (Empanelled Corporate Benefit)`);
console.log(`FINAL PAYABLE  : ₹${netPatientPayable.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Patient Status : ${dischargeStatus}`);

console.log("==================================================");
console.log("       ❤️ WISHING YOU A SPEEDY RECOVERY!");
console.log("     Emergency 24x7 Helpline: 1800-419-4444");
console.log("==================================================");

console.log(typeof patientName);
console.log(typeof patientId);
console.log(typeof wardCategory);
console.log(typeof daysAdmitted);
console.log(typeof hasInsurance);
console.log(typeof netPatientPayable);
console.log(typeof dischargeStatus);
