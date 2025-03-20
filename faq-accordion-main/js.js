document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function () {
        var answer = this.parentElement.querySelector(".answer"); // Tìm phần tử .answer trong cùng .question-box
        answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
        let icon = this.querySelector(".iconDropdown");
        if (icon) { // Kiểm tra nếu icon tồn tại
            icon.src = (icon.src.includes("icon-plus.svg"))
                ? "assets/images/icon-minus.svg"
                : "assets/images/icon-plus.svg";
        }
    });
});