// Hospital Billing & Patient Management System using Functions

console.log("========================================");
console.log("   🏥 CITY LIFE MULTI-SPECIALTY HOSPITAL");
console.log("========================================\n");

// Ward tariff and daily nursing charges
const wardCategories = {
    general: { name: "General Ward", perDayTariff: 1800, nursingPerDay: 500 },
    semi_private: { name: "Semi-Private Room", perDayTariff: 3500, nursingPerDay: 900 },
    deluxe: { name: "Deluxe Private Room", perDayTariff: 6500, nursingPerDay: 1500 },
    icu: { name: "Intensive Care Unit (ICU)", perDayTariff: 14000, nursingPerDay: 3000 }
};

// Diagnostic and lab test catalog
const diagnosticTestCatalog = {
    "complete_blood_count": { name: "Complete Blood Count (CBC)", price: 450 },
    "lipid_profile": { name: "Lipid Profile Test", price: 850 },
    "liver_function": { name: "Liver Function Test (LFT)", price: 1100 },
    "ecg": { name: "Electrocardiogram (ECG)", price: 600 },
    "chest_xray": { name: "Digital Chest X-Ray", price: 950 },
    "ct_scan": { name: "CT Scan (Abdomen)", price: 5500 },
    "mri_brain": { name: "MRI Brain Contrast", price: 8500 }
};

// Hospital billing records repository
let dischargeBills = [];

// Calculate ward stay and nursing care charges
function calculateWardCharges(wardTypeKey, daysAdmitted) {
    let ward = wardCategories[wardTypeKey];
    if (!ward) {
        ward = wardCategories.general;
    }

    let roomTotal = ward.perDayTariff * daysAdmitted;
    let nursingTotal = ward.nursingPerDay * daysAdmitted;

    return {
        wardName: ward.name,
        days: daysAdmitted,
        perDayTariff: ward.perDayTariff,
        roomTotal: roomTotal,
        nursingTotal: nursingTotal,
        totalWardCost: roomTotal + nursingTotal
    };
}

// Calculate total doctor consultation charges
function calculateDoctorCharges(doctorVisits = []) {
    return doctorVisits.reduce((total, visit) => {
        let fee = (visit.feePerVisit || 1000) * (visit.count || 1);
        return total + fee;
    }, 0);
}

// Calculate total pharmacy cost from prescribed medicine items
function calculatePharmacyTotal(medicines = []) {
    return medicines.reduce((sum, med) => sum + (med.price * med.quantity), 0);
}

// Calculate diagnostic investigation charges
function calculateDiagnosticsTotal(testKeys = []) {
    let breakdown = [];
    let total = 0;

    testKeys.forEach(key => {
        let test = diagnosticTestCatalog[key];
        if (test) {
            total += test.price;
            breakdown.push({ name: test.name, price: test.price });
        }
    });

    return { total, breakdown };
}

// Calculate health insurance coverage and co-payment settlement
function processInsuranceClaim(grossTotal, insurancePolicy) {
    if (!insurancePolicy || !insurancePolicy.hasInsurance) {
        return {
            hasInsurance: false,
            provider: "Self-Pay (No Insurance)",
            sumInsured: 0,
            approvedAmount: 0,
            patientPayable: grossTotal,
            coPayDeduction: 0
        };
    }

    let deductible = insurancePolicy.deductible || 0;
    let eligibleClaim = Math.max(0, grossTotal - deductible);
    let coPayPercent = insurancePolicy.coPayPercent || 0;
    let coPayDeduction = (eligibleClaim * coPayPercent) / 100;
    let claimAfterCoPay = eligibleClaim - coPayDeduction;

    let approvedAmount = Math.min(insurancePolicy.sumInsured, claimAfterCoPay);
    let patientPayable = grossTotal - approvedAmount;

    return {
        hasInsurance: true,
        provider: insurancePolicy.provider,
        policyNumber: insurancePolicy.policyNumber,
        sumInsured: insurancePolicy.sumInsured,
        coPayPercent: coPayPercent,
        coPayDeduction: coPayDeduction,
        approvedAmount: Number(approvedAmount.toFixed(2)),
        patientPayable: Number(patientPayable.toFixed(2))
    };
}

