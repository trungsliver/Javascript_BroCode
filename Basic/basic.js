console.log(`hello`)

// popup alert (global)
// alert(`alert 1`)
// window.alert(`alert 2`)

// Variables - Biến số dùng để lưu trữ giá trị, có thể thay đổi được
    // var: function scope (or global)
    // let: block scope (local)
if (true) {
    var a = 10;
    let b = 20;
}
console.log("a =", a); // 10
// console.log("b =", b); // Error: b is not defined

// Constants - Hằng số, không thể gán lại giá trị (block scope)
const PI = 3.14;
console.log("PI =", PI);
// PI = 3.14159; // Error: Assignment to constant variable.



// Data Types
    // Primitive types (dữ liệu nguyên thủy):
        // String: Chuỗi ký tự
let name = "MindX";
        // Number: Số (cả số nguyên và số thực), có cả Infinity và NaN
let age = 5;
        // Boolean: true hoặc false
let isStudent = false;
        // Null: đại diện cho "không có giá trị" - thường dùng để xóa/reset giá trị
let emptyValue = null;
        // Undefined: đại diện cho "giá trị chưa được gán"
let notAssigned;
        // Symbol: đại diện cho một giá trị duy nhất và không thể thay đổi (ES6)
        // BigInt: đại diện cho số nguyên lớn hơn giới hạn của Number (ES11)

    // Non-primitive types (dữ liệu phức tạp):
        // Array: tập hợp các giá trị được lưu trữ theo chỉ mục (index)
let numbers = [1, 2, 3, 4, 5];
        // Function: khối mã có thể tái sử dụng, có thể nhận tham số và trả về giá trị
function add(x, y) {
    return x + y;
}
        // Object: tập hợp các cặp key-value (bao gồm cả Array và Function)
