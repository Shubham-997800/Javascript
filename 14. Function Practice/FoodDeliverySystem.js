// Food Delivery System using Functions

console.log("========================================");
console.log("       🍔 CRAVEEXPRESS FOOD DELIVERY");
console.log("========================================\n");

// Menu catalog
const menuItems = [
    { id: "M01", name: "Paneer Butter Masala", category: "Main Course", price: 280, isVeg: true, isAvailable: true },
    { id: "M02", name: "Butter Naan", category: "Breads", price: 45, isVeg: true, isAvailable: true },
    { id: "M03", name: "Chicken Biryani", category: "Main Course", price: 320, isVeg: false, isAvailable: true },
    { id: "M04", name: "Veg Manchurian Dry", category: "Starters", price: 210, isVeg: true, isAvailable: true },
    { id: "M05", name: "Tandoori Chicken (Half)", category: "Starters", price: 290, isVeg: false, isAvailable: true },
    { id: "M06", name: "Gulab Jamun (2 Pcs)", category: "Desserts", price: 90, isVeg: true, isAvailable: true },
    { id: "M07", name: "Cold Coffee with Ice Cream", category: "Beverages", price: 130, isVeg: true, isAvailable: true },
    { id: "M08", name: "Seasonal Mango Shake", category: "Beverages", price: 140, isVeg: true, isAvailable: false } // Out of stock
];

// Active and historical orders repository
let ordersDatabase = [];
let orderCounter = 1001;

// Discount coupon codes definition
const promoCoupons = {
    "FIRST50": {
        description: "50% OFF up to ₹120 for new users",
        discountPercent: 50,
        maxDiscount: 120,
        minOrderValue: 200
    },
    "FLAT100": {
        description: "Flat ₹100 OFF on orders above ₹499",
        flatDiscount: 100,
        minOrderValue: 499
    },
    "FEAST20": {
        description: "20% OFF up to ₹250 on family orders above ₹700",
        discountPercent: 20,
        maxDiscount: 250,
        minOrderValue: 700
    }
};

// Find item in menu by ID
function getMenuItemById(itemId) {
    return menuItems.find(item => item.id.toUpperCase() === itemId.toUpperCase());
}

// Calculate delivery fee based on distance (km)
const calculateDeliveryFee = (distanceKm) => {
    if (distanceKm <= 2) {
        return 20; // Base charge within 2 km
    } else if (distanceKm <= 7) {
        return 20 + Math.round((distanceKm - 2) * 8); // ₹8 per extra km
    } else {
        return 60 + Math.round((distanceKm - 7) * 12); // ₹12 per km for long distance
    }
};

// Calculate surge fee during bad weather or peak demand hours
function getSurgeCharge(isPeakHours = false, isRainy = false) {
    let surge = 0;
    if (isRainy) surge += 30;
    if (isPeakHours) surge += 20;
    return surge;
}

// Calculate discount amount based on promo code
function applyFoodPromo(subtotal, promoCode) {
    if (!promoCode) {
        return { code: null, discount: 0, reason: "No promo applied" };
    }

    const code = promoCode.toUpperCase().trim();
    const coupon = promoCoupons[code];

    if (!coupon) {
        return { code: null, discount: 0, reason: `Coupon "${promoCode}" is invalid` };
    }

    if (subtotal < coupon.minOrderValue) {
        return {
            code: null,
            discount: 0,
            reason: `${code} requires a minimum cart value of ₹${coupon.minOrderValue}`
        };
    }

    let discount = 0;
    if (coupon.flatDiscount) {
        discount = coupon.flatDiscount;
    } else if (coupon.discountPercent) {
        const calculatedDiscount = Math.round((subtotal * coupon.discountPercent) / 100);
        discount = Math.min(calculatedDiscount, coupon.maxDiscount);
    }

    return {
        code: code,
        discount: discount,
        reason: `${code} applied successfully`
    };
}

// Calculate taxes and government charges
const calculateTaxes = (taxableAmount) => {
    const GST_RATE = 0.05; // 5% GST for restaurant services
    return Math.round(taxableAmount * GST_RATE * 100) / 100;
};

