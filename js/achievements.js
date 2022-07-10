let _MAIN = document.querySelector(".main1"),
  N = +_MAIN.style.getPropertyValue("--n");

let k = +_MAIN.style.getPropertyValue("--k");

addEventListener("click", (e) => {
  let _t = e.target;

  if (_t.classList.contains("nav"))
    _MAIN.style.setProperty("--k", (k = (k + 1) % N));
});

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", function() {
    container.classList.toggle("active");
})

const navbar = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
})

const main = document.querySelector(".achievements");
main.addEventListener("click", function() {
    container.classList.toggle("active");
    navbar.classList.toggle("active");
})
