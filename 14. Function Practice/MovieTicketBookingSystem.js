// Movie Ticket & Snacks Booking System using Functions

console.log("========================================");
console.log("     🎬 PVR CINEPLEX BOOKING SYSTEM");
console.log("========================================\n");

// Available movies and screening schedule
let movieShows = [
    {
        showId: "SH01",
        movie: "Inception: Resurgence",
        screen: "Audi 1 (Dolby Atmos)",
        language: "English 3D",
        time: "06:30 PM",
        tiers: {
            classic: { name: "Classic", price: 180, totalSeats: 30, bookedSeats: 0 },
            prime: { name: "Prime", price: 280, totalSeats: 25, bookedSeats: 0 },
            recliner: { name: "Recliner VIP", price: 450, totalSeats: 10, bookedSeats: 0 }
        }
    },
    {
        showId: "SH02",
        movie: "Kalki 2898 AD",
        screen: "Audi 2 (IMAX Laser)",
        language: "Hindi",
        time: "09:15 PM",
        tiers: {
            classic: { name: "Classic", price: 220, totalSeats: 35, bookedSeats: 0 },
            prime: { name: "Prime", price: 350, totalSeats: 30, bookedSeats: 0 },
            recliner: { name: "Recliner VIP", price: 550, totalSeats: 12, bookedSeats: 0 }
        }
    },
    {
        showId: "SH03",
        movie: "Stree 2",
        screen: "Audi 3",
        language: "Hindi",
        time: "04:00 PM",
        tiers: {
            classic: { name: "Classic", price: 150, totalSeats: 25, bookedSeats: 25 }, // Sold out for classic
            prime: { name: "Prime", price: 240, totalSeats: 20, bookedSeats: 18 },
            recliner: { name: "Recliner VIP", price: 380, totalSeats: 8, bookedSeats: 2 }
        }
    }
];

// Food & beverage concession menu
const snackMenu = [
    { id: "SNK01", name: "Cheese Popcorn (Large)", price: 250 },
    { id: "SNK02", name: "Salted Popcorn (Medium)", price: 180 },
    { id: "SNK03", name: "Cold Fountain Pepsi (750ml)", price: 120 },
    { id: "SNK04", name: "Loaded Nachos with Salsa", price: 210 },
    { id: "SNK05", name: "Blockbuster Combo (Popcorn + 2 Pepsi)", price: 420 }
];

// Booking promo discount codes
const movieCoupons = {
    "MOVIE20": {
        description: "20% OFF on movie tickets up to ₹150 (Min 2 tickets)",
        discountPercent: 20,
        maxDiscount: 150,
        minTickets: 2,
        applyOnSnacks: false
    },
    "FLAT100": {
        description: "Flat ₹100 OFF on total bill above ₹700",
        flatDiscount: 100,
        minBill: 700,
        applyOnSnacks: true
    },
    "SNACKSAVER": {
        description: "Flat ₹60 OFF on snacks order above ₹300",
        snackDiscount: 60,
        minSnackValue: 300,
        applyOnSnacks: true
    }
};

// Bookings repository
let bookingsDatabase = [];
let ticketCounter = 5001;

// Find show by ID
function findShowById(showId) {
    return movieShows.find(s => s.showId.toUpperCase() === showId.toUpperCase());
}

// Find snack item by ID
const findSnackById = (snackId) => snackMenu.find(s => s.id.toUpperCase() === snackId.toUpperCase());

// Display currently running shows and seat availability
function displayCurrentShows() {
    console.log("-----------------------------------------------------------------");
    console.log("                 🎥 CURRENT RUNNING SHOWS");
    console.log("-----------------------------------------------------------------");

    movieShows.forEach(show => {
        console.log(`[${show.showId}] ${show.movie} (${show.language})`);
        console.log(`      Auditorium : ${show.screen} | Showtime: ${show.time}`);
        console.log("      Seat Availability:");

        for (let tierKey in show.tiers) {
            const tier = show.tiers[tierKey];
            const remaining = tier.totalSeats - tier.bookedSeats;
            const status = remaining === 0 ? "SOLD OUT" : `${remaining} seats left (₹${tier.price})`;
            console.log(`        • ${tier.name.padEnd(14)} : ${status}`);
        }
        console.log("");
    });
}

// Check seat availability in a selected tier
function checkAvailability(show, tierKey, requestedSeats) {
    if (!show.tiers[tierKey]) return { available: false, remaining: 0 };
    const tier = show.tiers[tierKey];
    const remaining = tier.totalSeats - tier.bookedSeats;
    return {
        available: remaining >= requestedSeats,
        remaining: remaining
    };
}

