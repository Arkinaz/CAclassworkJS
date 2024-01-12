const BASE_URL = "http://localhost:9000";
let id = new URLSearchParams(window.location.search).get("id");

let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  let obj = {
    title: allInputs[0].value,
    desc: allInputs[1].value,
    imgUrl: allInputs[2].value,
    isFaved: false,
  };
  e.preventDefault();
  if (
    allInputs[0].value !== "" &&
    allInputs[1].value !== "" &&
    allInputs[2].value !== ""
  ) {
    if (!id) {
      axios.post(`${BASE_URL}/products`, obj);
      window.location = "home.html";
      allInputs.forEach((item) => (item.style.border = "none"));
    } else {
      window.location = "home.html";
      axios.patch(`${BASE_URL}/products/${id}`, obj);
    }
  } else {
    allInputs.forEach((item) => (item.style.border = "1px solid red"));
  }
});

async function getData() {
  let resp = await axios(`${BASE_URL}/products/${id}`);

  let data = resp.data;

  allInputs[0].value = data.title;
  allInputs[1].value = data.desc;
  allInputs[2].value = data.imgUrl;
}
id && getData();
