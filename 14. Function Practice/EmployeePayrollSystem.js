// Employee Payroll Management System using Functions

console.log("========================================");
console.log("   💼 EMPLOYEE PAYROLL MANAGEMENT SYSTEM");
console.log("========================================\n");

// House Rent Allowance (20% of basic)
const calculateHRA = (basic) => basic * 0.20;

// Dearness Allowance (10% of basic)
const calculateDA = (basic) => basic * 0.10;

// Provident Fund (12% of basic)
const calculatePF = (basic) => basic * 0.12;

// Calculate income tax deduction based on gross earnings
function calculateIncomeTax(grossEarnings) {
    if (grossEarnings <= 30000) {
        return 0;
    } else if (grossEarnings <= 60000) {
        return (grossEarnings - 30000) * 0.05;
    } else {
        return (30000 * 0.05) + ((grossEarnings - 60000) * 0.10);
    }
}

// Calculate salary based on attendance
function calculateAttendanceAdjustedBasic(basic, totalDays, attendedDays) {
    if (totalDays <= 0 || attendedDays <= 0) return 0;
    if (attendedDays >= totalDays) return basic;
    let perDaySalary = basic / totalDays;
    return Number((perDaySalary * attendedDays).toFixed(2));
}

// Generate comprehensive salary slip for an employee
function generateSalarySlip(employee, totalMonthDays, attendedDays) {
    let adjustedBasic = calculateAttendanceAdjustedBasic(employee.basicSalary, totalMonthDays, attendedDays);
    let hra = calculateHRA(adjustedBasic);
    let da = calculateDA(adjustedBasic);
    let specialAllowance = employee.specialAllowance || 0;
    let grossSalary = adjustedBasic + hra + da + specialAllowance;

    let pf = calculatePF(adjustedBasic);
    let professionalTax = grossSalary > 15000 ? 200 : 0;
    let incomeTax = calculateIncomeTax(grossSalary);
    let totalDeductions = pf + professionalTax + incomeTax;

    let netSalary = grossSalary - totalDeductions;

    console.log("----------------------------------------");
    console.log(`📄 SALARY SLIP FOR: ${employee.name.toUpperCase()}`);
    console.log(`🆔 ID: ${employee.id} | Role: ${employee.designation}`);
    console.log(`📅 Attendance: ${attendedDays}/${totalMonthDays} Days`);
    console.log("----------------------------------------");
    console.log("EARNINGS:");
    console.log(`  • Basic Salary (Earned) : ₹${adjustedBasic.toFixed(2)}`);
    console.log(`  • HRA (20%)             : ₹${hra.toFixed(2)}`);
    console.log(`  • DA (10%)              : ₹${da.toFixed(2)}`);
    console.log(`  • Special Allowance     : ₹${specialAllowance.toFixed(2)}`);
    console.log(`  --------------------------------------`);
    console.log(`  💰 Gross Salary         : ₹${grossSalary.toFixed(2)}`);
    console.log("\nDEDUCTIONS:");
    console.log(`  • Provident Fund (12%)  : ₹${pf.toFixed(2)}`);
    console.log(`  • Professional Tax      : ₹${professionalTax.toFixed(2)}`);
    console.log(`  • Income Tax (TDS)      : ₹${incomeTax.toFixed(2)}`);
    console.log(`  --------------------------------------`);
    console.log(`  📉 Total Deductions     : ₹${totalDeductions.toFixed(2)}`);
    console.log("----------------------------------------");
    console.log(`💵 NET PAYABLE SALARY     : ₹${netSalary.toFixed(2)}`);
    console.log("----------------------------------------\n");

    return {
        id: employee.id,
        name: employee.name,
        gross: grossSalary,
        deductions: totalDeductions,
        net: netSalary
    };
}

// Generate department payroll summary
function generateDepartmentSummary(employeeRecords, totalMonthDays) {
    let totalGrossDisbursed = 0;
    let totalNetDisbursed = 0;
    let totalTaxCollected = 0;

    console.log("========================================");
    console.log("      🏢 MONTHLY PAYROLL SUMMARY");
    console.log("========================================");

    employeeRecords.forEach((record) => {
        let slip = generateSalarySlip(record.employee, totalMonthDays, record.attendedDays);
        totalGrossDisbursed += slip.gross;
        totalNetDisbursed += slip.net;
        totalTaxCollected += slip.deductions;
    });

    console.log("========================================");
    console.log("        COMPANY PAYROLL TOTALS");
    console.log("========================================");
    console.log(`Total Employees Processed : ${employeeRecords.length}`);
    console.log(`Total Gross Salary Amount : ₹${totalGrossDisbursed.toFixed(2)}`);
    console.log(`Total Deductions / Taxes  : ₹${totalTaxCollected.toFixed(2)}`);
    console.log(`Total Net Disbursed       : ₹${totalNetDisbursed.toFixed(2)}`);
    console.log("========================================\n");
}

// Employee sample records
let employees = [
    {
        employee: {
            id: "EMP-101",
            name: "Shubham Sharma",
            designation: "Full Stack Developer",
            basicSalary: 45000,
            specialAllowance: 5000
        },
        attendedDays: 26
    },
    {
        employee: {
            id: "EMP-102",
            name: "Aman Verma",
            designation: "UI/UX Designer",
            basicSalary: 35000,
            specialAllowance: 3000
        },
        attendedDays: 24
    },
    {
        employee: {
            id: "EMP-103",
            name: "Rohit Patel",
            designation: "QA Engineer",
            basicSalary: 28000,
            specialAllowance: 2000
        },
        attendedDays: 22
    }
];

// Run payroll for the month (26 working days)
generateDepartmentSummary(employees, 26);
