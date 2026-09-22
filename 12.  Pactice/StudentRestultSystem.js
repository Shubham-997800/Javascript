let studentName = "Shubham";
let rollNo = 101;

let sub1 = 82; // Hindi
let sub2 = 75; // English
let sub3 = 88; // Maths
let sub4 = 68; // Science
let sub5 = 92; // Computer

console.log("========================================");
console.log("       🎓 STUDENT RESULT SYSTEM");
console.log("========================================");

console.log(`Student Name : ${studentName}`);
console.log(`Roll Number  : ${rollNo}`);

console.log("----------------------------------------");
console.log(`Hindi        : ${sub1}`);
console.log(`English      : ${sub2}`);
console.log(`Maths        : ${sub3}`);
console.log(`Science      : ${sub4}`);
console.log(`Computer     : ${sub5}`);

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let per = (total * 100) / 500;

console.log("----------------------------------------");
console.log(`Total Marks  : ${total} / 500`);
console.log(`Percentage   : ${per.toFixed(2)}%`);

let grade;
if (per >= 90) {
    grade = "A+";
} else if (per >= 80) {
    grade = "A";
} else if (per >= 70) {
    grade = "B";
} else if (per >= 60) {
    grade = "C";
} else if (per >= 50) {
    grade = "D";
} else if (per >= 33) {
    grade = "E";
} else {
    grade = "F";
}

console.log(`Grade        : ${grade}`);

let result;
if (sub1 >= 33 && sub2 >= 33 && sub3 >= 33 && sub4 >= 33 && sub5 >= 33) {
    result = "PASS";
} else {
    result = "FAIL";
}

console.log(`Result       : ${result}`);

console.log("========================================");

console.log(typeof studentName);
console.log(typeof rollNo);
console.log(typeof total);
console.log(typeof per);
console.log(typeof grade);
console.log(typeof result);