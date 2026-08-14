"use strict";
function calculateFinalPriceTraditional(price, discountRate) {
    return price - (price * discountRate);
}
const calculateFinalPriceArrow = (price, discountRate) => {
    return price - (price * discountRate);
};
const getStoreMessage = (store) => {
    return `Welcome to ${store} Online Store!`;
};
const productPrice = 1500;
const discountRate = 0.20;
console.log(getStoreMessage("TechMart"));
const finalPrice1 = calculateFinalPriceTraditional(productPrice, discountRate);
console.log("Final Price (Traditional):", `₹${finalPrice1}`);
const finalPrice2 = calculateFinalPriceArrow(productPrice, discountRate);
console.log("Final Price (Arrow):", `₹${finalPrice2}`);
