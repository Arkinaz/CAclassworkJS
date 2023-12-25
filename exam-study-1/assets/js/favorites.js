const BASE_URL = "http://localhost:3000";
let favorites = document.querySelector(".favorites");
async function favedProducts() {
  let resp = await axios.get(`${BASE_URL}/products`);
  let faved = resp.data.filter((e) => e.isFaved === true);
  drawBoxes(faved);
}

function drawBoxes(data) {
  favorites.innerHTML = "";
  data.forEach((e) => {
    favorites.innerHTML += `
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
          <i class="fa-solid fa-heart" ></i>
          <i class="fa-solid fa-shopping-cart"></i>
        </div>
      </div>
    </div>
      `;
  });
}

favedProducts();
