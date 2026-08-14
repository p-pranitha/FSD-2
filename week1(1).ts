let UserName :string = "Pranitha";
let UserAge:number = 19;
let isMember:boolean = true;
console.log("Data type of userName is-->" + typeof UserName);
console.log("Data type of userAge is-->" + typeof UserAge);
console.log("Data type of isMember is-->" + typeof isMember);
function displayUserProfile(name:string, age:number, active:boolean):void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active?"Active":"Inactive"}`);
}
displayUserProfile(UserName, UserAge, isMember);