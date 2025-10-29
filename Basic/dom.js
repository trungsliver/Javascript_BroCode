// DOM - Document Object Model
    // Cấu trúc mô phỏng trang HTML dưới dạng cây (tree) các nút (node)

    // Lấy phần tử theo id
let header = document.getElementById("myH1");
console.log(header);
    // Lấy phần tử theo class name
let paragraphs = document.getElementsByClassName("myClass");
console.log(paragraphs);
    // Lấy phần tử theo tag name
let divs = document.getElementsByTagName("div");
console.log(divs);
    //querySelectorAll: Lấy tất cả phần tử theo selector
let allParagraphs = document.querySelectorAll(".myClass");
console.log(allParagraphs);
    // querySelector: Lấy phần tử đầu tiên theo selector 
let firstParagraph = document.querySelector(".myClass");
console.log(firstParagraph);
    // innerHTML: Lấy hoặc gán nội dung HTML (bao gồm cả thẻ) bên trong
document.getElementById("myH1").innerHTML = "Hello World";
    // textContent: Lấy hoặc gán nội dung văn bản bên trong (không bao gồm thẻ)
document.getElementById("myP").textContent = "This is a paragraph.";
    // style: Thay đổi kiểu dáng (CSS) của phần tử
document.getElementById("myH1").style.color = "red";
    // setAttribute: Thêm hoặc thay đổi thuộc tính của phần tử
document.getElementById("myH1").setAttribute("class", "headerClass");
    // Tạo phần tử mới
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container");
    // Thêm phần tử vào trang
document.body.appendChild(newDiv);


