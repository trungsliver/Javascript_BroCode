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