// -- Attributes -- //
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const nav_li = document.querySelectorAll(".nav-links li")

// -- Functions -- //

// -- Code Starts Here -- //
burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
})