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

let products = document.querySelector(".boxes");
const BASE_URL = "http://localhost:3000";

async function getData() {
  let resp = await axios(`${BASE_URL}/products`);
  console.log(resp.data);
  drawBoxes(resp.data);
}

function drawBoxes(data) {
  products.innerHTML = "";
  data.forEach((e) => {
    products.innerHTML += `
    <div class="box">
    <div class="img">
      <img
        src="${e.imgUrl}"
        alt="${e.title}"
      />
    </div>
    <div class="bottom">
      <h1>${e.title}</h1>
      <span
        >${e.description.slice(0, 10)}...
        <a href="./details.html?id=${e.id}">see more</a></span
      >
      <div class="icons">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-shopping-cart"></i>
      </div>
      <div class="buttons">
        <button class="green-btn">Edit Product</button>
        <button class="green-btn">Delete Product</button>
      </div>
    </div>
  </div>
    `;
  });
}
getData();
