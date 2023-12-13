const body = document.querySelector("tbody");
const BASE_URL = "http://universities.hipolabs.com/search?country=turkey";
const search = document.getElementById("search");
const span = document.querySelector(".loader");

async function getData() {
  try {
    span.classList.add("show");
    let response = await fetch(`${BASE_URL}`);
    let data = await response.json();
    console.log(data);
    drawList(data);
  } catch (error) {
  } finally {
    span.classList.remove("show");
  }
}

getData();

function drawList(data) {
  body.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML = `
  <td>${element.name}</td>
  <td>${element.country}</td>
  <td>${element.domains[0]}</td>
  <td>${element.web_pages[0]}</td>
  `;
    body.append(trElem);
  });
}

search.addEventListener("input", function (e) {
  span.classList.add("show");
  fetch(`${BASE_URL}&name=${e.target.value.toLocaleLowerCase()}`)
    .then((response) => response.json())
    .then(
      (data) => {
        drawList(data);
      }
      //   console.log(data)
    )
    .catch()
    .finally(() => span.classList.remove("show"));
});

// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers
// function longestWord(str) {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// function longestWord(str) {
//   return str.split(" ").reduce((acc, curr) => {
//   return  curr.length > acc.length ? (acc = curr) : acc;
//   }, str.split(" ")[0]);
// }
