let boxes = document.querySelector(".section");
const BASE_URL = "https://restcountries.com/v2/all";
let load = document.querySelector(".show");
let search = document.querySelector(".search");
let select = document.querySelector("select");
let arr;
async function getData() {
  try {
    let resp = await axios.get(`${BASE_URL}`);
    load.className = "hide";
    drawList(resp.data);
    console.log(resp.data);
    arr = resp.data;
  } catch (error) {
    console.log(error);
  }
}
getData();

function drawList(data) {
  boxes.innerHTML = "";
  data.forEach((el) => {
    boxes.innerHTML += `
    <a href="./details.html?${el.name}" class="box">
    <div class="up">
      <img src="${el.flags.png}" alt="" />
    </div>
    <div class="down">
      <h1>${el.name}</h1>
      <div class="texts">
        <div class="text">
          <p class="p">Population:</p>
          <span>${Number(el.population)}</span>
        </div>
        <div class="text">
          <p class="p">Region:</p>
          <span>${el.region}</span>
        </div>
        <div class="text">
          <p class="p">Capital:</p>
          <span>${el.capital}</span>
        </div>
      </div>
    </div>
  </a>
        `;
  });
}

search.addEventListener("input", function (e) {
  let filtered = arr.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawList(filtered);
});

select.addEventListener("change", function (e) {
  let filtered2 = arr.filter((item) =>
    item.region.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawList(filtered2);
  if (e.target.value.toLocaleLowerCase() === "all") {
    drawList(arr);
  }
});

let buttonDrk = document.querySelector(".btn");
let bool = localStorage.getItem("dark-mode");

if (bool === "true") {
  document.body.classList.add("dark");
}
buttonDrk.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.setItem("dark-mode", false);
  }
});
