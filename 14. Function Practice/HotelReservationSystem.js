// Hotel Reservation System using Functions

console.log("========================================");
console.log("    🏨 GRAND HERITAGE HOTEL & RESORT");
console.log("========================================\n");

// Room type catalog with tariffs and capacities
const roomTypes = {
    standard: { name: "Standard Room", basePrice: 2500, maxGuests: 2, gstRate: 0.12 },
    deluxe: { name: "Deluxe Suite", basePrice: 4500, maxGuests: 3, gstRate: 0.12 },
    super_deluxe: { name: "Super Deluxe Suite", basePrice: 7000, maxGuests: 4, gstRate: 0.18 },
    presidential: { name: "Presidential Villa", basePrice: 12000, maxGuests: 6, gstRate: 0.18 }
};

// Hotel room inventory
let roomsInventory = [
    { roomNumber: "101", type: "standard", isAvailable: true },
    { roomNumber: "102", type: "standard", isAvailable: true },
    { roomNumber: "201", type: "deluxe", isAvailable: true },
    { roomNumber: "202", type: "deluxe", isAvailable: true },
    { roomNumber: "301", type: "super_deluxe", isAvailable: true },
    { roomNumber: "401", type: "presidential", isAvailable: true }
];

// Available add-on services catalog
const addOnServices = {
    breakfast: { name: "Buffet Breakfast", price: 450, perNightPerGuest: true },
    airport_shuttle: { name: "Airport Pickup & Drop", price: 1200, flatFee: true },
    spa: { name: "Luxury Spa Session", price: 1500, perGuest: true },
    extra_bed: { name: "Extra Rollaway Bed", price: 800, perNight: true }
};

// Discount promo codes
const coupons = {
    "WELCOME10": { type: "percent", discount: 10, minNights: 1 },
    "STAYMORE": { type: "percent", discount: 15, minNights: 3 },
    "LUXURY500": { type: "flat", discount: 500, minNights: 2 }
};

// Bookings repository
let bookings = [];

// Find first available room of given type
function findAvailableRoom(roomTypeKey) {
    return roomsInventory.find(room => room.type === roomTypeKey && room.isAvailable);
}

// Calculate base room tariff
const calculateRoomCharge = (basePrice, nights) => basePrice * nights;

// Calculate add-on services charges
function calculateAddOnsTotal(selectedAddOns, nights, guestsCount) {
    let breakdown = [];
    let total = 0;

    selectedAddOns.forEach(serviceKey => {
        let service = addOnServices[serviceKey];
        if (!service) return;

        let cost = 0;
        if (service.perNightPerGuest) {
            cost = service.price * nights * guestsCount;
        } else if (service.flatFee) {
            cost = service.price;
        } else if (service.perGuest) {
            cost = service.price * guestsCount;
        } else if (service.perNight) {
            cost = service.price * nights;
        }

        total += cost;
        breakdown.push({ name: service.name, cost: cost });
    });

    return { total, breakdown };
}

// Apply promo coupon discount
function applyPromoDiscount(couponCode, subtotal, nights) {
    if (!couponCode) return { code: null, discount: 0 };

    let coupon = coupons[couponCode.toUpperCase()];
    if (!coupon) {
        console.log(`⚠️ [COUPON] Invalid coupon "${couponCode}" ignored.`);
        return { code: null, discount: 0 };
    }

    if (nights < coupon.minNights) {
        console.log(`⚠️ [COUPON] "${couponCode}" requires minimum ${coupon.minNights} nights stay.`);
        return { code: null, discount: 0 };
    }

    let discountAmount = 0;
    if (coupon.type === "percent") {
        discountAmount = (subtotal * coupon.discount) / 100;
    } else if (coupon.type === "flat") {
        discountAmount = coupon.discount;
    }

    return { code: couponCode.toUpperCase(), discount: discountAmount };
}

// Calculate government GST tax
const calculateGST = (taxableAmount, rate) => taxableAmount * rate;

