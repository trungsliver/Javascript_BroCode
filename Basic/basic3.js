
// ================== Destructuring =====================
// destructuring = extract values from arrays and object, then assign them to variables in convenient way
    // [] = to perform array destructuring
    // {} = to perform object destructuring

    // ex1: swap the value of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);

    // ex2: element in array
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

    // ex3: assign array elements to variables
const [firstColor, secondColor, thirdColor, ...restColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(restColors);

    // ex4: extract value from object
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 20,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 22,
}

const {firstName, lastName, age, job="Unemployed"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

    // ex5: destructuring in function parameters
function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log("----- Person Info -----");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);

// ================== Nested Object =====================
    // nested object = object inside another object
    // allows your to represent more complex data structures
    // child object is enclosed by a parent object

    // Person{Adress{}, Contact{}}
    //ShoppingCart{Item{}, Payment{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 20,
    isStudent: true,
    hobbies: ["Cooking", "Joking", "Karate"],
    address: {
        street: "123 Ocean Ave",
        city: "Bikini Bottom",
        country: "Ocean"
    }
}

console.log("Full Name:", person.fullName);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);
console.log("Hobbies:", person.hobbies.join(", "));
console.log("Address:", `${person.address.street}, ${person.address.city}, ${person.address.country}`);


class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

const personA = new Person("Spongebob Squarepants", 20, "123 Ocean Ave", "Bikini Bottom", "Ocean");
console.log("Person A:", personA);

const personB = new Person("Patrick Star", 22, "456 Rock St", "Bikini Bottom", "Ocean");
console.log("Person B:", personB);

// ================ Arrays of Objects ==================
const fruits = [
    {name: "Apple", color: "Red", price: 1.2},
    {name: "Banana", color: "Yellow", price: 0.5},
    {name: "Orange", color: "Orange", price: 0.8},
    {name: "Grapes", color: "Purple", price: 2.0},
    {name: "Mango", color: "Yellow", price: 1.5}
];

console.log("Fruits List:");
fruits.forEach(fruit => {
    console.log(`${fruit.name}: Color = ${fruit.color}, Price = $${fruit.price}`);
});

fruits.push({name: "Pineapple", color: "Brown", price: 3.0});
console.log("After adding Pineapple:", fruits);

const fruitNames = fruits.map(fruit => fruit.name);
console.log("Fruit Names:", fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
console.log("Yellow Fruits:", yellowFruits);