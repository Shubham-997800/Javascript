const invoiceNumber = "INV-2026-6084";
const storeName = "ElectroTech Mega Store";
const storeBranch = "Mumbai Central Flagship";
const cashierName = "Vikram Singh";

const customerName = "Shubham";
const customerId = "CUST-9978";
const customerCategory = "VIP"; // Regular, Silver, Gold, Premium, VIP

// Product Items
const item1Name = "Pro Gaming Laptop 16\"";
const item1Price = 85000;
const item1Qty = 1;

const item2Name = "Wireless Gaming Mouse";
const item2Price = 2400;
const item2Qty = 2;

const item3Name = "RGB Mechanical Keyboard";
const item3Price = 4500;
const item3Qty = 1;

const item4Name = "Type-C Fast Charger 100W";
const item4Price = 1800;
const item4Qty = 2;

// Subtotals per item
const subtotal1 = item1Price * item1Qty;
const subtotal2 = item2Price * item2Qty;
const subtotal3 = item3Price * item3Qty;
const subtotal4 = item4Price * item4Qty;

const grossItemsTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;
const totalQuantity = item1Qty + item2Qty + item3Qty + item4Qty;

// Addon Warranty & Device Care Protection
const includeExtendedWarranty = true;
const warrantyCharge = includeExtendedWarranty ? 2499 : 0;

// Delivery option
const deliveryOption = "Express Delivery"; // Store Pickup, Standard Delivery, Express Delivery
let shippingFee;
switch (deliveryOption) {
    case "Store Pickup":
        shippingFee = 0;
        break;
    case "Standard Delivery":
        shippingFee = 150;
        break;
    case "Express Delivery":
        shippingFee = 350;
        break;
    default:
        shippingFee = 0;
}

// Membership Tier Discount
let membershipDiscountPercent;
switch (customerCategory) {
    case "Regular":
        membershipDiscountPercent = 2;
        break;
    case "Silver":
        membershipDiscountPercent = 5;
        break;
    case "Gold":
        membershipDiscountPercent = 8;
        break;
    case "Premium":
        membershipDiscountPercent = 12;
        break;
    case "VIP":
        membershipDiscountPercent = 18;
        break;
    default:
        membershipDiscountPercent = 0;
}

const membershipDiscount = (grossItemsTotal * membershipDiscountPercent) / 100;

// High-Value Order / Mega Sale Bonus Discount (if items total >= 50000)
let bulkPurchaseDiscount = 0;
if (grossItemsTotal >= 75000) {
    bulkPurchaseDiscount = 2000;
} else if (grossItemsTotal >= 50000) {
    bulkPurchaseDiscount = 1000;
}

const totalDiscount = membershipDiscount + bulkPurchaseDiscount;
const discountedProductsAmount = grossItemsTotal - totalDiscount;

// Taxable subtotal (discounted products + warranty + shipping)
const taxableSubtotal = discountedProductsAmount + warrantyCharge + shippingFee;

// GST 18% (9% CGST + 9% SGST)
const gstRate = 18;
const cgstAmount = (taxableSubtotal * 9) / 100;
const sgstAmount = (taxableSubtotal * 9) / 100;
const totalGst = cgstAmount + sgstAmount;

const netPayableBeforePromo = taxableSubtotal + totalGst;

// Instant UPI / Festival Cashback Coupon
const promoCouponCode = "TECHBONUS500";
const promoDiscount = 500;
const finalAmount = netPayableBeforePromo - promoDiscount;

// Reward points calculation (1 point per ₹100 spent on taxable amount)
const rewardPointsEarned = Math.floor(taxableSubtotal / 100);

const paymentMethod = "UPI";
const paymentStatus = "Paid";
const orderStatus = "Completed - Dispatched";

let categoryMessage;
switch (customerCategory) {
    case "VIP":
        categoryMessage = "🌟 Thank you for being our esteemed VIP customer! Dedicated 24/7 Priority Support is active.";
        break;
    case "Premium":
        categoryMessage = "💎 Thank you for being our valued Premium member! You get priority warranty coverage.";
        break;
    case "Gold":
        categoryMessage = "🥇 Thank you for being our Gold member! Enjoy exclusive early sale access.";
        break;
    default:
        categoryMessage = "🤝 Thank you for shopping with ElectroTech! Have a wonderful day.";
}

