// get elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const counterDisplay = document.getElementById("countLabel");

let count = 0;

incrementBtn.onclick = function() {
    count++;
    counterDisplay.textContent = count;
}

decrementBtn.onclick = () => {
    count--;
    counterDisplay.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    counterDisplay.textContent = count;
}
