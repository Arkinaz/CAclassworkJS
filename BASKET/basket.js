let arrNew = JSON.parse(localStorage.getItem("filtered"));

const boxes = document.querySelector(".boxes");

arrNew.forEach((elem) => {
  boxes.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem">
        <img src="${elem.thumbnail}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${elem.title}</h5>
          <p class="card-text">
            ${elem.description.slice(0, 100)}...
          </p>
          <button class="btn btn-danger" onclick=deleteClick("${
            elem._id
          }")>REMOVE FROM BASKET</button>
        </div>
      </div>
  </div>
    `;
});

function deleteClick(id) {
  let filtered = arrNew.filter((elem) => elem._id !== id);
  arrNew.push(filtered);
  localStorage.setItem("filtered", JSON.stringify(arrNew));
}