// Generate assigned seat numbers (e.g. C-01, C-02)
function allocateSeatNumbers(tierKey, startIndex, count) {
    const prefix = tierKey.charAt(0).toUpperCase();
    let seatList = [];
    for (let i = 1; i <= count; i++) {
        const seatNum = startIndex + i;
        seatList.push(`${prefix}-${seatNum < 10 ? "0" + seatNum : seatNum}`);
    }
    return seatList;
}

// Calculate snacks subtotal from user selection
function calculateSnacksTotal(selectedSnacks = []) {
    let breakdown = [];
    let subtotal = 0;

    for (let item of selectedSnacks) {
        const snack = findSnackById(item.snackId);
        if (snack) {
            const qty = item.quantity || 1;
            const cost = snack.price * qty;
            subtotal += cost;
            breakdown.push({
                name: snack.name,
                unitPrice: snack.price,
                quantity: qty,
                cost: cost
            });
        }
    }

    return { subtotal, breakdown };
}

// Apply movie coupon discount
function applyMovieCoupon(ticketsCost, snacksCost, couponCode, ticketCount) {
    if (!couponCode) {
        return { code: null, discount: 0, message: "No coupon applied" };
    }

    const code = couponCode.toUpperCase().trim();
    const coupon = movieCoupons[code];

    if (!coupon) {
        return { code: null, discount: 0, message: `Promo code "${couponCode}" is invalid` };
    }

    if (coupon.minTickets && ticketCount < coupon.minTickets) {
        return { code: null, discount: 0, message: `${code} requires minimum ${coupon.minTickets} tickets` };
    }

    const totalBill = ticketsCost + snacksCost;
    if (coupon.minBill && totalBill < coupon.minBill) {
        return { code: null, discount: 0, message: `${code} requires a minimum bill of ₹${coupon.minBill}` };
    }

    if (coupon.minSnackValue && snacksCost < coupon.minSnackValue) {
        return { code: null, discount: 0, message: `${code} requires snack value of at least ₹${coupon.minSnackValue}` };
    }

    let discount = 0;
    if (coupon.discountPercent) {
        const calculated = Math.round((ticketsCost * coupon.discountPercent) / 100);
        discount = Math.min(calculated, coupon.maxDiscount);
    } else if (coupon.flatDiscount) {
        discount = coupon.flatDiscount;
    } else if (coupon.snackDiscount) {
        discount = coupon.snackDiscount;
    }

    return {
        code: code,
        discount: discount,
        message: `${code} applied (-₹${discount})`
    };
}

// Book movie tickets and optional snacks
function bookMovieTickets({
    customerName,
    phone,
    showId,
    tierKey = "classic",
    seatCount = 1,
    snacks = [],
    couponCode = null
}) {
    // 1. Basic validation
    if (!customerName || !phone) {
        console.log("❌ [BOOKING FAILED] Customer name and phone number are required.");
        return null;
    }

    if (seatCount <= 0 || seatCount > 10) {
        console.log("❌ [BOOKING FAILED] You can book between 1 and 10 tickets per transaction.");
        return null;
    }

    const show = findShowById(showId);
    if (!show) {
        console.log(`❌ [BOOKING FAILED] Show with ID "${showId}" not found.`);
        return null;
    }

    const normalizedTierKey = tierKey.toLowerCase();
    if (!show.tiers[normalizedTierKey]) {
        console.log(`❌ [BOOKING FAILED] Invalid seat category "${tierKey}". Choose classic, prime, or recliner.`);
        return null;
    }

    // 2. Check seat availability
    const availability = checkAvailability(show, normalizedTierKey, seatCount);
    if (!availability.available) {
        console.log(`⚠️ [SOLD OUT] Only ${availability.remaining} seats available in ${show.tiers[normalizedTierKey].name} category for ${show.movie}.`);
        return null;
    }

    const selectedTier = show.tiers[normalizedTierKey];
    const ticketSubtotal = selectedTier.price * seatCount;
    const allocatedSeats = allocateSeatNumbers(normalizedTierKey, selectedTier.bookedSeats, seatCount);

    // 3. Process snacks
    const snacksData = calculateSnacksTotal(snacks);

    // 4. Promo coupon discount
    const couponResult = applyMovieCoupon(ticketSubtotal, snacksData.subtotal, couponCode, seatCount);

    // 5. Convenience fee and taxes
    const CONVENIENCE_FEE_PER_TICKET = 30;
    const convenienceFee = CONVENIENCE_FEE_PER_TICKET * seatCount;

    // GST: 18% on tickets and convenience fee, 5% on concession food
    const ticketGst = Math.round(ticketSubtotal * 0.18 * 100) / 100;
    const convenienceGst = Math.round(convenienceFee * 0.18 * 100) / 100;
    const snacksGst = Math.round(snacksData.subtotal * 0.05 * 100) / 100;
    const totalGst = ticketGst + convenienceGst + snacksGst;

    const grandTotal = Math.round(ticketSubtotal + snacksData.subtotal + convenienceFee + totalGst - couponResult.discount);

    // 6. Deduct seats from inventory
    selectedTier.bookedSeats += seatCount;

    // 7. Create booking record
    const bookingId = `TKT-${ticketCounter++}`;
    const newBooking = {
        bookingId: bookingId,
        customer: { name: customerName, phone: phone },
        showId: show.showId,
        movieTitle: show.movie,
        screen: show.screen,
        language: show.language,
        showTime: show.time,
        seatTier: selectedTier.name,
        tierKey: normalizedTierKey,
        seatCount: seatCount,
        allocatedSeats: allocatedSeats,
        ticketPrice: selectedTier.price,
        ticketSubtotal: ticketSubtotal,
        snacks: snacksData.breakdown,
        snacksSubtotal: snacksData.subtotal,
        couponCode: couponResult.code,
        discount: couponResult.discount,
        convenienceFee: convenienceFee,
        gstBreakdown: { ticketGst, convenienceGst, snacksGst, totalGst },
        grandTotal: grandTotal,
        status: "CONFIRMED", // CONFIRMED or CANCELLED
        bookedAt: new Date().toLocaleTimeString()
    };

    bookingsDatabase.push(newBooking);
    console.log(`🎟️ [BOOKING CONFIRMED] Booking #${bookingId} | ${show.movie} | Seats: ${allocatedSeats.join(", ")} | Total: ₹${grandTotal}`);
    return newBooking;
}

