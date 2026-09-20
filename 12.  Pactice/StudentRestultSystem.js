const studentName = "Shubham";
const rollNumber = "CS-2026-0418";
const universityName = "Apex Institute of Engineering & Technology";
const academicProgram = "B.Tech in Computer Science & Engineering";
const currentSemester = "6th Semester";
const academicSession = "2025 - 2026";
const attendancePercentage = 89.5;

// Subject Marks Breakdown (Theory Max: 100, Lab/Internal Max: 50 | Total: 150 each)
const sub1Name = "Data Structures & Algorithms";
const sub1Theory = 88;
const sub1Lab = 46;
const sub1Total = sub1Theory + sub1Lab;

const sub2Name = "Full Stack Web & JS";
const sub2Theory = 95;
const sub2Lab = 48;
const sub2Total = sub2Theory + sub2Lab;

const sub3Name = "Database Management Systems";
const sub3Theory = 84;
const sub3Lab = 42;
const sub3Total = sub3Theory + sub3Lab;

const sub4Name = "Computer Networks";
const sub4Theory = 78;
const sub4Lab = 40;
const sub4Total = sub4Theory + sub4Lab;

const sub5Name = "Cloud Computing & DevOps";
const sub5Theory = 91;
const sub5Lab = 47;
const sub5Total = sub5Theory + sub5Lab;

const sub6Name = "Artificial Intelligence";
const sub6Theory = 87;
const sub6Lab = 44;
const sub6Total = sub6Theory + sub6Lab;

// Aggregates
const totalMarksObtained = sub1Total + sub2Total + sub3Total + sub4Total + sub5Total + sub6Total;
const maxPossibleMarks = 150 * 6; // 900

const overallPercentage = (totalMarksObtained * 100) / maxPossibleMarks;

// Letter grade and 10-point scale SGPA determination
let overallGrade;
let gradePoints;

if (overallPercentage >= 90) {
    overallGrade = "O (Outstanding)";
    gradePoints = 10.0;
} else if (overallPercentage >= 80) {
    overallGrade = "A+ (Excellent)";
    gradePoints = 9.0;
} else if (overallPercentage >= 70) {
    overallGrade = "A (Very Good)";
    gradePoints = 8.0;
} else if (overallPercentage >= 60) {
    overallGrade = "B+ (Good)";
    gradePoints = 7.0;
} else if (overallPercentage >= 50) {
    overallGrade = "B (Above Average)";
    gradePoints = 6.0;
} else if (overallPercentage >= 40) {
    overallGrade = "C (Pass)";
    gradePoints = 5.0;
} else {
    overallGrade = "F (Fail)";
    gradePoints = 0.0;
}

// Pass/Fail criteria: Min 40% in each subject (60 out of 150)
const minPassingMarks = 60;
const hasPassedAllSubjects = (
    sub1Total >= minPassingMarks &&
    sub2Total >= minPassingMarks &&
    sub3Total >= minPassingMarks &&
    sub4Total >= minPassingMarks &&
    sub5Total >= minPassingMarks &&
    sub6Total >= minPassingMarks
);

let resultStatus;
let divisionAwarded;

if (hasPassedAllSubjects) {
    resultStatus = "PASSED";
    if (overallPercentage >= 75) {
        divisionAwarded = "First Class with Distinction";
    } else if (overallPercentage >= 60) {
        divisionAwarded = "First Class";
    } else if (overallPercentage >= 50) {
        divisionAwarded = "Second Class";
    } else {
        divisionAwarded = "Pass Division";
    }
} else {
    resultStatus = "FAILED (Needs Re-appear)";
    divisionAwarded = "N/A";
}

// Dean's Honors List Qualification
const isDeanListEligible = hasPassedAllSubjects && (overallPercentage >= 85) && (attendancePercentage >= 85);

console.log("==================================================================");
console.log("            🎓 ACADEMIC PERFORMANCE GRADE SHEET");
console.log("==================================================================");

console.log(`Institution    : ${universityName}`);
console.log(`Program        : ${academicProgram}`);
console.log(`Student Name   : ${studentName}`);
console.log(`Roll Number    : ${rollNumber}`);
console.log(`Semester/Year  : ${currentSemester} (${academicSession})`);
console.log(`Attendance     : ${attendancePercentage}% (Eligibility: Satisfactory)`);

console.log("------------------------------------------------------------------");
console.log("Subject Name                 Theory(100)  Lab(50)  Total(150)  Result");
console.log("------------------------------------------------------------------");

console.log(`${sub1Name.padEnd(28)} ${sub1Theory.toString().padStart(6)}      ${sub1Lab.toString().padStart(5)}     ${sub1Total.toString().padStart(6)}      ${sub1Total >= minPassingMarks ? "PASS" : "FAIL"}`);
console.log(`${sub2Name.padEnd(28)} ${sub2Theory.toString().padStart(6)}      ${sub2Lab.toString().padStart(5)}     ${sub2Total.toString().padStart(6)}      ${sub2Total >= minPassingMarks ? "PASS" : "FAIL"}`);
console.log(`${sub3Name.padEnd(28)} ${sub3Theory.toString().padStart(6)}      ${sub3Lab.toString().padStart(5)}     ${sub3Total.toString().padStart(6)}      ${sub3Total >= minPassingMarks ? "PASS" : "FAIL"}`);
console.log(`${sub4Name.padEnd(28)} ${sub4Theory.toString().padStart(6)}      ${sub4Lab.toString().padStart(5)}     ${sub4Total.toString().padStart(6)}      ${sub4Total >= minPassingMarks ? "PASS" : "FAIL"}`);
console.log(`${sub5Name.padEnd(28)} ${sub5Theory.toString().padStart(6)}      ${sub5Lab.toString().padStart(5)}     ${sub5Total.toString().padStart(6)}      ${sub5Total >= minPassingMarks ? "PASS" : "FAIL"}`);
console.log(`${sub6Name.padEnd(28)} ${sub6Theory.toString().padStart(6)}      ${sub6Lab.toString().padStart(5)}     ${sub6Total.toString().padStart(6)}      ${sub6Total >= minPassingMarks ? "PASS" : "FAIL"}`);

console.log("------------------------------------------------------------------");
console.log(`Total Score    : ${totalMarksObtained} / ${maxPossibleMarks} Marks`);
console.log(`Percentage     : ${overallPercentage.toFixed(2)}%`);
console.log(`Grade Awarded  : ${overallGrade}`);
console.log(`Estimated SGPA : ${gradePoints.toFixed(2)} / 10.0`);
console.log(`Division       : ${divisionAwarded}`);
console.log(`Final Result   : ${resultStatus}`);

if (isDeanListEligible) {
    console.log("Honors Status  : 🏆 DEAN'S MERIT LIST HONORS HOLDER");
}

console.log("==================================================================");
console.log("         📜 CONGRATULATIONS ON YOUR HARD WORK!");
console.log("     Issued by Controller of Examinations, AIET");
console.log("==================================================================");

console.log(typeof studentName);
console.log(typeof rollNumber);
console.log(typeof totalMarksObtained);
console.log(typeof overallPercentage);
console.log(typeof isDeanListEligible);
console.log(typeof resultStatus);