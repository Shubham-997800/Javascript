const customerName = "Shubham";
const movieName = "Avengers: Endgame";

const ticketPrice = 250;
const numberOfTickets = 3;

const snacksPrice = 180;
const numberOfSnacks = 2;

const ticketTotal = ticketPrice * numberOfTickets;
const snacksTotal = snacksPrice * numberOfSnacks;

const subtotal = ticketTotal + snacksTotal;

const bookingFee = 50;
const gst = subtotal * 0.18;

const finalAmount = subtotal + bookingFee + gst;

const isOnlineBooking = true;
const paymentMethod = "UPI";

console.log("======================================");
console.log("        🎬 MOVIE TICKET BOOKING");
console.log("======================================");

console.log(`Customer       : ${customerName}`);
console.log(`Movie          : ${movieName}`);

console.log("--------------------------------------");

console.log(`Ticket Price   : ₹${ticketPrice}`);
console.log(`Tickets        : ${numberOfTickets}`);
console.log(`Ticket Total   : ₹${ticketTotal}`);

console.log("--------------------------------------");

console.log(`Snacks Price   : ₹${snacksPrice}`);
console.log(`Snacks         : ${numberOfSnacks}`);
console.log(`Snacks Total   : ₹${snacksTotal}`);

console.log("--------------------------------------");

console.log(`Subtotal       : ₹${subtotal}`);
console.log(`Booking Fee    : ₹${bookingFee}`);
console.log(`GST (18%)      : ₹${gst}`);
console.log(`Final Amount   : ₹${finalAmount}`);

console.log("--------------------------------------");

console.log(`Online Booking : ${isOnlineBooking}`);
console.log(`Payment Method : ${paymentMethod}`);

console.log("======================================");
console.log("        🎟️ BOOKING CONFIRMED!");
console.log("       Enjoy Your Movie 🍿");
console.log("======================================");

console.log(typeof customerName);
console.log(typeof ticketPrice);
console.log(typeof numberOfTickets);
console.log(typeof isOnlineBooking);
console.log(typeof paymentMethod);