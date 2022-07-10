const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", function() {
    container.classList.toggle("active");
})

const navbar = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
})

const main = document.querySelector(".home");
main.addEventListener("click", function() {
    container.classList.toggle("active");
    navbar.classList.toggle("active");
})
