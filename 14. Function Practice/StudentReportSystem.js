// Student Report System

console.log("========================================");
console.log("    🏫 STUDENT REPORT CARD SYSTEM");
console.log("========================================\n");

// Calculate total marks
function calculateTotalMarks(marksObj) {
    let total = 0;
    for (let subject in marksObj) {
        total += marksObj[subject];
    }
    return total;
}

// Calculate percentage
const calculatePercentage = (total, totalSubjects, maxMarksPerSubject = 100) => {
    let maxTotal = totalSubjects * maxMarksPerSubject;
    let percentage = (total / maxTotal) * 100;
    return Number(percentage.toFixed(2));
};

// Assign grade
const getGrade = function (percentage) {
    if (percentage >= 90) return "A+ (Outstanding)";
    if (percentage >= 80) return "A (Excellent)";
    if (percentage >= 70) return "B (Very Good)";
    if (percentage >= 60) return "C (Good)";
    if (percentage >= 33) return "D (Pass)";
    return "F (Fail)";
};

// Check pass or fail status
const checkPassStatus = (marksObj, passingMarks = 33) => {
    for (let subject in marksObj) {
        if (marksObj[subject] < passingMarks) {
            return {
                isPassed: false,
                failedSubject: subject
            };
        }
    }
    return {
        isPassed: true,
        failedSubject: null
    };
};

// Print report card
function printReportCard(student) {
    const subjects = Object.keys(student.marks);
    const totalMarks = calculateTotalMarks(student.marks);
    const percentage = calculatePercentage(totalMarks, subjects.length);
    const grade = getGrade(percentage);
    const status = checkPassStatus(student.marks);

    console.log("----------------------------------------");
    console.log(`📜 REPORT CARD: ${student.name.toUpperCase()}`);
    console.log(`🆔 Roll No     : ${student.rollNo}`);
    console.log("----------------------------------------");
    console.log("📚 Subject-wise Marks:");

    for (let sub of subjects) {
        console.log(`   • ${sub.padEnd(12)} : ${student.marks[sub]}/100`);
    }

    console.log("----------------------------------------");
    console.log(`🎯 Total Marks : ${totalMarks} / ${subjects.length * 100}`);
    console.log(`📊 Percentage  : ${percentage}%`);
    console.log(`🏆 Grade       : ${grade}`);

    if (status.isPassed) {
        console.log("🎉 Final Result: PASSED");
    } else {
        console.log(`❌ Final Result: FAILED (Back in ${status.failedSubject})`);
    }
    console.log("----------------------------------------\n");
}

// Find class topper
function findTopper(studentsList) {
    if (!studentsList || studentsList.length === 0) return null;

    let topper = studentsList[0];
    let highestTotal = calculateTotalMarks(topper.marks);

    for (let i = 1; i < studentsList.length; i++) {
        let currentTotal = calculateTotalMarks(studentsList[i].marks);
        if (currentTotal > highestTotal) {
            highestTotal = currentTotal;
            topper = studentsList[i];
        }
    }

    return {
        name: topper.name,
        rollNo: topper.rollNo,
        totalMarks: highestTotal,
        percentage: calculatePercentage(highestTotal, Object.keys(topper.marks).length)
    };
}

// Demo execution
const students = [
    {
        name: "Shubham",
        rollNo: 101,
        marks: { Math: 88, Physics: 82, Chemistry: 79, English: 85, Computer: 94 }
    },
    {
        name: "Rohit",
        rollNo: 102,
        marks: { Math: 45, Physics: 28, Chemistry: 55, English: 60, Computer: 50 }
    },
    {
        name: "Aman",
        rollNo: 103,
        marks: { Math: 95, Physics: 91, Chemistry: 94, English: 89, Computer: 98 }
    }
];

students.forEach((student) => {
    printReportCard(student);
});

const topper = findTopper(students);
console.log("========================================");
console.log(`🌟 CLASS TOPPER: ${topper.name} (Roll No: ${topper.rollNo})`);
console.log(`   Total Marks: ${topper.totalMarks} | Percentage: ${topper.percentage}%`);
console.log("========================================");
