let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
const BASE_URL = "http://localhost:3000";
let id = new URLSearchParams(window.location.search).get("id");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: allInputs[0].value,
    description: allInputs[1].value,
    imgUrl: allInputs[2].value,
    isFaved: false,
  };
  if (
    allInputs[0].value !== "" &&
    allInputs[1].value !== "" &&
    allInputs[2].value !== ""
  ) {
    if (!id) {
      axios.post(`${BASE_URL}/products`, obj);
      allInputs.forEach((e) => (e.style.border = "none"));
      window.location = "home.html";
    } else {
      -axios.patch(`${BASE_URL}/products/${id}`, obj);
      window.location = "home.html";
    }
  } else {
    allInputs.forEach((e) => (e.style.border = "1px solid red"));
  }
});

async function getData() {
  let resp = await axios.get(`${BASE_URL}/products/${id}`);
  let e = resp.data;
  allInputs[0].value = e.title;
  allInputs[1].value = e.description;
  allInputs[2].value = e.imgUrl;
}

id && getData();
