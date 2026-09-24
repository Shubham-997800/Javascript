// ==========================================
// 🛒 SHOPPING CART & BILLING SYSTEM USING FUNCTIONS
// ==========================================
// Is program mein cover kiye gaye concepts:
// 1. Functions with State (Cart management)
// 2. Parameters, Default Parameters & Validation
// 3. Arrow Functions
// 4. Return Objects & Numbers
// 5. Array iteration inside Functions
// ==========================================

console.log("========================================");
console.log("    🛍️  E-COMMERCE SHOPPING CART SYSTEM");
console.log("========================================\n");

// Cart Data (Global State)
let cart = [];

// ------------------------------------------
// Function 1: Add Item to Cart (Function Declaration)
// Parameters: itemName, price, quantity (default = 1)
// ------------------------------------------
function addToCart(itemName, price, quantity = 1) {
    if (price <= 0 || quantity <= 0) {
        console.log(`❌ [ERROR] Invalid price or quantity for ${itemName}`);
        return false;
    }

    // Check karte hain agar item pehle se cart me hai
    let existingItem = cart.find(item => item.name.toLowerCase() === itemName.toLowerCase());

    if (existingItem) {
        existingItem.quantity += quantity;
        console.log(`🔄 [UPDATED] ${itemName} quantity increased by +${quantity} (Total: ${existingItem.quantity})`);
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: quantity
        });
        console.log(`➕ [ADDED] ${quantity}x "${itemName}" (₹${price} each) added to cart.`);
    }

    return true;
}

// ------------------------------------------
// Function 2: Remove Item from Cart (Function Expression)
// Parameters: itemName, quantityToRemove (optional)
// ------------------------------------------
const removeFromCart = function (itemName, quantityToRemove = null) {
    const itemIndex = cart.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());

    if (itemIndex === -1) {
        console.log(`⚠️ [WARNING] "${itemName}" cart me nahi mila!`);
        return false;
    }

    const item = cart[itemIndex];

    if (quantityToRemove === null || quantityToRemove >= item.quantity) {
        // Pura item remove kar do
        cart.splice(itemIndex, 1);
        console.log(`🗑️ [REMOVED] "${itemName}" ko cart se hata diya gaya.`);
    } else {
        // Quantity kam karo
        item.quantity -= quantityToRemove;
        console.log(`➖ [REDUCED] "${itemName}" ki quantity -${quantityToRemove} kam hui (Remaining: ${item.quantity}).`);
    }

    return true;
};

// ------------------------------------------
// Function 3: Subtotal Calculate karna (Arrow Function)
// Return: Cart ka total bina discount aur tax ke
// ------------------------------------------
const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

// ------------------------------------------
// Function 4: Coupon Discount Apply karna (Normal Function)
// Return: { discountAmount, message }
// ------------------------------------------
function applyCoupon(subtotal, couponCode) {
    if (!couponCode) {
        return { discountAmount: 0, message: "No coupon applied" };
    }

    const code = couponCode.toUpperCase().trim();

    switch (code) {
        case "WELCOME10":
            // 10% discount sabhi par
            const discount10 = subtotal * 0.10;
            return {
                discountAmount: Math.round(discount10),
                message: "WELCOME10 applied (10% OFF)"
            };

        case "FLAT100":
            // Flat ₹100 off agar subtotal >= ₹500
            if (subtotal >= 500) {
                return {
                    discountAmount: 100,
                    message: "FLAT100 applied (₹100 FLAT OFF)"
                };
            } else {
                return {
                    discountAmount: 0,
                    message: "FLAT100 requires minimum cart value of ₹500"
                };
            }

        case "SUPER20":
            // 20% discount up to max ₹400 on subtotal >= ₹1000
            if (subtotal >= 1000) {
                const discount = Math.min(subtotal * 0.20, 400);
                return {
                    discountAmount: Math.round(discount),
                    message: `SUPER20 applied (20% OFF up to ₹400)`
                };
            } else {
                return {
                    discountAmount: 0,
                    message: "SUPER20 requires minimum cart value of ₹1000"
                };
            }

        default:
            return {
                discountAmount: 0,
                message: `❌ Invalid Coupon Code "${couponCode}"`
            };
    }
}

// ------------------------------------------
// Function 5: Tax (GST) Calculate karna (Arrow Function with Default Parameter)
// ------------------------------------------
const calculateTax = (amount, taxPercent = 18) => {
    return Number(((amount * taxPercent) / 100).toFixed(2));
};

// ------------------------------------------
// Function 6: Print Complete Bill / Invoice (Function Declaration)
// ------------------------------------------
function printInvoice(customerName, couponCode = null) {
    if (cart.length === 0) {
        console.log("🛒 Cart is empty! Bill generate nahi ho sakta.\n");
        return;
    }

    const subtotal = calculateSubtotal();
    const couponResult = applyCoupon(subtotal, couponCode);
    const taxableAmount = subtotal - couponResult.discountAmount;
    const gst = calculateTax(taxableAmount, 18);
    const grandTotal = Math.round(taxableAmount + gst);

    console.log("\n========================================");
    console.log("            🧾 TAX INVOICE");
    console.log("========================================");
    console.log(`👤 Customer : ${customerName}`);
    console.log(`📅 Date     : ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`);
    console.log("----------------------------------------");
    console.log("ITEM                QTY    PRICE   TOTAL");
    console.log("----------------------------------------");

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const nameCol = item.name.padEnd(18);
        const qtyCol = String(item.quantity).padEnd(6);
        const priceCol = (`₹${item.price}`).padEnd(8);
        const totalCol = `₹${itemTotal}`;
        console.log(`${nameCol}${qtyCol}${priceCol}${totalCol}`);
    });

    console.log("----------------------------------------");
    console.log(`Subtotal          : ₹${subtotal}`);
    console.log(`Coupon            : ${couponResult.message}`);
    console.log(`Discount Amount   : -₹${couponResult.discountAmount}`);
    console.log(`GST (18%)         : +₹${gst}`);
    console.log("----------------------------------------");
    console.log(`💰 GRAND TOTAL    : ₹${grandTotal}`);
    console.log("========================================");
    console.log("   🙏 Thank you for shopping with us!  ");
    console.log("========================================\n");
}


// ==========================================
// 🚀 DEMO / EXECUTION TEST
// ==========================================

console.log("--- 1. Items Cart me add kar rahe hain ---");
addToCart("Wireless Mouse", 500, 1);
addToCart("Mechanical Keyboard", 1500, 1);
addToCart("USB-C Cable", 250, 2);
addToCart("Wireless Mouse", 500, 1); // Quantity update test (1 se 2 hogi)

console.log("\n--- 2. Ek item ki quantity kam kar rahe hain ---");
removeFromCart("USB-C Cable", 1); // 2 se 1 ho jayegi

console.log("\n--- 3. Final Invoice Generate kar rahe hain ---");
printInvoice("Shubham", "SUPER20");
