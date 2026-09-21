const customerName = "Shubham";
const orderId = "FDO-2026-8819";
const customerContact = "+91-98765-43210";
const deliveryAddress = "Flat 402, Sunrise Towers, Andheri West";

// Restaurant & Delivery Partner Info
const restaurantName = "The Gourmet Burger & Pizza Hub";
const restaurantRating = 4.75;
const deliveryDistanceKm = 5.4;
const deliveryPartnerName = "Deepak Verma (EV Partner)";
const deliveryPartnerRating = 4.9;
const estimatedDeliveryMinutes = 32;

// Food items
const item1Name = "Crispy Paneer Supreme Burger";
const item1Price = 199;
const item1Qty = 2;

const item2Name = "Farmhouse Cheese Burst Pizza";
const item2Price = 380;
const item2Qty = 1;

const item3Name = "Peri-Peri Seasoned Fries";
const item3Price = 129;
const item3Qty = 1;

const item4Name = "Cold Brew Iced Coffee";
const item4Price = 110;
const item4Qty = 2;

// Subtotals per item
const subtotalItem1 = item1Price * item1Qty;
const subtotalItem2 = item2Price * item2Qty;
const subtotalItem3 = item3Price * item3Qty;
const subtotalItem4 = item4Price * item4Qty;

const foodItemsTotal = subtotalItem1 + subtotalItem2 + subtotalItem3 + subtotalItem4;
const totalItemsCount = item1Qty + item2Qty + item3Qty + item4Qty;

// Optional culinary add-ons
const extraCheeseAddon = true;
const extraCheeseCharge = extraCheeseAddon ? 50 : 0;

const dipSauceAddon = true;
const dipSauceCharge = dipSauceAddon ? 30 : 0;

const totalFoodCharges = foodItemsTotal + extraCheeseCharge + dipSauceCharge;

// Membership privileges
const isGoldMember = true; // Gold members enjoy Free Delivery

// Standard Delivery Fee based on distance
let standardDeliveryFee;
if (deliveryDistanceKm <= 3.0) {
    standardDeliveryFee = 30;
} else if (deliveryDistanceKm <= 7.0) {
    standardDeliveryFee = 50;
} else {
    standardDeliveryFee = 80;
}

const finalDeliveryFee = isGoldMember ? 0 : standardDeliveryFee;

// Restaurant Packaging & Platform Fee
const packagingFee = 35;
const platformFee = 7.0;

// Monsoon / Peak rain weather fee
const isRainSurge = true;
const weatherSurgeFee = isRainSurge ? 25 : 0;

// Subtotal before tax and coupons
const taxableFoodSubtotal = totalFoodCharges + packagingFee + platformFee + finalDeliveryFee + weatherSurgeFee;

// Restaurant GST (5% - 2.5% CGST + 2.5% SGST)
const gstRate = 5;
const cgst = (totalFoodCharges * 2.5) / 100;
const sgst = (totalFoodCharges * 2.5) / 100;
const totalGst = cgst + sgst;

const orderGrossTotal = taxableFoodSubtotal + totalGst;

// Coupon code offer (e.g. 50% discount up to ₹120 on food charges)
const promoCoupon = "TASTY120";
let couponDiscount = (totalFoodCharges * 50) / 100;
if (couponDiscount > 120) {
    couponDiscount = 120;
}

// Delivery partner tip
const deliveryPartnerTip = 30;

// Final payable
const finalPayable = Math.max(0, orderGrossTotal - couponDiscount) + deliveryPartnerTip;

const paymentMethod = "UPI / GooglePay";
const orderStatus = "Food is Being Prepared";

console.log("==================================================");
console.log("             🍔 FOOD DELIVERY INVOICE");
console.log("==================================================");

console.log(`Order ID       : ${orderId}`);
console.log(`Customer       : ${customerName} (${customerContact})`);
console.log(`Delivery To    : ${deliveryAddress}`);
console.log(`Restaurant     : ${restaurantName} (⭐ ${restaurantRating})`);
console.log(`Distance       : ${deliveryDistanceKm} km`);
console.log(`Delivery Agent : ${deliveryPartnerName} (⭐ ${deliveryPartnerRating})`);
console.log(`Est. Delivery  : ~${estimatedDeliveryMinutes} Minutes`);

console.log("--------------------------------------------------");
console.log("Item Details                   Price   Qty  Subtotal");
console.log("--------------------------------------------------");
console.log(`${item1Name.padEnd(29)} ₹${item1Price.toFixed(2).padStart(6)}   ${item1Qty.toString().padStart(2)}  ₹${subtotalItem1.toFixed(2).padStart(8)}`);
console.log(`${item2Name.padEnd(29)} ₹${item2Price.toFixed(2).padStart(6)}   ${item2Qty.toString().padStart(2)}  ₹${subtotalItem2.toFixed(2).padStart(8)}`);
console.log(`${item3Name.padEnd(29)} ₹${item3Price.toFixed(2).padStart(6)}   ${item3Qty.toString().padStart(2)}  ₹${subtotalItem3.toFixed(2).padStart(8)}`);
console.log(`${item4Name.padEnd(29)} ₹${item4Price.toFixed(2).padStart(6)}   ${item4Qty.toString().padStart(2)}  ₹${subtotalItem4.toFixed(2).padStart(8)}`);

console.log("--------------------------------------------------");
console.log(`Items Total    : ${totalItemsCount} items = ₹${foodItemsTotal.toFixed(2)}`);
if (extraCheeseAddon) {
    console.log(`Extra Cheese   : ₹${extraCheeseCharge.toFixed(2)}`);
}
if (dipSauceAddon) {
    console.log(`Gourmet Dip    : ₹${dipSauceCharge.toFixed(2)}`);
}
console.log(`Packaging Fee  : ₹${packagingFee.toFixed(2)}`);
console.log(`Platform Fee   : ₹${platformFee.toFixed(2)}`);
if (isGoldMember) {
    console.log(`Delivery Fee   : FREE (Gold Member Benefit, Saved ₹${standardDeliveryFee.toFixed(2)})`);
} else {
    console.log(`Delivery Fee   : ₹${finalDeliveryFee.toFixed(2)}`);
}
if (isRainSurge) {
    console.log(`Rain Surcharge : ₹${weatherSurgeFee.toFixed(2)} (Inclement weather compensation for partner)`);
}

console.log("--------------------------------------------------");
console.log(`CGST (2.5%)    : ₹${cgst.toFixed(2)}`);
console.log(`SGST (2.5%)    : ₹${sgst.toFixed(2)}`);
console.log(`Total GST (5%) : ₹${totalGst.toFixed(2)}`);
console.log(`Gross Total    : ₹${orderGrossTotal.toFixed(2)}`);
console.log(`Promo Coupon   : -₹${couponDiscount.toFixed(2)} (${promoCoupon})`);
console.log(`Rider Tip      : ₹${deliveryPartnerTip.toFixed(2)} (100% goes to driver)`);
console.log(`FINAL PAYABLE  : ₹${finalPayable.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Order Status   : ${orderStatus}`);

console.log("==================================================");
console.log("         🎉 ORDER PLACED SUCCESSFULLY!");
console.log("          🛵 Hot & Fresh on its way!");
console.log("==================================================");

console.log(typeof customerName);
console.log(typeof orderId);
console.log(typeof deliveryDistanceKm);
console.log(typeof isGoldMember);
console.log(typeof isRainSurge);
console.log(typeof finalPayable);
console.log(typeof orderStatus);