console.log("==========================================================");
console.log("             🖥️ ELECTROTECH MEGA STORE INVOICE");
console.log("==========================================================");

console.log(`Invoice No      : ${invoiceNumber}`);
console.log(`Store Branch    : ${storeBranch}`);
console.log(`Cashier / Desk  : ${cashierName}`);
console.log(`Customer ID     : ${customerId}`);
console.log(`Customer Name   : ${customerName}`);
console.log(`Membership Tier : ${customerCategory} (${membershipDiscountPercent}% Discount Benefit)`);

console.log("----------------------------------------------------------");
console.log("Product Name               Price      Qty   Item Total");
console.log("----------------------------------------------------------");

console.log(`${item1Name.padEnd(26)} ₹${item1Price.toString().padStart(6)}   ${item1Qty.toString().padStart(3)}   ₹${subtotal1.toFixed(2).padStart(10)}`);
console.log(`${item2Name.padEnd(26)} ₹${item2Price.toString().padStart(6)}   ${item2Qty.toString().padStart(3)}   ₹${subtotal2.toFixed(2).padStart(10)}`);
console.log(`${item3Name.padEnd(26)} ₹${item3Price.toString().padStart(6)}   ${item3Qty.toString().padStart(3)}   ₹${subtotal3.toFixed(2).padStart(10)}`);
console.log(`${item4Name.padEnd(26)} ₹${item4Price.toString().padStart(6)}   ${item4Qty.toString().padStart(3)}   ₹${subtotal4.toFixed(2).padStart(10)}`);

console.log("----------------------------------------------------------");
console.log(`Total Items Qty : ${totalQuantity} Units`);
console.log(`Gross Subtotal  : ₹${grossItemsTotal.toFixed(2)}`);
console.log(`Tier Discount   : -₹${membershipDiscount.toFixed(2)} (${customerCategory} ${membershipDiscountPercent}%)`);
if (bulkPurchaseDiscount > 0) {
    console.log(`Mega Cart Bonus : -₹${bulkPurchaseDiscount.toFixed(2)} (Orders over ₹75k)`);
}
if (includeExtendedWarranty) {
    console.log(`Extended Care   : ₹${warrantyCharge.toFixed(2)} (2-Year Protection Plan)`);
}
console.log(`Shipping Fee    : ₹${shippingFee.toFixed(2)} (${deliveryOption})`);

console.log("----------------------------------------------------------");
console.log(`Taxable Subtotal: ₹${taxableSubtotal.toFixed(2)}`);
console.log(`CGST (9%)       : ₹${cgstAmount.toFixed(2)}`);
console.log(`SGST (9%)       : ₹${sgstAmount.toFixed(2)}`);
console.log(`Total GST (18%) : ₹${totalGst.toFixed(2)}`);
console.log(`Promo Discount  : -₹${promoDiscount.toFixed(2)} (${promoCouponCode})`);
console.log(`FINAL PAYABLE   : ₹${finalAmount.toFixed(2)}`);

console.log("----------------------------------------------------------");
console.log(`Payment Method  : ${paymentMethod}`);
console.log(`Payment Status  : ${paymentStatus}`);
console.log(`Order Status    : ${orderStatus}`);
console.log(`Reward Points   : +${rewardPointsEarned} Points Added to Wallet`);

console.log("----------------------------------------------------------");
console.log(categoryMessage);

console.log("==========================================================");
console.log("         🎉 THANK YOU FOR SHOPPING WITH US!");
console.log("      Visit us again or visit www.electrotech.com");
console.log("==========================================================");

console.log(typeof customerName);
console.log(typeof invoiceNumber);
console.log(typeof customerCategory);
console.log(typeof totalQuantity);
console.log(typeof includeExtendedWarranty);
console.log(typeof finalAmount);
console.log(typeof orderStatus);