// Cancel movie ticket with advance-hours policy
function cancelMovieTicket(bookingId, hoursBeforeShow) {
    const booking = bookingsDatabase.find(b => b.bookingId === bookingId);

    if (!booking) {
        console.log(`❌ [CANCEL FAILED] Booking ID "${bookingId}" not found.`);
        return false;
    }

    if (booking.status === "CANCELLED") {
        console.log(`ℹ️ [ALREADY CANCELLED] Booking #${bookingId} was already cancelled.`);
        return false;
    }

    let refundPercent = 0;
    if (hoursBeforeShow >= 24) {
        refundPercent = 85; // 15% cancellation fee
    } else if (hoursBeforeShow >= 4) {
        refundPercent = 50; // 50% refund
    } else {
        refundPercent = 0; // No refund within 4 hours of show
    }

    // Release seats back to inventory
    const show = findShowById(booking.showId);
    if (show && show.tiers[booking.tierKey]) {
        show.tiers[booking.tierKey].bookedSeats -= booking.seatCount;
    }

    const refundAmount = Math.round((booking.grandTotal * refundPercent) / 100);
    booking.status = "CANCELLED";
    booking.refundAmount = refundAmount;
    booking.cancellationHours = hoursBeforeShow;

    console.log(`🚫 [TICKET CANCELLED] #${bookingId} cancelled ${hoursBeforeShow}h before show. Refund: ₹${refundAmount} (${refundPercent}%)`);
    return true;
}

// Print movie boarding pass / invoice
function printTicketInvoice(bookingId) {
    const b = bookingsDatabase.find(item => item.bookingId === bookingId);

    if (!b) {
        console.log(`❌ Ticket #${bookingId} not found.`);
        return;
    }

    console.log("\n========================================");
    console.log("       🎟️ PVR CINEMAS - MOVIE TICKET");
    console.log("========================================");
    console.log(`Booking ID   : ${b.bookingId}  [${b.status}]`);
    console.log(`Booked At    : ${b.bookedAt}`);
    console.log(`Guest Name   : ${b.customer.name} (${b.customer.phone})`);
    console.log("----------------------------------------");
    console.log(`🎬 Movie     : ${b.movieTitle}`);
    console.log(`🗣️ Format    : ${b.language}`);
    console.log(`🏛️ Cinema    : ${b.screen}`);
    console.log(`⏰ Showtime  : Today, ${b.showTime}`);
    console.log(`💺 Seats     : ${b.allocatedSeats.join(", ")} (${b.seatTier})`);
    console.log("----------------------------------------");
    console.log(`  • Ticket Charges (${b.seatCount} x ₹${b.ticketPrice}) : ₹${b.ticketSubtotal.toFixed(2)}`);

    if (b.snacks.length > 0) {
        console.log("  • Concessions (F&B):");
        b.snacks.forEach(s => {
            console.log(`     - ${s.name} x ${s.quantity} : ₹${s.cost.toFixed(2)}`);
        });
        console.log(`    Snacks Subtotal        : ₹${b.snacksSubtotal.toFixed(2)}`);
    }

    console.log(`  • Convenience Fee        : ₹${b.convenienceFee.toFixed(2)}`);
    console.log(`  • Taxes (GST)            : ₹${b.gstBreakdown.totalGst.toFixed(2)}`);

    if (b.discount > 0) {
        console.log(`  • Promo Discount (${b.couponCode}) : -₹${b.discount.toFixed(2)}`);
    }

    console.log("----------------------------------------");
    console.log(`💵 TOTAL PAID AMOUNT       : ₹${b.grandTotal.toFixed(2)}`);

    if (b.status === "CANCELLED") {
        console.log(`⚠️ Refund Processed       : ₹${b.refundAmount.toFixed(2)}`);
    }

    console.log("========================================\n");
}

