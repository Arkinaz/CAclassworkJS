let subMenu = document.querySelector(".menu");
let liElem = document.querySelector(".hoisting");
let subMenu2 = document.querySelector(".submenu");
let liElem2 = document.querySelector(".sub-menu");

liElem.addEventListener("mouseenter", function () {
  subMenu.style.visibility = "visible";
});
liElem.addEventListener("mouseleave", function () {
  subMenu.style.visibility = "hidden";
});
liElem2.addEventListener("mouseenter", function () {
  subMenu2.style.opacity = "1";
});
liElem2.addEventListener("mouseleave", function () {
  subMenu2.style.opacity = "0";
});
