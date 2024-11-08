document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("h2, p, ul li");
    elements.forEach(function (element, index) {
        element.classList.add("animate-element");
        element.style.animationDelay = "".concat(index * 0.3, "s");
    });
});
