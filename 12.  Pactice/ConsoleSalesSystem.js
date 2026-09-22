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

let discount = (subtotal * discountRate) / 100;
let amountAfterDiscount = subtotal - discount;

let taxRate = 18;
let tax = (amountAfterDiscount * taxRate) / 100;

let finalAmount = amountAfterDiscount + tax;

let paymentMethod = "UPI";
let paymentStatus = "Paid";
let orderStatus = "Confirmed";

let categoryMessage;
if (customerCategory === "VIP") {
    categoryMessage = "Thank you for being our VIP customer!";
} else if (customerCategory === "Premium") {
    categoryMessage = "Thank you for being our Premium customer!";
} else {
    categoryMessage = "Thank you for shopping with us!";
}

console.log("========================================");
console.log("            SALES INVOICE");
console.log("========================================");

console.log(`Customer Name     : ${customerName}`);
console.log(`Customer Category : ${customerCategory}`);

console.log("----------------------------------------");
console.log("Product           Price    Qty   Total");
console.log("----------------------------------------");
console.log(`${product1Name}            ₹${product1Price}   ${product1Qty}     ₹${subtotal1}`);
console.log(`${product2Name}             ₹${product2Price}     ${product2Qty}     ₹${subtotal2}`);
console.log(`${product3Name}          ₹${product3Price}    ${product3Qty}     ₹${subtotal3}`);

console.log("----------------------------------------");
console.log(`Subtotal          : ₹${subtotal}`);
console.log(`Discount (${discountRate}%)   : ₹${discount}`);
console.log(`After Discount    : ₹${amountAfterDiscount}`);
console.log(`Tax (${taxRate}%)        : ₹${tax}`);
console.log("----------------------------------------");
console.log(`FINAL AMOUNT      : ₹${finalAmount}`);
console.log("----------------------------------------");

console.log(`Payment Method    : ${paymentMethod}`);
console.log(`Payment Status    : ${paymentStatus}`);
console.log(`Order Status      : ${orderStatus}`);

console.log(`\n${categoryMessage}`);

console.log("========================================");
console.log("        THANK YOU FOR SHOPPING!");
console.log("========================================");

console.log(typeof customerName);
console.log(typeof product1Price);
console.log(typeof subtotal);
console.log(typeof finalAmount);