// Book a hotel room
function bookHotelRoom(guestDetails, roomTypeKey, nights, guestsCount, selectedAddOns = [], couponCode = null) {
    if (!guestDetails || !guestDetails.name || !guestDetails.phone) {
        console.log("❌ [BOOKING FAILED] Guest name and contact number are required.");
        return null;
    }

    if (nights <= 0 || guestsCount <= 0) {
        console.log("❌ [BOOKING FAILED] Nights and guest count must be greater than zero.");
        return null;
    }

    let selectedType = roomTypes[roomTypeKey];
    if (!selectedType) {
        console.log(`❌ [BOOKING FAILED] Invalid room category "${roomTypeKey}".`);
        return null;
    }

    if (guestsCount > selectedType.maxGuests) {
        console.log(`❌ [BOOKING FAILED] ${selectedType.name} accommodates maximum ${selectedType.maxGuests} guests.`);
        return null;
    }

    let availableRoom = findAvailableRoom(roomTypeKey);
    if (!availableRoom) {
        console.log(`❌ [BOOKING FAILED] No available rooms found for ${selectedType.name}.`);
        return null;
    }

    availableRoom.isAvailable = false;

    let roomCharge = calculateRoomCharge(selectedType.basePrice, nights);
    let addOnsResult = calculateAddOnsTotal(selectedAddOns, nights, guestsCount);
    let subtotal = roomCharge + addOnsResult.total;

    let discountInfo = applyPromoDiscount(couponCode, subtotal, nights);
    let taxableAmount = subtotal - discountInfo.discount;
    let gstAmount = calculateGST(taxableAmount, selectedType.gstRate);
    let totalPayable = taxableAmount + gstAmount;

    let bookingId = `HTL-${Date.now().toString().slice(-6)}-${availableRoom.roomNumber}`;

    let bookingRecord = {
        bookingId: bookingId,
        guest: guestDetails,
        roomNumber: availableRoom.roomNumber,
        roomType: selectedType.name,
        gstRate: selectedType.gstRate,
        nights: nights,
        guestsCount: guestsCount,
        roomCharge: roomCharge,
        addOns: addOnsResult.breakdown,
        addOnsTotal: addOnsResult.total,
        subtotal: subtotal,
        couponCode: discountInfo.code,
        discount: discountInfo.discount,
        taxableAmount: taxableAmount,
        gst: gstAmount,
        totalPayable: totalPayable,
        status: "CONFIRMED",
        bookingDate: new Date().toLocaleDateString()
    };

    bookings.push(bookingRecord);
    console.log(`✅ [CONFIRMED] Room ${availableRoom.roomNumber} (${selectedType.name}) booked for ${guestDetails.name}. [ID: ${bookingId}]`);
    return bookingRecord;
}

// Cancel reservation with tiered refund policy
function cancelReservation(bookingId, daysBeforeArrival) {
    let booking = bookings.find(b => b.bookingId === bookingId);
    if (!booking) {
        console.log(`❌ [CANCEL FAILED] Booking ID "${bookingId}" not found.`);
        return null;
    }

    if (booking.status === "CANCELLED") {
        console.log(`⚠️ [WARNING] Booking "${bookingId}" is already cancelled.`);
        return null;
    }

    let refundPercent = 0;
    if (daysBeforeArrival >= 3) {
        refundPercent = 90;
    } else if (daysBeforeArrival >= 1) {
        refundPercent = 50;
    } else {
        refundPercent = 0;
    }

    let refundAmount = (booking.totalPayable * refundPercent) / 100;
    let cancellationFee = booking.totalPayable - refundAmount;

    booking.status = "CANCELLED";
    booking.refundAmount = refundAmount;
    booking.cancellationFee = cancellationFee;

    let room = roomsInventory.find(r => r.roomNumber === booking.roomNumber);
    if (room) {
        room.isAvailable = true;
    }

    console.log(`\n🚫 [CANCELLED] Booking "${bookingId}" has been cancelled.`);
    console.log(`  • Notice Period    : ${daysBeforeArrival} days prior to check-in`);
    console.log(`  • Refund Eligible  : ${refundPercent}% (₹${refundAmount.toFixed(2)})`);
    console.log(`  • Cancellation Fee : ₹${cancellationFee.toFixed(2)}`);
    console.log(`  • Room ${booking.roomNumber} is now marked AVAILABLE.\n`);

    return booking;
}

