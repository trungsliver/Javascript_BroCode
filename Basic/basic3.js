
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