// Place a new food delivery order
function placeFoodOrder({
    customerName,
    phone,
    deliveryAddress,
    items = [],
    distanceKm = 3,
    promoCode = null,
    deliveryTip = 0,
    isPeakHours = false,
    isRainy = false
}) {
    // 1. Customer verification
    if (!customerName || !phone || !deliveryAddress) {
        console.log("❌ [ORDER FAILED] Customer name, phone, and delivery address are mandatory.");
        return null;
    }

    if (items.length === 0) {
        console.log("❌ [ORDER FAILED] Cart is empty! Add at least one dish.");
        return null;
    }

    // 2. Process order items and validate availability
    let orderedItems = [];
    let itemsSubtotal = 0;

    for (let reqItem of items) {
        const menuItem = getMenuItemById(reqItem.itemId);

        if (!menuItem) {
            console.log(`❌ [ORDER FAILED] Dish code "${reqItem.itemId}" does not exist.`);
            return null;
        }

        if (!menuItem.isAvailable) {
            console.log(`⚠️ [ITEM OUT OF STOCK] "${menuItem.name}" is currently unavailable. Please remove it to proceed.`);
            return null;
        }

        const quantity = reqItem.quantity || 1;
        if (quantity <= 0) {
            console.log(`❌ [ORDER FAILED] Invalid quantity for "${menuItem.name}".`);
            return null;
        }

        const itemTotal = menuItem.price * quantity;
        itemsSubtotal += itemTotal;

        orderedItems.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: quantity,
            itemTotal: itemTotal,
            isVeg: menuItem.isVeg
        });
    }

    // 3. Calculate discounts, delivery fees, and taxes
    const promoResult = applyFoodPromo(itemsSubtotal, promoCode);
    const discountedFoodTotal = Math.max(0, itemsSubtotal - promoResult.discount);

    const deliveryFee = calculateDeliveryFee(distanceKm);
    const surgeFee = getSurgeCharge(isPeakHours, isRainy);
    const platformFee = 5; // Flat nominal platform fee
    const gstAmount = calculateTaxes(discountedFoodTotal);
    const validTip = Math.max(0, deliveryTip);

    const grandTotal = Math.round(discountedFoodTotal + deliveryFee + surgeFee + platformFee + gstAmount + validTip);

    // 4. Create and store order object
    const orderId = `ORD-${orderCounter++}`;
    const estimatedMinutes = 20 + Math.round(distanceKm * 4); // Preparation time + travel time

    const newOrder = {
        orderId: orderId,
        customer: { name: customerName, phone: phone, address: deliveryAddress },
        items: orderedItems,
        distanceKm: distanceKm,
        itemsSubtotal: itemsSubtotal,
        promoCode: promoResult.code,
        discount: promoResult.discount,
        promoMessage: promoResult.reason,
        deliveryFee: deliveryFee,
        surgeFee: surgeFee,
        platformFee: platformFee,
        gstAmount: gstAmount,
        tip: validTip,
        grandTotal: grandTotal,
        estimatedTime: estimatedMinutes,
        status: "PLACED", // PLACED -> PREPARING -> OUT_FOR_DELIVERY -> DELIVERED -> CANCELLED
        createdAt: new Date().toLocaleTimeString()
    };

    ordersDatabase.push(newOrder);

    console.log(`✅ [ORDER PLACED] Order #${orderId} confirmed for ${customerName} | Amount: ₹${grandTotal}`);
    return newOrder;
}

