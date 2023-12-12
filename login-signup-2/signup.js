let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let iElem = document.querySelector("i");
let arr = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (params) {
  params.preventDefault();
  let obj = {
    name: allInputs[0].value,
    email: allInputs[1].value,
    password: allInputs[2].value,
  };
  let bool = arr.some(
    (item) =>
      item.email === allInputs[1].value || item.name === allInputs[0].value
  );
  if (!bool) {
    arr.push(obj);
    localStorage.setItem("users", JSON.stringify(arr));
    window.location = "login.html";
  } else {
    if (
      allInputs[0].value === "" ||
      allInputs[1].value === "" ||
      allInputs[2].value === ""
    ) {
      alert("error");
    }
  }
  allInputs.forEach((elem) => (elem.value = ""));
});

iElem.addEventListener("click", function () {
  if (iElem.className === "fa-regular fa-eye") {
    iElem.className = "fa-regular fa-eye-slash";
    allInputs[2].type = "text";
  } else {
    iElem.className = "fa-regular fa-eye";
    allInputs[2].type = "password";
  }
});
