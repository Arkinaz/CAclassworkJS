const BASE_URL = "https://restcountries.com/v2/name";
let buttonDrk = document.querySelector(".btn");
let bool = localStorage.getItem("dark-mode");
let load = document.querySelector(".show");
let nameCountry = new URLSearchParams(window.location.search).get("name");

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

async function getData(name) {
  try {
    let resp = await axios.get(`${BASE_URL}/${name}`);
    load.className = "hide";
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
}
getData(nameCountry);
