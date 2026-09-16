let i, ECount = 0, OCount = 0;
let sum = 0;
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`${i} Even`); ECount++;
    }
    else {
        console.log(`${i} Odd`); OCount++;
    }
    sum += i;
}

for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`\n${i} Divisble By 3 And 5`);
    }
    else if (i % 3 == 0) {
        console.log(`\n${i} Divisble By 3`);
    }
    else if (i % 5 == 0) {
        console.log(`\n${i} Divisble By 5`);
    }
    else {
        console.log('\nNot Divisble By 3 And 5');
    }
}

console.log(`\nSum :- ${sum}`);
console.log(`Total Even No :- ${ECount} \nTotal Odd No :- ${OCount}`)