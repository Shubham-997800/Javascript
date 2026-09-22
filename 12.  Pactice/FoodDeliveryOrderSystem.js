const customerName = "Shubham";
const restaurantName = "Burger House";

const burgerPrice = 180;
const burgerQuantity = 2;

const pizzaPrice = 250;
const pizzaQuantity = 1;

const coldDrinkPrice = 60;
const coldDrinkQuantity = 2;

const deliveryFee = 40;
const packagingFee = 20;

const burgerTotal = burgerPrice * burgerQuantity;
const pizzaTotal = pizzaPrice * pizzaQuantity;
const coldDrinkTotal = coldDrinkPrice * coldDrinkQuantity;

const foodTotal = burgerTotal + pizzaTotal + coldDrinkTotal;

const subtotal = foodTotal + packagingFee + deliveryFee;

const discount = 50;
const finalAmount = subtotal - discount;

const isMember = true;
const isPaid = true;

const paymentMethod = "UPI";
const orderStatus = "Confirmed";

console.log("========================================");
console.log("        🍔 FOOD DELIVERY ORDER");
console.log("========================================");

console.log(`Customer       : ${customerName}`);
console.log(`Restaurant     : ${restaurantName}`);

console.log("----------------------------------------");

console.log(`Burger         : ${burgerQuantity} × ₹${burgerPrice}`);
console.log(`Burger Total   : ₹${burgerTotal}`);

console.log(`Pizza          : ${pizzaQuantity} × ₹${pizzaPrice}`);
console.log(`Pizza Total    : ₹${pizzaTotal}`);

console.log(`Cold Drink     : ${coldDrinkQuantity} × ₹${coldDrinkPrice}`);
console.log(`Drink Total    : ₹${coldDrinkTotal}`);

console.log("----------------------------------------");

console.log(`Food Total     : ₹${foodTotal}`);
console.log(`Packaging Fee  : ₹${packagingFee}`);
console.log(`Delivery Fee   : ₹${deliveryFee}`);

console.log("----------------------------------------");

console.log(`Subtotal       : ₹${subtotal}`);
console.log(`Discount       : ₹${discount}`);
console.log(`Final Amount   : ₹${finalAmount}`);

console.log("----------------------------------------");

console.log(`Member         : ${isMember}`);
console.log(`Paid           : ${isPaid}`);
console.log(`Payment        : ${paymentMethod}`);
console.log(`Order Status   : ${orderStatus}`);

console.log("========================================");
console.log("       🎉 ORDER PLACED SUCCESSFULLY!");
console.log("       🍔 Your food is on the way!");
console.log("========================================");

console.log(typeof customerName);
console.log(typeof burgerPrice);
console.log(typeof burgerQuantity);
console.log(typeof isMember);
console.log(typeof paymentMethod);
console.log(typeof finalAmount);