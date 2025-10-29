const myCheckbox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `Checked!`;
    }else{
        subResult.textContent = `Not Checked!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You selected Visa as your payment method.`;
    } else if(mastercardBtn.checked) {
        paymentResult.textContent = `You selected MasterCard as your payment method.`;
    } else if(payPalBtn.checked) {  
        paymentResult.textContent = `You selected PayPal as your payment method.`;
    }else{
        paymentResult.textContent = `No payment method selected.`;
    }
}