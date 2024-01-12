const BASE_URL = "http://localhost:9000";
let boxes = document.querySelector(".boxes");

async function getData() {
  let resp = await axios(`${BASE_URL}/products`);
  drawCards(resp.data);
}
getData();

function drawCards(data) {
  boxes.innerHTML = "";
  data.forEach((e) => {
    boxes.innerHTML += `<div class="box">
    <img
      src="${e.imgUrl}"
      alt="${e.imgUrl}"
    />
    <h1>${e.title}</h1>
    <p>${e.desc.slice(0, 10)}...<a href="details.html?id=${
      e.id
    }">See more</a></p>
    <div class="buttons"><button class="btn-type-1" onclick="deleteButton(${
      e.id
    },this)">Delete</button>
    <a href="form.html?id=${e.id}" class="btn-type-1">Edit</a></div>
  </div>`;
  });
}

function deleteButton(id, btn) {
  if (confirm("delete???")) {
    axios.delete(`${BASE_URL}/products/${id}`);
    btn.querySelector(".box").remove();
  }
}



