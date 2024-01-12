let submenu = document.querySelector(".submenu");

let liElem = document.querySelector(".li-elem");

liElem.addEventListener("mouseenter", function () {
  submenu.style.display = "block";
});
liElem.addEventListener("mouseleave", function () {
  submenu.style.display = "none";
});

let topHeader = document.querySelector("#header-top");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (scrollY > 2) {
    topHeader.style.display = "none";
  } else {
    topHeader.style.display = "block";
  }

  if (scrollY > 200) {
    header.style.position = "fixed";
  } else {
    header.style.position = "static";
  }
});
