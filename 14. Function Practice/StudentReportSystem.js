// ==========================================
// 🎓 STUDENT REPORT & GRADING SYSTEM USING FUNCTIONS
// ==========================================
// Is program mein functions ke alag-alag types aur concepts ka use kiya gaya hai:
// 1. Function Declaration
// 2. Arrow Functions
// 3. Parameters aur Default Parameters
// 4. Return Values
// 5. Reusable Helper Functions
// ==========================================

console.log("========================================");
console.log("    🏫 STUDENT REPORT CARD SYSTEM");
console.log("========================================\n");

// ------------------------------------------
// Function 1: Total Marks Calculate karna (Function Declaration)
// Parameter: marksObj (har subject ke marks ka object)
// Return: total marks (Number)
// ------------------------------------------
function calculateTotalMarks(marksObj) {
    let total = 0;
    for (let subject in marksObj) {
        total += marksObj[subject];
    }
    return total;
}

// ------------------------------------------
// Function 2: Percentage Calculate karna (Arrow Function)
// Parameters: total, totalSubjects, maxMarksPerSubject (default = 100)
// Return: percentage (Number rounded to 2 decimal places)
// ------------------------------------------
const calculatePercentage = (total, totalSubjects, maxMarksPerSubject = 100) => {
    let maxTotal = totalSubjects * maxMarksPerSubject;
    let percentage = (total / maxTotal) * 100;
    return Number(percentage.toFixed(2));
};

// ------------------------------------------
// Function 3: Grade Assign karna (Function Expression)
// Parameter: percentage
// Return: Grade string ("A+", "A", "B", "C", "D", "Fail")
// ------------------------------------------
const getGrade = function (percentage) {
    if (percentage >= 90) return "A+ (Outstanding)";
    if (percentage >= 80) return "A (Excellent)";
    if (percentage >= 70) return "B (Very Good)";
    if (percentage >= 60) return "C (Good)";
    if (percentage >= 33) return "D (Pass)";
    return "F (Fail)";
};

// ------------------------------------------
// Function 4: Pass / Fail status check karna (Arrow Function)
// Rule: Agar kisi bhi subject me 33 se kam marks hain to fail
// ------------------------------------------
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

// ------------------------------------------
// Function 5: Complete Report Card Print karna
// Parameter: student object { name, rollNo, marks }
// ------------------------------------------
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

// ------------------------------------------
// Function 6: Class Topper find karna (Function taking Array of Students)
// ------------------------------------------
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


// ==========================================
// 🚀 DEMO / EXECUTION TEST
// ==========================================

// Students ka sample data
const students = [
    {
        name: "Shubham",
        rollNo: 101,
        marks: { Math: 88, Physics: 82, Chemistry: 79, English: 85, Computer: 94 }
    },
    {
        name: "Rohit",
        rollNo: 102,
        marks: { Math: 45, Physics: 28, Chemistry: 55, English: 60, Computer: 50 } // Physics me fail
    },
    {
        name: "Aman",
        rollNo: 103,
        marks: { Math: 95, Physics: 91, Chemistry: 94, English: 89, Computer: 98 }
    }
];

// Sabhi students ka Report Card print karte hain
students.forEach((student) => {
    printReportCard(student);
});

// Topper ki details
const topper = findTopper(students);
console.log("========================================");
console.log(`🌟 CLASS TOPPER: ${topper.name} (Roll No: ${topper.rollNo})`);
console.log(`   Total Marks: ${topper.totalMarks} | Percentage: ${topper.percentage}%`);
console.log("========================================");
