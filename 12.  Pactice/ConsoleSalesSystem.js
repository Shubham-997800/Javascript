let customerName = "Shubham";
let customerCategory = "Premium";


let productCount = 3;

let product1Name = "Laptop";
let product1Price = 50000;
let product1Qty = 1;

let product2Name = "Mouse";
let product2Price = 800;
let product2Qty = 2;

let product3Name = "Keyboard";
let product3Price = 1500;
let product3Qty = 1;

let subtotal1 = product1Price * product1Qty;
let subtotal2 = product2Price * product2Qty;
let subtotal3 = product3Price * product3Qty;

let subtotal = subtotal1 + subtotal2 + subtotal3;
let discountRate;

switch (customerCategory) {
    case "Regular":
        discountRate = 5;
        break;

    case "Premium":
        discountRate = 10;
        break;

    case "VIP":
        discountRate = 15;
        break;

    default:
        discountRate = 0;
}

let discount = subtotal * discountRate / 100;
let amountAfterDiscount = subtotal - discount;

let taxRate = 18;
let tax = amountAfterDiscount * taxRate / 100;

let finalAmount = amountAfterDiscount + tax;

let paymentMethod = "UPI";

let paymentStatus;

switch (paymentMethod) {
    case "Cash":
        paymentStatus = "Paid";
        break;

    case "Card":
        paymentStatus = "Paid";
        break;

    case "UPI":
        paymentStatus = "Paid";
        break;

    default:
        paymentStatus = "Pending";
}

let orderStatus;
if (paymentStatus == "Paid") {
    orderStatus = "Paid";
}
else {
    orderStatus = "Pending";
}

let categoryMessage;

if (customerCategory == "VIP") {
    categoryMessage = "Thank you for being our VIP customer!";
}
else if (customerCategory == "Premium") {
    categoryMessage = "Thank you for being our Premium customer!";
}
else {
    categoryMessage = "Thank you for shopping with us!";
}


console.log(`
========================================
            SALES INVOICE
========================================

Customer Name     : ${customerName}
Customer Category : ${customerCategory}

----------------------------------------
Product           Price    Qty   Total
----------------------------------------

${product1Name}       ₹${product1Price}    ${product1Qty}     ₹${subtotal1}
${product2Name}        ₹${product2Price}     ${product2Qty}     ₹${subtotal2}
${product3Name}      ₹${product3Price}    ${product3Qty}     ₹${subtotal3}

----------------------------------------
Subtotal           : ₹${subtotal}
Discount (${discountRate}%)    : ₹${discount}
After Discount     : ₹${amountAfterDiscount}
Tax (${taxRate}%)         : ₹${tax}
----------------------------------------
FINAL AMOUNT       : ₹${finalAmount}
----------------------------------------

Payment Method     : ${paymentMethod}
Payment Status     : ${paymentStatus}
Order Status       : ${orderStatus}

${categoryMessage}

========================================
        THANK YOU FOR SHOPPING!
========================================
`);