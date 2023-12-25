let products = document.querySelector(".boxes");
const BASE_URL = "http://localhost:3000";

async function getData() {
  let resp = await axios(`${BASE_URL}/products`);
  console.log(resp.data);
  drawBoxes(resp.data);
  arr = resp.data;
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
        <i class="${
          e.isFaved ? "fa-solid fa-heart" : "fa-regular fa-heart"
        }" onclick="isFaved(${e.id})"></i>
        <i class="fa-solid fa-shopping-cart"></i>
      </div>
      <div class="buttons">
        <a href="./form.html?id=${e.id}" class="green-btn">Edit Product</a>
        <button class="green-btn" onclick="deleteBtn(${
          e.id
        },this)">Delete Product</button>
      </div>
    </div>
  </div>
    `;
  });
}
getData();

let search = document.querySelector(".search");

search.addEventListener("input", function (e) {
  let filtered = arr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawBoxes(filtered);
});

function deleteBtn(id, btn) {
  if (confirm("Are u sure to delet this product?")) {
    axios.delete(`${BASE_URL}/products/${id}`);
    btn.querySelector(".box").remove();
  }
}

async function isFaved(id) {
  let resp = await axios.get(`${BASE_URL}/products/${id}`);
  if (resp.data.isFaved === false) {
    axios.patch(`${BASE_URL}/products/${id}`, { isFaved: true });
  } else {
    axios.patch(`${BASE_URL}/products/${id}`, { isFaved: false });
  }
}