// Update order tracking status
function updateOrderStatus(orderId, newStatus) {
    const validStatuses = ["PLACED", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"];
    const order = ordersDatabase.find(o => o.orderId === orderId);

    if (!order) {
        console.log(`❌ [NOT FOUND] Order #${orderId} not found.`);
        return false;
    }

    if (!validStatuses.includes(newStatus.toUpperCase())) {
        console.log(`❌ [INVALID STATUS] Status must be one of: ${validStatuses.join(", ")}`);
        return false;
    }

    const previousStatus = order.status;
    order.status = newStatus.toUpperCase();
    console.log(`🛵 [TRACKING] Order #${orderId} status changed: ${previousStatus} ➜ ${order.status}`);
    return true;
}

// Cancel order with refund logic
function cancelFoodOrder(orderId, cancellationReason = "Customer request") {
    const order = ordersDatabase.find(o => o.orderId === orderId);

    if (!order) {
        console.log(`❌ [CANCEL FAILED] Order #${orderId} not found.`);
        return false;
    }

    if (order.status === "DELIVERED") {
        console.log(`⚠️ [CANCEL FAILED] Order #${orderId} is already delivered. Cannot cancel.`);
        return false;
    }

    if (order.status === "CANCELLED") {
        console.log(`ℹ️ [ALREADY CANCELLED] Order #${orderId} was already cancelled.`);
        return false;
    }

    let refundPercent = 0;
    if (order.status === "PLACED") {
        refundPercent = 100; // Kitchen hasn't started yet
    } else if (order.status === "PREPARING") {
        refundPercent = 40; // Food preparation commenced
    } else if (order.status === "OUT_FOR_DELIVERY") {
        refundPercent = 0; // Rider is already on the road
    }

    const refundAmount = Math.round((order.grandTotal * refundPercent) / 100);
    order.status = "CANCELLED";
    order.cancellationReason = cancellationReason;
    order.refundAmount = refundAmount;

    console.log(`🚫 [CANCELLED] Order #${orderId} cancelled (${cancellationReason}). Refund: ₹${refundAmount} (${refundPercent}%)`);
    return true;
}

// Print detailed food order receipt
function printOrderInvoice(orderId) {
    const order = ordersDatabase.find(o => o.orderId === orderId);

    if (!order) {
        console.log(`❌ Cannot generate invoice: Order #${orderId} not found.`);
        return;
    }

    console.log("\n========================================");
    console.log("         🧾 CRAVEEXPRESS TAX INVOICE");
    console.log("========================================");
    console.log(`Order ID     : ${order.orderId}`);
    console.log(`Date & Time  : ${order.createdAt}`);
    console.log(`Status       : ${order.status}`);
    console.log(`Customer     : ${order.customer.name} (${order.customer.phone})`);
    console.log(`Deliver To   : ${order.customer.address}`);
    console.log(`Distance     : ${order.distanceKm} km (ETA: ~${order.estimatedTime} mins)`);
    console.log("----------------------------------------");
    console.log("ITEMS ORDERED:");

    order.items.forEach((item, index) => {
        const symbol = item.isVeg ? "🟢" : "🔴";
        console.log(` ${index + 1}. ${symbol} ${item.name}`);
        console.log(`    ${item.quantity} x ₹${item.price} = ₹${item.itemTotal}`);
    });

    console.log("----------------------------------------");
    console.log(`  • Food Subtotal          : ₹${order.itemsSubtotal.toFixed(2)}`);

    if (order.discount > 0) {
        console.log(`  • Promo Discount (${order.promoCode}) : -₹${order.discount.toFixed(2)}`);
    }

    console.log(`  • Delivery Partner Fee   : ₹${order.deliveryFee.toFixed(2)}`);

    if (order.surgeFee > 0) {
        console.log(`  • Rain / Surge Fee       : ₹${order.surgeFee.toFixed(2)}`);
    }

    console.log(`  • Platform Fee           : ₹${order.platformFee.toFixed(2)}`);
    console.log(`  • Restaurant GST (5%)    : ₹${order.gstAmount.toFixed(2)}`);

    if (order.tip > 0) {
        console.log(`  • Delivery Rider Tip     : ₹${order.tip.toFixed(2)}`);
    }

    console.log("----------------------------------------");
    console.log(`💵 TOTAL PAID / PAYABLE    : ₹${order.grandTotal.toFixed(2)}`);

    if (order.status === "CANCELLED") {
        console.log(`⚠️ Refund Credited       : ₹${order.refundAmount.toFixed(2)}`);
    }

    console.log("========================================\n");
}

// Display daily performance and revenue metrics
function displayRestaurantSummary() {
    const totalOrders = ordersDatabase.length;
    const deliveredOrders = ordersDatabase.filter(o => o.status === "DELIVERED");
    const cancelledOrders = ordersDatabase.filter(o => o.status === "CANCELLED");
    const activeOrders = ordersDatabase.filter(o => o.status !== "DELIVERED" && o.status !== "CANCELLED");

    const totalRevenue = deliveredOrders.reduce((sum, o) => sum + o.grandTotal, 0);

    console.log("========================================");
    console.log("       📊 DAILY OPERATIONS REPORT");
    console.log("========================================");
    console.log(`Total Orders Placed     : ${totalOrders}`);
    console.log(`Delivered Orders        : ${deliveredOrders.length}`);
    console.log(`Active In-Transit Orders: ${activeOrders.length}`);
    console.log(`Cancelled Orders        : ${cancelledOrders.length}`);
    console.log(`Total Realized Revenue  : ₹${totalRevenue.toFixed(2)}`);
    console.log("========================================\n");
}

// ==========================================
// TEST SCENARIOS & SYSTEM DEMONSTRATION
// ==========================================

// Scenario 1: Standard vegetarian order with FIRST50 discount code
const order1 = placeFoodOrder({
    customerName: "Rahul Sharma",
    phone: "9876541230",
    deliveryAddress: "Flat 402, Sunshine Heights, Sector 18",
    items: [
        { itemId: "M01", quantity: 1 }, // Paneer Butter Masala (₹280)
        { itemId: "M02", quantity: 3 }  // Butter Naan (₹45 x 3 = ₹135)
    ],
    distanceKm: 3.5,
    promoCode: "FIRST50",
    deliveryTip: 20
});

// Scenario 2: Large family non-veg party order with FEAST20 promo and rainy surge
const order2 = placeFoodOrder({
    customerName: "Sneha Patel",
    phone: "9823456789",
    deliveryAddress: "Villa 12, Green Meadows",
    items: [
        { itemId: "M03", quantity: 2 }, // Chicken Biryani (₹320 x 2 = ₹640)
        { itemId: "M05", quantity: 1 }, // Tandoori Chicken (₹290)
        { itemId: "M06", quantity: 2 }, // Gulab Jamun (₹90 x 2 = ₹180)
        { itemId: "M07", quantity: 2 }  // Cold Coffee (₹130 x 2 = ₹260)
    ],
    distanceKm: 6.2,
    promoCode: "FEAST20",
    deliveryTip: 50,
    isRainy: true
});

// Scenario 3: Ordering an out-of-stock item (Seasonal Mango Shake)
placeFoodOrder({
    customerName: "Karan Johar",
    phone: "9911223344",
    deliveryAddress: "A-54, Bandra West",
    items: [
        { itemId: "M08", quantity: 1 }
    ],
    distanceKm: 2
});

// Scenario 4: Order placed and then cancelled during preparation stage
const order4 = placeFoodOrder({
    customerName: "Aman Gupta",
    phone: "9123498765",
    deliveryAddress: "Tower B, Cyber City",
    items: [
        { itemId: "M04", quantity: 1 }, // Veg Manchurian (₹210)
        { itemId: "M02", quantity: 2 }  // Butter Naan (₹90)
    ],
    distanceKm: 2.0,
    promoCode: "FIRST50"
});

// Update order status lifecycle
if (order1) {
    updateOrderStatus(order1.orderId, "PREPARING");
    updateOrderStatus(order1.orderId, "OUT_FOR_DELIVERY");
    updateOrderStatus(order1.orderId, "DELIVERED");
    printOrderInvoice(order1.orderId);
}

if (order2) {
    updateOrderStatus(order2.orderId, "PREPARING");
    updateOrderStatus(order2.orderId, "OUT_FOR_DELIVERY");
    updateOrderStatus(order2.orderId, "DELIVERED");
    printOrderInvoice(order2.orderId);
}

if (order4) {
    updateOrderStatus(order4.orderId, "PREPARING");
    cancelFoodOrder(order4.orderId, "Customer changed their mind");
    printOrderInvoice(order4.orderId);
}

// Display final operations summary
displayRestaurantSummary();
