function update(element) {

    console.log("Đã di chuột vào xe");

    console.log("Tên xe:", element.dataset.name);

    console.log("Danh mục:", element.dataset.category);

    console.log("Mô tả:", element.dataset.description);

    console.log("Hình ảnh:", element.dataset.image);


    // Lấy khu vực hiển thị ảnh lớn
    let image = document.getElementById("image");


    // Thay đổi hình nền
    image.style.backgroundImage =
        "url('" + element.dataset.image + "')";


    // Thay đổi tên xe
    document.getElementById("car-name").innerHTML =
        element.dataset.name;


    // Thay đổi danh mục
    document.getElementById("car-category").innerHTML =
        element.dataset.category;


    // Thay đổi mô tả
    document.getElementById("car-description").innerHTML =
        element.dataset.description;
}



function undo() {

    console.log("Đã di chuột ra khỏi xe");


    // Trở về hình nền ban đầu
    document.getElementById("image").style.backgroundImage =
        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.05))";


    // Trở về nội dung ban đầu
    document.getElementById("car-category").innerHTML =
        "BMW COLLECTION";


    document.getElementById("car-name").innerHTML =
        "Di chuột qua một mẫu xe bên dưới";


    document.getElementById("car-description").innerHTML =
        "Khám phá các dòng xe BMW để xem thông tin chi tiết.";
}