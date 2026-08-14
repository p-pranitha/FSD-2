"use strict";
function displayValue(value) {
    console.log("Value:", value);
}
displayValue(100);
displayValue("TypeScript");
displayValue(true);
// Generic Class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Box Value:", this.value);
    }
}
let numberBox = new Box(500);
let stringBox = new Box("Hello");
numberBox.display();
stringBox.display();