// Generate comprehensive inpatient discharge bill
function generateDischargeBill(patient, stayInfo, medicalServices = {}, insurance = null) {
    if (!patient || !patient.name || !patient.uhid) {
        console.log("❌ [BILL ERROR] Patient UHID and Name are mandatory.");
        return null;
    }

    let wardCharges = calculateWardCharges(stayInfo.wardType, stayInfo.days);
    let doctorFees = calculateDoctorCharges(medicalServices.doctorVisits || []);
    let pharmacyTotal = calculatePharmacyTotal(medicalServices.medicines || []);
    let diagnostics = calculateDiagnosticsTotal(medicalServices.diagnosticTests || []);
    let surgeryFee = medicalServices.surgeryCharges || 0;
    let registrationFee = 750;
    let sanitizationFee = 500;

    let grossTotal = wardCharges.totalWardCost + doctorFees + pharmacyTotal +
                     diagnostics.total + surgeryFee + registrationFee + sanitizationFee;

    let seniorDiscount = 0;
    if (patient.age >= 60 && (!insurance || !insurance.hasInsurance)) {
        seniorDiscount = Number((grossTotal * 0.10).toFixed(2));
    }

    let netBillBeforeInsurance = grossTotal - seniorDiscount;
    let claimSettlement = processInsuranceClaim(netBillBeforeInsurance, insurance);

    let billNumber = `INV-${Date.now().toString().slice(-6)}`;

    let billRecord = {
        billNumber: billNumber,
        patient: patient,
        stayInfo: {
            ...stayInfo,
            wardName: wardCharges.wardName,
            roomTotal: wardCharges.roomTotal,
            nursingTotal: wardCharges.nursingTotal,
            totalWardCost: wardCharges.totalWardCost
        },
        doctorFees: doctorFees,
        pharmacyTotal: pharmacyTotal,
        diagnostics: diagnostics,
        surgeryFee: surgeryFee,
        administrativeCharges: registrationFee + sanitizationFee,
        grossTotal: grossTotal,
        seniorDiscount: seniorDiscount,
        netBillBeforeInsurance: netBillBeforeInsurance,
        insuranceClaim: claimSettlement,
        finalPayableByPatient: claimSettlement.patientPayable,
        dischargeDate: new Date().toLocaleDateString()
    };

    dischargeBills.push(billRecord);
    return billRecord;
}

// Print itemized discharge invoice summary
function printDischargeInvoice(bill) {
    if (!bill) return;

    console.log("----------------------------------------");
    console.log("       📋 PATIENT DISCHARGE INVOICE");
    console.log("----------------------------------------");
    console.log(`Invoice No     : ${bill.billNumber}`);
    console.log(`Date           : ${bill.dischargeDate}`);
    console.log(`Patient Name   : ${bill.patient.name} (${bill.patient.age}Y / ${bill.patient.gender})`);
    console.log(`UHID           : ${bill.patient.uhid}`);
    console.log(`Attending Doc  : ${bill.patient.primaryDoctor}`);
    console.log(`Ward / Room    : ${bill.stayInfo.wardName} (${bill.stayInfo.days} Days)`);
    console.log("----------------------------------------");
    console.log("HOSPITAL CHARGES BREAKDOWN:");
    console.log(`  • Room Charges           : ₹${bill.stayInfo.roomTotal.toFixed(2)}`);
    console.log(`  • Nursing Care           : ₹${bill.stayInfo.nursingTotal.toFixed(2)}`);
    console.log(`  • Doctor Consultation    : ₹${bill.doctorFees.toFixed(2)}`);

    if (bill.surgeryFee > 0) {
        console.log(`  • OT & Surgical Charges  : ₹${bill.surgeryFee.toFixed(2)}`);
    }

    console.log(`  • Pharmacy & Medicines   : ₹${bill.pharmacyTotal.toFixed(2)}`);
    console.log(`  • Diagnostic / Lab Tests : ₹${bill.diagnostics.total.toFixed(2)}`);
    console.log(`  • Admin & Hygiene Fees   : ₹${bill.administrativeCharges.toFixed(2)}`);
    console.log(`  --------------------------------------`);
    console.log(`  💰 Gross Medical Total   : ₹${bill.grossTotal.toFixed(2)}`);

    if (bill.seniorDiscount > 0) {
        console.log(`  • Senior Citizen Rebate  : -₹${bill.seniorDiscount.toFixed(2)}`);
        console.log(`  • Net Medical Bill       : ₹${bill.netBillBeforeInsurance.toFixed(2)}`);
    }

    console.log("----------------------------------------");
    console.log("PAYMENT & INSURANCE SETTLEMENT:");
    if (bill.insuranceClaim.hasInsurance) {
        console.log(`  • TPA Insurer            : ${bill.insuranceClaim.provider}`);
        console.log(`  • Policy No              : ${bill.insuranceClaim.policyNumber}`);
        console.log(`  • Co-Pay Deduction (${bill.insuranceClaim.coPayPercent}%) : ₹${bill.insuranceClaim.coPayDeduction.toFixed(2)}`);
        console.log(`  • Insurance Approved     : -₹${bill.insuranceClaim.approvedAmount.toFixed(2)}`);
    } else {
        console.log(`  • Payment Mode           : Self Payment`);
    }

    console.log("----------------------------------------");
    console.log(`💵 NET AMOUNT PAYABLE      : ₹${bill.finalPayableByPatient.toFixed(2)}`);
    console.log("----------------------------------------\n");
}

