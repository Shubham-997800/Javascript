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

// Helper to determine subject grade and grade points based on percentage (out of 150)
function getSubjectGrade(totalMarks) {
    const pct = (totalMarks * 100) / 150;
    if (pct >= 90) return { grade: "O", points: 10.0 };
    if (pct >= 80) return { grade: "A+", points: 9.0 };
    if (pct >= 70) return { grade: "A", points: 8.0 };
    if (pct >= 60) return { grade: "B+", points: 7.0 };
    if (pct >= 50) return { grade: "B", points: 6.0 };
    if (pct >= 40) return { grade: "C", points: 5.0 };
    return { grade: "F", points: 0.0 };
}

const g1 = getSubjectGrade(sub1Total);
const g2 = getSubjectGrade(sub2Total);
const g3 = getSubjectGrade(sub3Total);
const g4 = getSubjectGrade(sub4Total);
const g5 = getSubjectGrade(sub5Total);
const g6 = getSubjectGrade(sub6Total);

// Passing criteria: Min 40% in Theory (40/100), Min 40% in Lab (20/50), and Min 40% in Total (60/150)
const minTheoryPass = 40;
const minLabPass = 20;
const minTotalPass = 60;

function checkPass(theory, lab, total) {
    return theory >= minTheoryPass && lab >= minLabPass && total >= minTotalPass;
}

const sub1Passed = checkPass(sub1Theory, sub1Lab, sub1Total);
const sub2Passed = checkPass(sub2Theory, sub2Lab, sub2Total);
const sub3Passed = checkPass(sub3Theory, sub3Lab, sub3Total);
const sub4Passed = checkPass(sub4Theory, sub4Lab, sub4Total);
const sub5Passed = checkPass(sub5Theory, sub5Lab, sub5Total);
const sub6Passed = checkPass(sub6Theory, sub6Lab, sub6Total);

const hasPassedAllSubjects = sub1Passed && sub2Passed && sub3Passed && sub4Passed && sub5Passed && sub6Passed;

// SGPA calculation as the arithmetic mean of course grade points
const calculatedSGPA = (g1.points + g2.points + g3.points + g4.points + g5.points + g6.points) / 6;

// Overall letter grade based on overall percentage
let overallGrade;
if (overallPercentage >= 90) {
    overallGrade = "O (Outstanding)";
} else if (overallPercentage >= 80) {
    overallGrade = "A+ (Excellent)";
} else if (overallPercentage >= 70) {
    overallGrade = "A (Very Good)";
} else if (overallPercentage >= 60) {
    overallGrade = "B+ (Good)";
} else if (overallPercentage >= 50) {
    overallGrade = "B (Above Average)";
} else if (overallPercentage >= 40) {
    overallGrade = "C (Pass)";
} else {
    overallGrade = "F (Fail)";
}

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

// Course analytics: Highest & Lowest scoring subjects
const subjects = [
    { name: sub1Name, total: sub1Total },
    { name: sub2Name, total: sub2Total },
    { name: sub3Name, total: sub3Total },
    { name: sub4Name, total: sub4Total },
    { name: sub5Name, total: sub5Total },
    { name: sub6Name, total: sub6Total }
];

let highestSubject = subjects[0];
let lowestSubject = subjects[0];
for (const sub of subjects) {
    if (sub.total > highestSubject.total) highestSubject = sub;
    if (sub.total < lowestSubject.total) lowestSubject = sub;
}

// AICTE/CBSE standard formula for SGPA to percentage equivalent
const sgpaEquivalentPercentage = (calculatedSGPA * 9.5).toFixed(2);

console.log("========================================================================");
console.log("                🎓 ACADEMIC PERFORMANCE GRADE SHEET");
console.log("========================================================================");

console.log(`Institution    : ${universityName}`);
console.log(`Program        : ${academicProgram}`);
console.log(`Student Name   : ${studentName}`);
console.log(`Roll Number    : ${rollNumber}`);
console.log(`Semester/Year  : ${currentSemester} (${academicSession})`);
console.log(`Attendance     : ${attendancePercentage}% (Eligibility: Satisfactory)`);

