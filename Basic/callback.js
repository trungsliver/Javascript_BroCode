// callback = a function passed as an argument to another function

    // used to handle asynchronous operations
        // 1. reading files
        // 2. network requests
        // 3. interacting with databases

    // "hey, when you're done, call this next"

// example without callback
function hello() {
    setTimeout(function() {
        console.log('Hello');
    }, 3000);
}

function goodbye() {
    console.log('Goodbye');
}

hello();
goodbye();

// example with callback
function hello2(callback) {
    console.log('Hello2');
    callback();
}

function goodbye2() {
    console.log('Goodbye2');
}

hello2(goodbye2);
