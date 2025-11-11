// ========== Switch Case ==========
let day = 111
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;  
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}

// =========== Method Chaining ==========
let username = "   sLiVeR     "
    // no methed chaning
let trimmedName = username.trim()
let firstChar = trimmedName.charAt(0)
firstChar = firstChar.toUpperCase()
let restOfName = trimmedName.slice(1)
restOfName = restOfName.toLowerCase()
let finalName = firstChar + restOfName
console.log(finalName)
    // with method chaning
let finalNameChained = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(finalNameChained)

// ========== Strict equality ==========
    // = assignment operator
    // == equality operator (compare if value are equal)
    // === strict equality operator (compare if value and type are equal)
    // != inequality operator
    // !== strict inequality operator

// ========== Spread operator & Rest operator ==========
    // Spread operator: unpacking elements of an array or object
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let combinedArr = [...arr1, ...arr2]
console.log(combinedArr)

let max1 = Math.max(arr1) 
console.log("usual:", max1)  // incorrect, because Math.max expects a list of numbers, not an array
let max2 = Math.max(...arr1)
console.log("correct:", max2)  // correct

    // Rest operator: packing multiple elements into an array
const food1 = "pizza"
const food2 = "hamburger"
const food3 = "sushi"
const food4 = "pasta"
const food5 = "salad"

function getFoodList(...foods) {
    return foods;
}
console.log(getFoodList(food1, food2, food3, food4, food5));

function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5));  

// ===================== Array.map() ==========================
// accepts a callback function and applies that function to each element in an array, then returns a new array
function square(number) {
    return number * number
}
const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(square)
console.log(squareNumbers)

function toUpperCase(name) {
    return name.toUpperCase()
}
const students = ["Spongebob", "Patrick", "Sandy", "Mr. Krabs"]
const upperCaseStudents = students.map(toUpperCase)
console.log(upperCaseStudents)

function formatDate(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
const dates = ["2025-10-01", "2025-11-15", "2025-12-31"]
const formattedDates = dates.map(formatDate)
console.log(formattedDates)

// =================== Array.filter() ========================
// creates a new array with all elements that pass the test implemented by the provided function
function isEven(number) {
    return number % 2 === 0
}   
let evenNumsbers = numbers.filter(isEven)
console.log(evenNumsbers)

function getShortWords(word) {
    return word.length <= 6
}
let words = ["apple", "banana", "cherry", "watermelon", "kiwi", "grape"]
let shortWords = words.filter(getShortWords)
console.log(shortWords)