let strartBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let result = document.querySelector(".result");
let resetBtn = document.querySelector(".reset");
let incBtn = document.querySelector(".increment-btn");
let decBtn = document.querySelector(".decrement-btn");
let decValBtn = document.querySelector(".decrement-btn-value");
let incValBtn = document.querySelector(".increment-btn-value");
let decInput = document.getElementById("decrement-input");
let incInput = document.getElementById("increment-input");

strartBtn.style.backgroundColor = "green";
strartBtn.style.color = "white";
strartBtn.style.padding = "10px 20px";

stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
stopBtn.style.padding = "10px 20px";

resetBtn.style.backgroundColor = "red";
resetBtn.style.padding = "10px 30px";

incBtn.style.backgroundColor = "teal";
incBtn.style.color = "white";
incBtn.style.padding = "10px 30px";

decBtn.style.backgroundColor = "teal";
decBtn.style.color = "white";
decBtn.style.padding = "10px 30px";

decValBtn.style.backgroundColor = "yellow";
decValBtn.style.border = "none";
decValBtn.style.padding = "10px 20px";

incValBtn.style.backgroundColor = "yellow";
incValBtn.style.border = "none";
incValBtn.style.padding = "10px 20px";

let count = 0;
let interval;

strartBtn.addEventListener("click", () => {
  strartBtn.setAttribute("disabled", "null");
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");

  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 100);
});
stopBtn.addEventListener("click", () => {
  strartBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "null");

  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  strartBtn.removeAttribute("disabled");
  resetBtn.setAttribute("disabled", "null");
  count = 0;
  result.innerText = count;
});

incBtn.addEventListener("click", () => {
  resetBtn.removeAttribute("disabled");
  strartBtn.removeAttribute("disabled");

  clearInterval(interval);
  count += 1;
  result.innerText = count;
});

decBtn.addEventListener("click", () => {
  resetBtn.removeAttribute("disabled");
  strartBtn.removeAttribute("disabled");

  clearInterval(interval);
  count -= 1;
  result.innerText = count;
});

decValBtn.addEventListener("click", () => {
  clearInterval(interval);
  count -= +decInput.value;
  result.innerText = count;
});
incValBtn.addEventListener("click", () => {
  clearInterval(interval);
  count += +incInput.value;
  result.innerText = count;
});
