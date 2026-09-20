const customerName = "Shubham";
const bookingId = "MOV-2026-5591";
const cinemaName = "PVR INOX Gold Cinemas";
const cinemaAudi = "Audi 04 (IMAX with Laser 3D)";
const movieTitle = "Interstellar: 10th Anniversary IMAX";
const movieCertification = "U/A 13+";
const showDate = "21-Sep-2026";
const showTime = "07:30 PM";

// Seating arrangements
const seatCategory = "Recliner"; // Silver, Gold, Platinum, Recliner
const selectedSeats = "H12, H13, H14";
const numberOfSeats = 3;

let ticketBasePrice;
switch (seatCategory) {
    case "Silver":
        ticketBasePrice = 220;
        break;
    case "Gold":
        ticketBasePrice = 340;
        break;
    case "Platinum":
        ticketBasePrice = 480;
        break;
    case "Recliner":
        ticketBasePrice = 750;
        break;
    default:
        ticketBasePrice = 300;
}

const totalTicketsAmount = ticketBasePrice * numberOfSeats;

// 3D Glass rental charge (₹50 per viewer)
const is3DExperience = true;
const glassesChargePerPax = 50;
const totalGlassesCharge = is3DExperience ? (glassesChargePerPax * numberOfSeats) : 0;

// Food & Beverage Gourmet Combos
const combo1Name = "Large Caramel Popcorn + 2 Coke";
const combo1Price = 540;
const combo1Qty = 1;

const combo2Name = "Crispy Mexican Nachos & Cheese Dip";
const combo2Price = 280;
const combo2Qty = 1;

const totalFnBCharges = (combo1Price * combo1Qty) + (combo2Price * combo2Qty);

// Internet booking fee & handling
const convenienceFeePerTicket = 35;
const totalConvenienceFee = convenienceFeePerTicket * numberOfSeats;

// Taxes: 18% GST on tickets (> ₹100), 5% GST on F&B, 18% GST on Convenience fee
const ticketGstRate = 18;
const ticketGst = (totalTicketsAmount * ticketGstRate) / 100;

const fnbGstRate = 5;
const fnbGst = (totalFnBCharges * fnbGstRate) / 100;

const convenienceGstRate = 18;
const convenienceGst = (totalConvenienceFee * convenienceGstRate) / 100;

const totalTaxes = ticketGst + fnbGst + convenienceGst;

const subtotalBeforeDiscount = totalTicketsAmount + totalGlassesCharge + totalFnBCharges + totalConvenienceFee + totalTaxes;

// Bank Credit Card BOGO (Buy 1 Get 1 Free Ticket discount)
const promoCode = "BOGOPVR";
const cardOfferDiscount = ticketBasePrice; // 1 Free Ticket discount

const finalPayable = subtotalBeforeDiscount - cardOfferDiscount;

const paymentMethod = "Credit Card (Visa Signature)";
const bookingStatus = "Confirmed - M-Ticket Issued";

console.log("==================================================");
console.log("          🎬 MOVIE TICKET & F&B INVOICE");
console.log("==================================================");

console.log(`Booking ID     : ${bookingId}`);
console.log(`Customer Name  : ${customerName}`);
console.log(`Movie Title    : ${movieTitle} [${movieCertification}]`);
console.log(`Multiplex      : ${cinemaName}`);
console.log(`Auditorium     : ${cinemaAudi}`);
console.log(`Show Timing    : ${showDate} | ${showTime}`);
console.log(`Seats (${seatCategory}) : ${selectedSeats} (${numberOfSeats} Seats)`);

console.log("--------------------------------------------------");
console.log(`Tickets Tariff : ₹${ticketBasePrice} × ${numberOfSeats} = ₹${totalTicketsAmount.toFixed(2)}`);
if (is3DExperience) {
    console.log(`3D Glasses Fee : ₹${glassesChargePerPax} × ${numberOfSeats} = ₹${totalGlassesCharge.toFixed(2)}`);
}
console.log(`F&B Combo 1    : ${combo1Name} = ₹${(combo1Price * combo1Qty).toFixed(2)}`);
console.log(`F&B Combo 2    : ${combo2Name} = ₹${(combo2Price * combo2Qty).toFixed(2)}`);
console.log(`Convenience Fee: ₹${totalConvenienceFee.toFixed(2)} (Online Service Fee)`);

console.log("--------------------------------------------------");
console.log(`Ticket GST(18%): ₹${ticketGst.toFixed(2)}`);
console.log(`F&B GST (5%)   : ₹${fnbGst.toFixed(2)}`);
console.log(`Conv. GST (18%): ₹${convenienceGst.toFixed(2)}`);
console.log(`Total Taxes    : ₹${totalTaxes.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Subtotal       : ₹${subtotalBeforeDiscount.toFixed(2)}`);
console.log(`BOGO Offer     : -₹${cardOfferDiscount.toFixed(2)} (${promoCode})`);
console.log(`FINAL PAYABLE  : ₹${finalPayable.toFixed(2)}`);

console.log("--------------------------------------------------");
console.log(`Payment Mode   : ${paymentMethod}`);
console.log(`Booking Status : ${bookingStatus}`);
console.log(`Entry Passcode : [QR-CODE: ${bookingId}-SEC-44]`);

console.log("==================================================");
console.log("        🍿 ENJOY YOUR CINEMA EXPERIENCE!");
console.log("     Please carry your M-Ticket on your phone");
console.log("==================================================");

console.log(typeof customerName);
console.log(typeof bookingId);
console.log(typeof seatCategory);
console.log(typeof numberOfSeats);
console.log(typeof is3DExperience);
console.log(typeof finalPayable);
console.log(typeof bookingStatus);