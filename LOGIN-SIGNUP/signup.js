let formElement = document.createElement("form");
let h1Elem = document.createElement("h1");
let aElem = document.createElement("a");
let pElem = document.createElement("p");
let header = document.createElement("header");
let password = document.createElement("input");
let email = document.createElement("input");
let text = document.createElement("input");
let box = document.createElement("div");
let box2 = document.createElement("div");
let btn = document.createElement("button");
let icn = document.createElement("i");
btn.innerText = "SIGN UP";
icn.classList = "fa-solid fa-eye";
h1Elem.innerText = "SIGN UP HERE!";
pElem.innerText = "Do you have acc?";
aElem.innerText = "LOG IN";
aElem.setAttribute("href", "login.html");
text.setAttribute("placeholder", "Name here");
email.setAttribute("placeholder", "Email here");
password.setAttribute("placeholder", "Password here");

text.setAttribute("type", "text");
email.setAttribute("type", "email");
password.setAttribute("type", "password");

document.body.append(formElement);
formElement.append(h1Elem, text, email, box, btn, box2);
box.append(password, icn);
box2.append(pElem, aElem);

formElement.style.display = "flex";
formElement.style.flexDirection = "column";
formElement.style.alignItems = "center";
formElement.style.justifyContent = "center";
formElement.style.height = "90vh";
formElement.style.gap = "20px";
box2.style.display = "flex";
box2.style.alignItems = "center";
box2.style.gap = "5px";
icn.style.position = "absolute";
icn.style.right = "0";
icn.style.top = "2px";
box.style.position = "relative";

// _________________________________________

formElement.addEventListener("submit", function (e) {
  let arr = JSON.parse(localStorage.getItem("Users")) ?? [];
  let allUsers = JSON.parse(localStorage.getItem("Users"));

  e.preventDefault();
  let obj = {
    userName: text.value,
    email: email.value,
    password: password.value,
    id: Date.now(),
  };
  let bool = allUsers.some(
    (item) => item.email === email.value || item.userName === text.value
  );
  if (text.value !== "" || email.value !== "" || password.value !== "") {
    if (!bool) {
      arr.push(obj);
      localStorage.setItem("Users", JSON.stringify(arr));
      window.location = "home.html";
    } else {
      alert("Username or email is already used!!");
    }
  } else {
    alert("fields are empty!!");
  }
  text.value = "";
  email.value = "";
  password.value = "";
});
icn.addEventListener("click", function () {
  this.classList.toggle("btn");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
