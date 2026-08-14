
function displayValue<T>(value: T): void {
    console.log("Value:", value);
}

displayValue<number>(100);

displayValue<string>("TypeScript");

displayValue<boolean>(true);


// Generic Class

class Box<T> {

    constructor(public value: T) { }

    display(): void {
        console.log("Box Value:", this.value);
    }
}

let numberBox = new Box<number>(500);
let stringBox = new Box<string>("Hello");

numberBox.display();
stringBox.display();