let result = document.getElementById("result");
let val1 = document.getElementById("value1");
let val2 = document.getElementById("value2");

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");
let reset = document.querySelector(".reset");

let count = 0;

add.addEventListener("click", function () {
  result.innerText = Number(val1.value) + Number(val2.value);
  reset.removeAttribute("disabled");
});

sub.addEventListener("click", function () {
  result.innerText = Number(val1.value) - Number(val2.value);
  reset.removeAttribute("disabled");
});

multi.addEventListener("click", function () {
  result.innerText = Number(val1.value) * Number(val2.value);
  reset.removeAttribute("disabled");
});

divi.addEventListener("click", function () {
  result.innerText = Number(val1.value) / Number(val2.value);
  reset.removeAttribute("disabled");
});

reset.addEventListener("click", function () {
  result.innerText = count;
  val1.value = " ";
  val2.value = " ";
  reset.setAttribute("disabled", "null");
});
