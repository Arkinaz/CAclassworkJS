let id = new URLSearchParams(window.location.search).get("id");
let favs = document.querySelector(".details");
const BASE_URL = "http://localhost:3000";

let data = axios.get(`${BASE_URL}/products/${id}`).then((resp) => {
  let e = resp.data;

  favs.innerHTML = `<div class="box">
  <div class="img">
    <img
      src="${e.imgUrl}"
      alt="${e.title}"
    />
  </div>
  <div class="bottom">
    <h1>${e.title}</h1>
    <span
      >${e.description} </span
      >
    <div class="buttons">
      <button class="green-btn" onclick="window.history.back()">Go Back</button>
     
    </div>
  </div>
</div>`;
});