// Generate hospital revenue and accounts summary report
function generateHospitalDailyReport(billsList) {
    let totalPatients = billsList.length;
    let totalGrossRevenue = billsList.reduce((acc, b) => acc + b.grossTotal, 0);
    let totalInsuranceReceived = billsList.reduce((acc, b) => acc + b.insuranceClaim.approvedAmount, 0);
    let totalCashCollected = billsList.reduce((acc, b) => acc + b.finalPayableByPatient, 0);
    let totalDiscountsGiven = billsList.reduce((acc, b) => acc + b.seniorDiscount, 0);

    console.log("========================================");
    console.log("     📊 HOSPITAL REVENUE SUMMARY");
    console.log("========================================");
    console.log(`Total Patients Discharged  : ${totalPatients}`);
    console.log(`Total Gross Billing Amount : ₹${totalGrossRevenue.toFixed(2)}`);
    console.log(`Total Discounts Extended   : ₹${totalDiscountsGiven.toFixed(2)}`);
    console.log(`Insurance Settled (TPA)    : ₹${totalInsuranceReceived.toFixed(2)}`);
    console.log(`Patient Out-Of-Pocket Paid : ₹${totalCashCollected.toFixed(2)}`);
    console.log("========================================\n");
}

// Patient 1: ICU & Cardiac Surgery admission with Star Health Insurance
let patient1 = {
    uhid: "UHID-2026-1044",
    name: "Rajesh Kumar",
    age: 52,
    gender: "Male",
    primaryDoctor: "Dr. A. K. Sen (Cardiology)"
};

let stayDetails1 = {
    wardType: "icu",
    days: 4
};

let medicalServices1 = {
    doctorVisits: [
        { doctor: "Dr. A. K. Sen", feePerVisit: 2000, count: 4 },
        { doctor: "Dr. Meera Rao (Anesthesia)", feePerVisit: 3000, count: 1 }
    ],
    medicines: [
        { name: "Inj. Streptokinase", price: 3200, quantity: 2 },
        { name: "Cardiotech Tablets", price: 150, quantity: 10 },
        { name: "IV Fluids & Antibiotics", price: 400, quantity: 6 }
    ],
    diagnosticTests: ["complete_blood_count", "ecg", "chest_xray", "lipid_profile"],
    surgeryCharges: 45000
};

let insurancePolicy1 = {
    hasInsurance: true,
    provider: "Star Health Insurance",
    policyNumber: "POL-STAR-88741",
    sumInsured: 200000,
    coPayPercent: 10,
    deductible: 1000
};

let bill1 = generateDischargeBill(patient1, stayDetails1, medicalServices1, insurancePolicy1);
printDischargeInvoice(bill1);

// Patient 2: Senior citizen general ward admission without insurance (self pay)
let patient2 = {
    uhid: "UHID-2026-1045",
    name: "Savitri Devi",
    age: 68,
    gender: "Female",
    primaryDoctor: "Dr. Sunil Gupta (General Medicine)"
};

let stayDetails2 = {
    wardType: "general",
    days: 3
};

let medicalServices2 = {
    doctorVisits: [
        { doctor: "Dr. Sunil Gupta", feePerVisit: 800, count: 3 }
    ],
    medicines: [
        { name: "Antibiotic Tablets", price: 120, quantity: 10 },
        { name: "Paracetamol & Vitamins", price: 45, quantity: 6 }
    ],
    diagnosticTests: ["complete_blood_count", "liver_function"],
    surgeryCharges: 0
};

let bill2 = generateDischargeBill(patient2, stayDetails2, medicalServices2, null);
printDischargeInvoice(bill2);

// Patient 3: Deluxe private room short stay with corporate cashless insurance
let patient3 = {
    uhid: "UHID-2026-1046",
    name: "Vikas Mehra",
    age: 34,
    gender: "Male",
    primaryDoctor: "Dr. Neha Kapoor (Orthopedics)"
};

let stayDetails3 = {
    wardType: "deluxe",
    days: 2
};

let medicalServices3 = {
    doctorVisits: [
        { doctor: "Dr. Neha Kapoor", feePerVisit: 1500, count: 2 }
    ],
    medicines: [
        { name: "Pain Relief Infusion", price: 650, quantity: 3 },
        { name: "Calcium Supplements", price: 220, quantity: 2 }
    ],
    diagnosticTests: ["chest_xray", "ct_scan"],
    surgeryCharges: 12000
};

let insurancePolicy3 = {
    hasInsurance: true,
    provider: "HDFC ERGO Health",
    policyNumber: "POL-ERGO-33910",
    sumInsured: 50000,
    coPayPercent: 0,
    deductible: 0
};

let bill3 = generateDischargeBill(patient3, stayDetails3, medicalServices3, insurancePolicy3);
printDischargeInvoice(bill3);

// Generate overall hospital billing and revenue collection summary
generateHospitalDailyReport(dischargeBills);