let student = {
    name: "Alice",
    age: 20,
    isStudent: true,
    subjects: ["Math", "Science", "English"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Cách chuyển đổi kiểu dữ liệu
    // Xác định kiểu dữ liệu
console.log(typeof name);          // string
console.log(typeof age);           // number
console.log(typeof isStudent);     // boolean
console.log(typeof emptyValue);    // object (đặc biệt null có kiểu là object do lỗi thiết kế của JS)
console.log(typeof notAssigned);  // undefined
console.log(typeof numbers);      // object (mảng là một loại đối tượng)
console.log(typeof add);         // function
console.log(typeof student);     // object
    // chuyển đổi kiểu dữ liệu
let x1 = "pizza";
let x2 = "pizza";
let x3 = "pizza";
x1 = Number(x1);   // chuyển thành số
x2 = Boolean(x2);  // chuyển thành boolean
x3 = String(x3);  // chuyển thành chuỗi
console.log(typeof x1, x1);          // NaN
console.log(typeof x2, x2);       // true
console.log(typeof x3, x3);        // "pizza"

// String Methods
let str = "Hello, MindX!";
    // length: độ dài chuỗi
console.log("Length:", str.length);
    // toUpperCase(): chuyển chuỗi thành chữ hoa
console.log("Uppercase:", str.toUpperCase());
    // toLowerCase(): chuyển chuỗi thành chữ thường
console.log("Lowercase:", str.toLowerCase());
    // charAt(index): lấy ký tự tại vị trí index
console.log("Character at index 7:", str.charAt(7));
console.log("Character at index 7:", str[7]);
    // indexOf(substring): tìm vị trí xuất hiện đầu tiên của substring
console.log("Index of 'MindX':", str.indexOf("MindX"));
    // concat(...strings): nối chuỗi
let str2 = " Welcome to JavaScript.";
console.log("Concatenated String:", str.concat(str2));
    // slice(start, end): cắt chuỗi từ start đến end (không bao gồm end)
console.log("Sliced String:", str.slice(7, 12));

// Toán tử số học - các phép toán
let x = 15;
let y = 4;
console.log('Phép cộng: ', x + y);      // 19
console.log('Phép trừ: ', x - y);       // 11
console.log('Phép nhân: ', x * y);      // 60
console.log('Phép chia: ', x / y);      // 3.75
console.log('Chia lấy dư: ', x % y);    // 3
console.log('Lũy thừa: ', x ** y);      // 50625

// Toán tử gán cộng - gán trừ
let a1 = 20;
a1 += 5;        // Tương đương với: a = a + 5
a1++;           // Tăng giá trị của a1 lên 1
console.log("a1 =", a1);      // 26
let b1 = 20;
b1 -= 5;        // Tương đương với: b = b - 5
b1--;           // Giảm giá trị của b1 xuống 1
console.log("b1 =", b1);      // 14

// Toán tử so sánh - Biểu thức logic
    // So sánh giá trị (= > <)
console.log(10 == 10);              // true
console.log(10 > 5);                // true
console.log(10 <= 5);               // false           
    // Phép AND - &&
console.log(true && true);          // true
console.log(true && false);         // false
    // Phép OR - ||
console.log(true || false);         // true        
console.log(false || false);        // false
    // Phép NOT - !
console.log(!false);                // true
console.log(!true);                 // false
    // ==: So sánh giá trị
console.log(5 == '5');              // true
    // ===: So sánh cả giá trị và kiểu dữ liệu
console.log(5 === '5');             // false

// Câu điều kiện (3 dạng)
    // Dạng thiếu
 age = 20;
if (age >= 18) {
    console.log('Bạn đã đủ 18 tuổi');
}

    // Dạng đủ
let num = 10.2;
if (num % 2 == 0){
    console.log(num + ' là số chẵn');
}
else{
    console.log(num + ' là số lẻ');
}

    // Dạng đa nhánh
let score = 10;
if (0 <= score && score < 5){
    console.log('Yếu');
} else if (5 <= score && score < 6.5){
    console.log('Trung bình');
} else if (6.5 <= score && score < 8){
    console.log('Khá');
} else if (8 <= score && score <= 10){
    console.log('Giỏi');
} else{
    console.log('Nhập sai dữ liệu');
}

// vòng lặp
    // Vòng lặp for
for (let i = 1; i <= 5; i++){
    console.log(i);
}

    // Vòng lặp while
let i = 1
while (i <= 5) {
    console.log(i);
    i++;
}

    // Vòng lặp do while
i = 1;
do{
    console.log(i);
    i++;
} while( i <= 5);

// Mảng - Array
    // Khai báo / khởi tạo (Create)
let students = ['Minh Anh', 'Duc Trung', 'Thiên Phúc', 'Hoàng Long'];
    // Đọc dữ liệu (Read)
console.log('Danh sách sinh viên:', students);
        // Truy cập phần tử bằng chỉ mục (index)
console.log('Phần tử đầu tiên:', students[0]);
console.log('Phần tử thứ hai:', students[1]);
console.log('Số lượng phần tử:', students.length);
        // Duyệt mảng 
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
    // Cập nhật dữ liệu (Update)
        // thêm phần tử
students.push("Hà");        // thêm vào cuối mảng
students.unshift("Minh");   // thêm vào đầu mảng
console.log('Danh sách sinh viên:', students);
        // sửa phần tử
students[2] = 'Ngọc Trinh';
console.log('Danh sách sinh viên:', students);
    // xóa phần tử
students.splice(2, 1); // xóa phần tử tại vị trí 2 
console.log("Sau khi xóa:", students);
students[1] = null; // hoặc undefined
console.log('Danh sách sinh viên:', students);
    // sắp xếp
students.sort();    // sắp xếp theo thứ tự tăng dần (A-Z)
console.log("Sau khi sort A-Z:", students);
students.reverse(); // đảo ngược thứ tự
console.log("Sau khi reverse:", students);

// Hàm - function
    // Cách khai báo hàm thông thường
function sayHello() {
  console.log("Hello, world!");
}
sayHello();

    // Hàm có tham số
function greet(name) {
  console.log("Xin chào, " + name + "!");
}
greet("Trung");

    // Hàm có giá trị trả về
function add(a, b) {
  return a + b;
}
console.log("Tổng =", add(5, 3));

// Arrow Function (ES6) - lambda function
    // Cú pháp cơ bản
const divide = (a, b) => a / b;
console.log("Thương =", divide(10, 2));

    // Arrow function có nhiều câu lệnh
const printSum = (x, y) => {
  const sum = x + y;
  console.log("Tổng =", sum);
};
printSum(6, 9);

    // Arrow function không có tham số
const sayHi = () => console.log("Hi!");
sayHi();