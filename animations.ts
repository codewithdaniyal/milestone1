document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h2, p, ul li");

    elements.forEach((element, index) => {
        (element as HTMLElement).classList.add("animate-element");
        (element as HTMLElement).style.animationDelay = `${index * 0.3}s`;
    });
});
