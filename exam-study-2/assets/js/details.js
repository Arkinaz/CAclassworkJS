let details = document.querySelector(".details");
const BASE_URL = "http://localhost:9000";
let id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  let resp = await axios(`${BASE_URL}/products/${id}`);
  let e = resp.data;
  details.innerHTML = `<div class="box">
  <img
    src="${e.imgUrl}"
    alt="${e.imgUrl}"
  />
  <div><h1>${e.title}</h1>
  <p>${e.desc}</p></div>
</div>`;
}

getData();
