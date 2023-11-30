let formElement = document.createElement("form");
let h1Elem = document.createElement("h1");
let header = document.createElement("header");
let password = document.createElement("input");
let text = document.createElement("input");
let box = document.createElement("div");
let btn = document.createElement("button");
let icn = document.createElement("i");
btn.innerText = "LOG IN";
icn.classList = "fa-solid fa-eye";
h1Elem.innerText = "LOG IN!";

text.setAttribute("placeholder", "Name here");
password.setAttribute("placeholder", "Password here");

text.setAttribute("type", "text");
password.setAttribute("type", "password");

document.body.append(formElement);
formElement.append(h1Elem, text, box, btn);
box.append(password, icn);

formElement.style.display = "flex";
formElement.style.flexDirection = "column";
formElement.style.alignItems = "center";
formElement.style.justifyContent = "center";
formElement.style.height = "90vh";
formElement.style.gap = "20px";
icn.style.position = "absolute";
icn.style.right = "0";
icn.style.top = "2px";
box.style.position = "relative";

// _________________________________________

formElement.addEventListener("submit", function (e) {
  let allUsers = JSON.parse(localStorage.getItem("Users"));
  let bool = allUsers.some(
    (item) => item.password === password.value && item.userName === text.value
  );
  e.preventDefault();

  if (text.value !== "" || password.value !== "") {
    if (bool) {
      localStorage.setItem("username", text.value);
      window.location = "home.html";
    } else {
      alert("Username or email is wrong!!");
    }
  } else {
    alert("fields are empty!!");
  }
});

icn.addEventListener("click", function () {
  this.classList.toggle("btn");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