// Box office revenue summary
function displayBoxOfficeSummary() {
    const totalBookings = bookingsDatabase.length;
    const confirmedBookings = bookingsDatabase.filter(b => b.status === "CONFIRMED");
    const cancelledBookings = bookingsDatabase.filter(b => b.status === "CANCELLED");

    const totalTicketsSold = confirmedBookings.reduce((sum, b) => sum + b.seatCount, 0);
    const grossCollection = confirmedBookings.reduce((sum, b) => sum + b.grandTotal, 0);
    const snackRevenue = confirmedBookings.reduce((sum, b) => sum + b.snacksSubtotal, 0);

    console.log("========================================");
    console.log("       📊 BOX OFFICE SUMMARY REPORT");
    console.log("========================================");
    console.log(`Total Transactions      : ${totalBookings}`);
    console.log(`Confirmed Reservations  : ${confirmedBookings.length}`);
    console.log(`Cancelled Bookings      : ${cancelledBookings.length}`);
    console.log(`Total Tickets Sold      : ${totalTicketsSold}`);
    console.log(`Snacks & F&B Revenue    : ₹${snackRevenue.toFixed(2)}`);
    console.log(`Gross Box Office Total  : ₹${grossCollection.toFixed(2)}`);
    console.log("========================================\n");
}

// ==========================================
// TEST SCENARIOS & SYSTEM DEMONSTRATION
// ==========================================

// Display list of all shows before bookings
displayCurrentShows();

// Scenario 1: Booking 2 Prime seats with Blockbuster Combo & MOVIE20 coupon
const booking1 = bookMovieTickets({
    customerName: "Vikas Mehra",
    phone: "9876501234",
    showId: "SH01",
    tierKey: "prime",
    seatCount: 2,
    snacks: [
        { snackId: "SNK05", quantity: 1 } // Blockbuster Combo (₹420)
    ],
    couponCode: "MOVIE20"
});

// Scenario 2: VIP Recliner booking for IMAX movie with FLAT100 coupon
const booking2 = bookMovieTickets({
    customerName: "Roshni Sen",
    phone: "9812345678",
    showId: "SH02",
    tierKey: "recliner",
    seatCount: 2,
    snacks: [
        { snackId: "SNK01", quantity: 1 }, // Cheese Popcorn (₹250)
        { snackId: "SNK03", quantity: 2 }  // Cold Drink (₹120 x 2 = ₹240)
    ],
    couponCode: "FLAT100"
});

// Scenario 3: Attempting to book classic seats in sold out show
bookMovieTickets({
    customerName: "Deepak Yadav",
    phone: "9711223344",
    showId: "SH03",
    tierKey: "classic",
    seatCount: 2
});

// Scenario 4: Booking 3 tickets and cancelling 30 hours prior
const booking4 = bookMovieTickets({
    customerName: "Ananya Gupta",
    phone: "9988776655",
    showId: "SH02",
    tierKey: "prime",
    seatCount: 3,
    couponCode: "MOVIE20"
});

// Print ticket invoices
if (booking1) printTicketInvoice(booking1.bookingId);
if (booking2) printTicketInvoice(booking2.bookingId);

// Cancel booking 4 with 30 hours notice (85% refund)
if (booking4) {
    cancelMovieTicket(booking4.bookingId, 30);
    printTicketInvoice(booking4.bookingId);
}

// Display final box office statistics
displayBoxOfficeSummary();
