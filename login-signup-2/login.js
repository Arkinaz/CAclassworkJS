let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let iElem = document.querySelector("i");
let arr = JSON.parse(localStorage.getItem("users"));

form.addEventListener("submit", function (params) {
  params.preventDefault();
  let item = arr.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );
  if (item) {
    window.location = "home.html";
    localStorage.setItem("name", JSON.stringify(item.name));
  } else {
    alert("error");
    if (allInputs[0].value === "" || allInputs[1].value === "") {
      alert("error");
    }
  }

  allInputs.forEach((elem) => (elem.value = ""));
});

iElem.addEventListener("click", function () {
  if (iElem.className === "fa-regular fa-eye") {
    iElem.className = "fa-regular fa-eye-slash";
    allInputs[1].type = "text";
  } else {
    iElem.className = "fa-regular fa-eye";
    allInputs[1].type = "password";
  }
});
