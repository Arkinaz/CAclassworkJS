const BASE_URL = "https://fakestoreapi.com/products";
let btnElec = document.querySelector(".electronics");
let btnJew = document.querySelector(".jewelery");
let btnMen = document.querySelector(".mens-clothing");
let btnWomen = document.querySelector(".womens-clothing");
let body = document.querySelector(".body");

async function getData(endpoint = "") {
  let response = await axios.get(`${BASE_URL}/${endpoint}`);
  drawList(response.data);
}
getData();
function drawList(data) {
  body.innerHTML = "";
  data.forEach((element) => {
    body.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
        <div class="card" style="width: 18rem">
            <img src="${element.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <h5 class="card-title">${element.price}</h5>
              <p class="card-text">
                ${element.description.slice(0, 50)}...
              </p>
              <a href="details.html?id=${element.id}" class="btn btn-primary">DETAILS</a>
            </div>
          </div>
      </div>
          `;
  });
}

btnElec.addEventListener("click", function () {
  getData("category/electronics");
});
btnJew.addEventListener("click", function () {
  getData("category/jewelery");
});
btnMen.addEventListener("click", function () {
  getData("category/men's clothing");
});
btnWomen.addEventListener("click", function () {
  getData("category/women's clothing");
});
