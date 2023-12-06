let id = new URLSearchParams(window.location.search).get("id");
console.log(new URLSearchParams(window.location.search));
const BASE_URL = "https://fakestoreapi.com/products";
let body = document.querySelector(".body");

console.log(id);

async function getData(endpoint = "", id) {
  let response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
  //   drawList(response.data);
  console.log(response.data);
  let element = response.data;
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
        <button" class="btn btn-primary button-back" onclick=back()>GO BACK</button>
      </div>
    </div>
</div>
    `;
}

getData("", id);

function back() {
  window.history.back();
}