// Print detailed guest invoice
function printBookingInvoice(bookingId) {
    let booking = bookings.find(b => b.bookingId === bookingId);
    if (!booking) {
        console.log(`❌ [INVOICE ERROR] Booking "${bookingId}" not found.`);
        return;
    }

    console.log("----------------------------------------");
    console.log("        🧾 GUEST TAX INVOICE");
    console.log("----------------------------------------");
    console.log(`Booking ID    : ${booking.bookingId}`);
    console.log(`Booking Date  : ${booking.bookingDate}`);
    console.log(`Guest Name    : ${booking.guest.name}`);
    console.log(`Contact No    : ${booking.guest.phone}`);
    console.log(`Room Details  : Room ${booking.roomNumber} - ${booking.roomType}`);
    console.log(`Stay Duration : ${booking.nights} Night(s) | ${booking.guestsCount} Guest(s)`);
    console.log(`Booking Status: ${booking.status}`);
    console.log("----------------------------------------");
    console.log("CHARGES BREAKDOWN:");
    console.log(`  • Room Tariff            : ₹${booking.roomCharge.toFixed(2)}`);

    if (booking.addOns.length > 0) {
        booking.addOns.forEach(item => {
            console.log(`  • Add-on: ${item.name.padEnd(16)} : ₹${item.cost.toFixed(2)}`);
        });
    }

    console.log(`  --------------------------------------`);
    console.log(`  Subtotal                 : ₹${booking.subtotal.toFixed(2)}`);

    if (booking.discount > 0) {
        console.log(`  • Promo Discount (${booking.couponCode}) : -₹${booking.discount.toFixed(2)}`);
    }

    console.log(`  • Taxable Value          : ₹${booking.taxableAmount.toFixed(2)}`);
    console.log(`  • GST (${(booking.gstRate * 100)}%)             : ₹${booking.gst.toFixed(2)}`);
    console.log("----------------------------------------");
    console.log(`💵 TOTAL PAYABLE AMOUNT    : ₹${booking.totalPayable.toFixed(2)}`);
    console.log("----------------------------------------\n");
}

// Display current hotel status and statistics
function displayHotelOccupancy() {
    let totalRooms = roomsInventory.length;
    let availableCount = roomsInventory.filter(r => r.isAvailable).length;
    let occupiedCount = totalRooms - availableCount;
    let totalRevenue = bookings
        .filter(b => b.status === "CONFIRMED")
        .reduce((sum, b) => sum + b.totalPayable, 0);

    console.log("========================================");
    console.log("      📊 HOTEL OPERATIONS SUMMARY");
    console.log("========================================");
    console.log(`Total Rooms In Resort   : ${totalRooms}`);
    console.log(`Occupied Rooms          : ${occupiedCount}`);
    console.log(`Available Rooms         : ${availableCount}`);
    console.log(`Active Bookings Count   : ${bookings.filter(b => b.status === "CONFIRMED").length}`);
    console.log(`Total Confirmed Revenue : ₹${totalRevenue.toFixed(2)}`);
    console.log("========================================\n");
}

// Guest 1: Deluxe Suite booking with breakfast and STAYMORE promo
let booking1 = bookHotelRoom(
    { name: "Shubham Sharma", phone: "9876543210" },
    "deluxe",
    3,
    2,
    ["breakfast"],
    "STAYMORE"
);

// Guest 2: Presidential Villa booking with airport shuttle & spa
let booking2 = bookHotelRoom(
    { name: "Priya Nair", phone: "9123456780" },
    "presidential",
    2,
    4,
    ["airport_shuttle", "spa"],
    "LUXURY500"
);

// Guest 3: Testing capacity validation failure
bookHotelRoom(
    { name: "Vikram Malhotra", phone: "9988776655" },
    "standard",
    2,
    5
);

// Guest 4: Standard Room booking and subsequent cancellation test
let booking4 = bookHotelRoom(
    { name: "Amit Verma", phone: "9811223344" },
    "standard",
    2,
    2,
    ["breakfast"],
    "WELCOME10"
);

// Print invoices for confirmed reservations
if (booking1) printBookingInvoice(booking1.bookingId);
if (booking2) printBookingInvoice(booking2.bookingId);

// Cancel guest 4 reservation with 4 days advance notice
if (booking4) cancelReservation(booking4.bookingId, 4);

// Display current hotel occupancy and revenue report
displayHotelOccupancy();
