// 1. switch :- `switch` multiple exact - value cases ko handle karne ke liye useful hai.

// Syntax:- 
// switch (value) {
//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
// }

// Example :- 

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// 2. case :- `case` define karta hai ki kis value par kaunsa code execute hoga.

let role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("User access");
        break;
}

// 3. default :- Agar koi `case` match nahi karta, `default` execute hota hai.

let day = 10;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
// -> `default` basically `switch` ka fallback hai.

// 4. break :- `break` current `switch` ko stop karta hai.

// Without`break` :-  

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");
}

// -> Because execution next cases mein ** fall through ** kar sakta hai.

// With`break`
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
}

// 5. String Matching :- Strings bhi use kar sakte hain.

let color = "red";

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;
}

// 6. Multiple Cases :- Ye tumhare syllabus ka important topic hai.Kabhi-kabhi **multiple values ka same result** hota hai.

// Example:

let day = 6;

switch (day) {

    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}

// 7. Multiple String Cases

let role = "manager";

switch (role) {

    case "admin":
    case "manager":
        console.log("High level access");
        break;

    case "sales":
    case "user":
        console.log("Standard access");
        break;

    case "guest":
        console.log("Guest access");
        break;

    default:
        console.log("Unknown role");
}