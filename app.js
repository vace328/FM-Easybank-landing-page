const burger = document.getElementById("burger-btn");
const nav = document.getElementById("main-nav");
const burgerBar = document.querySelector("#burger-btn span");

let mobileScreenMenu = false;

burger.addEventListener("click", (e) => {
  nav.classList.toggle("o");
  if (nav.classList.contains("o")) {
    mobileScreenMenu = true;
    // console.log(mobileScreenMenu);
  } else {
    mobileScreenMenu = false;
    // console.log(mobileScreenMenu);
  }
  burgerBar.classList.toggle("x");
});
