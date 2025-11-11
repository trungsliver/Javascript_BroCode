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

// constructor = special method for defining and creating an object
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.displayInfo = function() {
        console.log(`Car Info: ${this.year} ${this.color} ${this.make} ${this.model}`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020, "blue");
const car2 = new Car("Honda", "Accord", 2019, "red");
car1.displayInfo();
car2.displayInfo();

// class = (ES6 feature) provides a more stuctured and cleaner way to wwork with objects compared to tranditional constructor functions

class Products {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product Info: ${this.name} costs $${this.price}`);
    }

    calculateTotal(saleTax) {
        return this.price + (this.price * saleTax);
    }
}

const product1 = new Products("Shirt", 300);
const product2 = new Products("Pants", 200);
product1.displayInfo();
console.log(`Total price with tax: $${product1.calculateTotal(0.1)}`);
product2.displayInfo();
console.log(`Total price with tax: $${product2.calculateTotal(0.1)}`);

// static method = a method that belongs to the class itself, not to any specific object created from the class
class MathUtil{
    static PI = 3.14159;

    static getCircleArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log("MathUtil.PI =", MathUtil.PI);
console.log("Area of circle with radius 5:", MathUtil.getCircleArea(5));

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Perry");
const user2 = new User("Pororo");
const user3 = new User("Loopy");
console.log("Total users created:", User.userCount);