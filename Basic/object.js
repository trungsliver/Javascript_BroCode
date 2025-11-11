// Object = a collection of properties and methods
    // property = a variable that is attached to the object
    // method = a function that is attached to the object
    // THIS = reference to the object where THIS is used
    
const person1 = {
    firstName: "Duc Trung",
    lastName: "Bui",
    age: 2,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
}
