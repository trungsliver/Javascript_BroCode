//  ============ MATH ===========
    // Math.PI: Hằng số Pi
console.log("Math.PI:", Math.PI);
    // Math.E: Số Euler
console.log("Math.E:", Math.E);
    // Math.round(): Làm tròn số
console.log("Math.round(4.7):", Math.round(4.7));
    // Math.ceil(): Làm tròn lên
console.log("Math.ceil(4.2):", Math.ceil(4.2));
    // Math.floor(): Làm tròn xuống
console.log("Math.floor(4.7):", Math.floor(4.7));   
    // Math.abs(): Giá trị tuyệt đối
console.log("Math.abs(-7.5):", Math.abs(-7.5)); 
    // Math.sqrt(): Căn bậc hai
console.log("Math.sqrt(16):", Math.sqrt(16));
    // Math.pow(): Lũy thừa
console.log("Math.pow(2, 3):", Math.pow(2, 3));
    // Math.min() và Math.max(): Tìm giá trị nhỏ nhất và lớn nhất
console.log("Math.min(3, 1, 4, 2):", Math.min(3, 1, 4, 2));
console.log("Math.max(3, 1, 4, 2):", Math.max(3, 1, 4, 2));
    // Math.log(): Logarit tự nhiên
console.log("Math.log(10):", Math.log(10));
    // Math.random(): Số ngẫu nhiên từ 0 đến 1
console.log("Math.random():", Math.random());
    // Tạo số ngẫu nhiên trong khoảng nhất định (min đến max)
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
console.log("Random number between 5 and 15:", getRandomInRange(5, 15));
    // Tạo số nguyên ngẫu nhiên trong khoảng nhất định (min đến max)
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 10:", getRandomIntInRange(1, 10));
    // Math.trunc(): Loại bỏ phần thập phân
console.log("Math.trunc(4.9):", Math.trunc(4.9));


// Test random
let randomNum = Math.random() * 100;
console.log("Random number between 0 and 100:", randomNum);

let randomInt = Math.floor(Math.random() * 100);
console.log("Random integer between 0 and 100:", randomInt);