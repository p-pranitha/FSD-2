"use strict";
function welcomeCustomer(name) {
    return `Welcome, ${name}!`;
}
function getDeliveryCity(city = "Bengaluru") {
    return `Delivery City: ${city}`;
}
function placeOrder(orderId, note) {
    console.log(`Order ID: ${orderId}`);
    if (note) {
        console.log(`Special Note: ${note}`);
    }
}
function calculateBill(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(welcomeCustomer("Akhila"));
console.log(getDeliveryCity());
console.log(getDeliveryCity("Visakhapatnam"));
placeOrder(1025);
placeOrder(1026, "Please deliver before 6 PM");
