// Thực hành với DOM

    // btn1: Thay đổi nội dung tiêu đề
function changeText(){
    document.getElementById("myH1").innerHTML = "Đã thay đổi tiêu đề!";
}

    // btn2: Hiển thị cảnh báo
function showAlert() {
    alert("Bạn đã nhấn nút!");
}

    // btn3: Thay đổi màu nền
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

    // Thông báo nhập liệu
// let username = window.prompt("Nhập tên của bạn: ");
// console.log("Tên của bạn là:" , username);
// document.getElementById("myH1").innerHTML = `Chào mừng ${username}!`;

document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Chào mừng ${username}!`;
    document.getElementById("myText").value = "";
}

    // Kiểm tra tuổi
document.getElementById("mySubmitAge").onclick = function() {
    let age = parseInt(document.getElementById("myAge").value);
    if (isNaN(age)) { // Kiểm tra nếu không phải số - Not a Number
        alert("Vui lòng nhập một số hợp lệ cho tuổi.");
    } else if (age >= 18) {
        alert("Bạn đã đủ 18 tuổi.");
    } else {
        alert("Bạn chưa đủ 18 tuổi.");
    }
    document.getElementById("myAge").value = "";
}