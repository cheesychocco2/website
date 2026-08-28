function changeBackground() {
    document.body.style.backgroundColor = "#333333";
}
function revealName(element) {
    element.classList.add("revealed");

    setTimeout(function () {
        element.classList.remove("revealed");
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".private-name").forEach(function (name) {
        name.addEventListener("click", function () {
            revealName(name);
        });
    });
});
