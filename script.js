const form = document.getElementById("surveyForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const opinion = document
        .getElementById("opinion")
        .value.trim();

    const online = document.querySelector(
        'input[name="online"]:checked'
    );

    const platforms = document.querySelectorAll(
        'input[name="platform"]:checked'
    );


    if (name.length >= 20) {
        alert("Họ tên phải bé hơn 20 ký tự!");
        return;
    }


    if (!online) {
        alert("Vui lòng chọn Có hoặc Không!");
        return;
    }


    if (platforms.length === 0) {
        alert("Vui lòng chọn ít nhất một nền tảng!");
        return;
    }

    if (opinion.length < 20) {
        alert("Ý kiến khác phải có ít nhất 20 ký tự!");
        return;
    }


    console.log("Họ tên:", name);
    console.log("Bạn thích học online:", online.value);

    let danhSachNenTang = [];

    platforms.forEach(function(item) {
        danhSachNenTang.push(item.value);
    });

    console.log(
        "Nền tảng:",
        danhSachNenTang.join(", ")
    );

    console.log("Ý kiến khác:", opinion);


    document.getElementById("successMessage").textContent =
        "Đánh giá thành công!";

});