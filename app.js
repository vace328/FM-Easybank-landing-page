const body = document.querySelector("body");
const burger = document.getElementById("burger-btn");
const nav = document.getElementById("main-nav");
const burgerBar = document.querySelector("#burger-btn span");

let mobileScreenMenu = false;

burger.addEventListener("click", (e) => {
  nav.classList.toggle("o");
  if (nav.classList.contains("o")) {
    mobileScreenMenu = true;
    // Disable scroll when mobile menu is open
    body.style.overflow = "hidden";
    // console.log(mobileScreenMenu);
  } else {
    mobileScreenMenu = false;
    // Enable scroll when mobile menu is closed
    body.style.overflow = "auto";
    // console.log(mobileScreenMenu);
  }
  burgerBar.classList.toggle("x");
});
