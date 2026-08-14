let flexibleValue: any = 10;
console.log("Number:", flexibleValue);

flexibleValue = "Now I am a string";
console.log("String:", flexibleValue);

flexibleValue = true;
console.log("Boolean:", flexibleValue);

function checkUnknownValue(value: unknown): void {
    if (typeof value === "string") {
        console.log("Length of unknown string: " + value.length);
    } else {
        console.log("The value is not a string.");
    }
}

let mysteryValue: unknown = "Hello Vishnu";

checkUnknownValue(mysteryValue);

function logNotification(message: string): void {
    console.log(`ALERT: ${message}`);
}

logNotification("Environment Setup Complete!");