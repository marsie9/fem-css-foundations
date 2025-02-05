let nav = document.querySelector(".nav");
let menuIcon = document.querySelector(".header__menu");
let closeIcon = document.querySelector(".header__close-menu");
let body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menuIcon.classList.add("header__menu--hide");
  closeIcon.classList.add("header__close-menu--visible");
  body.classList.add("body--no-overflow");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menuIcon.classList.remove("header__menu--hide");
  closeIcon.classList.remove("header__close-menu--visible");
  body.classList.remove("body--no-overflow");
});
