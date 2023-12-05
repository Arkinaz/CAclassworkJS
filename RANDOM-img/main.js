let h1Elem = document.createElement("h1");
let img = document.createElement("img");
// let btn = document.createElement("button");
// let btn2 = document.createElement("button");
let cont = document.querySelector(".container");
let loader = document.querySelector(".loader");

h1Elem.innerText = "RANDOM IMAGE";
// btn.innerText = "STOP";
// btn2.innerText = "CONTUNE";

cont.setAttribute(
  "class",
  "d-flex flex-column gap-3 justify-content-center align-items-center"
);
// btn.setAttribute("class", "btn btn-danger");
// btn2.setAttribute("class", "btn btn-primary");
cont.style.height = "100vh";
h1Elem.style.color = "white";
img.style.borderRadius = "30px";
img.style.width = "400px";
img.style.height = "400px";

document.body.style.backgroundImage =
  "linear-gradient(200deg,blue,purple,pink,orange) ";
cont.append(h1Elem, img);

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

let imgInterval = setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((resp) => resp.json())
    .then((data) => {
      loader.remove();
      img.setAttribute("src", data.message);
    });
}, 60);

// btn2.addEventListener("click", function () {
//     imgInterval= setInterval(() => {
//     fetch(`${BASE_URL}`)
//       .then((resp) => resp.json())
//       .then((data) => {
//         loader.remove();
//         img.setAttribute("src", data.message);
//       });
//   }, 60);
//   btn2.setAttribute("disabled", "null");
// });
// btn.addEventListener("click", function () {
//   clearInterval(imgInterval);
//   btn2.removeAttribute("disabled");
// });
