const BASE_URL = "https://api.escuelajs.co/api/v1";
fetch(`${BASE_URL}/products`)
  .then((resp) => resp.json())
  .then((data) => drawList(data));

let divElem = document.querySelector(".products-div");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

function drawList(data) {
  divElem.innerHTML = "";
  data.forEach((element) => {
    divElem.innerHTML += `
    <div class="product">
    <div class="product-image">
      <img src="${element.images[0]}" style="width: 100%" alt="" />
    </div>
    <div class="product-heading">
      <p class="title">${element.title}</p>
      <p class="description">${element.description}</p>
      <span>${element.price}</span>
      <div><button class="deleteBtn" onclick = clickFunk(this,${element.id})>Delete</button></div>
    </div>
    </div>`;
  });
}

function clickFunk(btn, id) {
  if (confirm("Are u sure to delete customer??")) {
    fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    btn.closest(".product").remove();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    title: allInputs[0].value,
    price: allInputs[1].value,
    description: allInputs[2].value,
    categoryId: 1,
    images: [allInputs[3].value],
  };
  fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`${BASE_URL}/products`)
      .then((resp) => resp.json())
      .then((data) => drawList(data));
  });

  allInputs.forEach((item) => (item.value = ""));
});
