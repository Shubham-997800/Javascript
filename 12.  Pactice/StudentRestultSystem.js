let sub1 = 11, sub2 = 56, sub3 = 91;

console.log(`Subject 1 :- ${sub1} \nSubject 2 :- ${sub2} \nSubject 3 :- ${sub3}`);

let total = sub1 + sub2 + sub3;
console.log(`\nTotal Marks :- ${total}`);

let per = (total * 100) / 300;
console.log(`Percentage :- ${per.toFixed(2)}%`);

let Grade;

if (per >= 90) {
    Grade = 'A';
}
else if (per >= 80) {
    Grade = 'B';
}
else if (per >= 70) {
    Grade = 'C';
}
else if (per >= 60) {
    Grade = 'D';
}
else if (per >= 50) {
    Grade = 'E';
}
else {
    Grade = 'F';
}

console.log(`Grade :- ${Grade}`);

let Result;

if (sub1 >= 33 && sub2 >= 33 && sub3 >= 33) {
    Result = 'PASS';
}
else {
    Result = 'FAIL';
}

console.log(`Result :- ${Result}`);