console.log("------------------------------------------------------------------------");
console.log("Subject Name                 Theory(100)  Lab(50)  Total(150) Grade  Result");
console.log("------------------------------------------------------------------------");

console.log(`${sub1Name.padEnd(28)} ${sub1Theory.toString().padStart(6)}      ${sub1Lab.toString().padStart(5)}     ${sub1Total.toString().padStart(6)}     ${g1.grade.padEnd(4)}  ${sub1Passed ? "PASS" : "FAIL"}`);
console.log(`${sub2Name.padEnd(28)} ${sub2Theory.toString().padStart(6)}      ${sub2Lab.toString().padStart(5)}     ${sub2Total.toString().padStart(6)}     ${g2.grade.padEnd(4)}  ${sub2Passed ? "PASS" : "FAIL"}`);
console.log(`${sub3Name.padEnd(28)} ${sub3Theory.toString().padStart(6)}      ${sub3Lab.toString().padStart(5)}     ${sub3Total.toString().padStart(6)}     ${g3.grade.padEnd(4)}  ${sub3Passed ? "PASS" : "FAIL"}`);
console.log(`${sub4Name.padEnd(28)} ${sub4Theory.toString().padStart(6)}      ${sub4Lab.toString().padStart(5)}     ${sub4Total.toString().padStart(6)}     ${g4.grade.padEnd(4)}  ${sub4Passed ? "PASS" : "FAIL"}`);
console.log(`${sub5Name.padEnd(28)} ${sub5Theory.toString().padStart(6)}      ${sub5Lab.toString().padStart(5)}     ${sub5Total.toString().padStart(6)}     ${g5.grade.padEnd(4)}  ${sub5Passed ? "PASS" : "FAIL"}`);
console.log(`${sub6Name.padEnd(28)} ${sub6Theory.toString().padStart(6)}      ${sub6Lab.toString().padStart(5)}     ${sub6Total.toString().padStart(6)}     ${g6.grade.padEnd(4)}  ${sub6Passed ? "PASS" : "FAIL"}`);

console.log("------------------------------------------------------------------------");
console.log(`Total Score    : ${totalMarksObtained} / ${maxPossibleMarks} Marks`);
console.log(`Percentage     : ${overallPercentage.toFixed(2)}%`);
console.log(`Grade Awarded  : ${overallGrade}`);
console.log(`Cumulative SGPA: ${calculatedSGPA.toFixed(2)} / 10.0 (Equiv: ~${sgpaEquivalentPercentage}%)`);
console.log(`Division       : ${divisionAwarded}`);
console.log(`Top Subject    : ${highestSubject.name} (${highestSubject.total}/150)`);
console.log(`Lowest Subject : ${lowestSubject.name} (${lowestSubject.total}/150)`);
console.log(`Final Result   : ${resultStatus}`);

if (isDeanListEligible) {
    console.log("Honors Status  : 🏆 DEAN'S MERIT LIST HONORS HOLDER");
}

console.log("========================================================================");
console.log("             📜 CONGRATULATIONS ON YOUR HARD WORK!");
console.log("         Issued by Controller of Examinations, AIET");
console.log("========================================================================");
console.log("             🔍 DATA TYPE AUDIT INSPECTION");
console.log("------------------------------------------------------------------------");
console.log(`studentName        : ${typeof studentName} ("${studentName}")`);
console.log(`rollNumber         : ${typeof rollNumber} ("${rollNumber}")`);
console.log(`totalMarksObtained : ${typeof totalMarksObtained} (${totalMarksObtained})`);
console.log(`overallPercentage  : ${typeof overallPercentage} (${overallPercentage.toFixed(2)}%)`);
console.log(`isDeanListEligible : ${typeof isDeanListEligible} (${isDeanListEligible})`);
console.log(`resultStatus       : ${typeof resultStatus} ("${resultStatus}")`);