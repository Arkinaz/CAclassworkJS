const BASE_URL = "http://localhost:8000/users";
let tBody = document.querySelector("tbody");

async function getData() {
  let response = await fetch(`${BASE_URL}`);
  let data = await response.json();
  drawList(data);
}
getData();
function drawList(data) {
  tBody.innerHTML = "";

  data.forEach((data) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML = `
  <td>${data.id}</td>
  <td>
  <img class="image-pfp" src="${data.userphoto}" alt="">
  </td>
  <td>${data.name}</td>
  <td>${data.surname}</td>
  <td>${data.email}</td>
  <td>${data.date}</td>
  <td>
  <div class="d-flex buttons">
  <a href = "form.html?id=${data.id}" type="button" class="btn btn-success">Edit</a>
  <button type="button" onclick="deleteClick(this,${data.id})" class="btn btn-danger">Delete</button>
  <button type="button" onclick="addFavs(${data.id})" class="btn btn-primary">Add to favs</button>
  </td><div/>
  `;
    tBody.append(trElem);
  });
}

function deleteClick(btn, id) {
  if (confirm("are u sur to delet?")) {
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    btn.querySelector("tr");
  }
}

function addFavs(id) {
  // window.location = "faw.html";
  const BASE_URL = "http://localhost:8000/users";
  let arr = JSON.parse(localStorage.getItem("faved")) ?? [];
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let element = arr.find((elem) => elem.id === data.id);
      if (element) {
        alert("already faved");
      } else {
        localStorage.setItem("faved", JSON.stringify(data));
      }
    });
}
