let keys = document.querySelectorAll(".key");
let words = document.querySelector(".words");

window.addEventListener("keydown", function (e) {
  keys.forEach((element) => {
    if (element.textContent == e.key) {
      element.style.backgroundColor = "green";
      element.style.transition = "0.3s";
      element.style.transform = "scale(1.5)";
      words.textContent += e.key;
    }
  });
});
window.addEventListener("keyup", function () {
  keys.forEach((element) => {
    element.style.backgroundColor = "darkcyan";
    element.style.transition = "0.3s";
    element.style.transform = "scale(1)";
  });
});
