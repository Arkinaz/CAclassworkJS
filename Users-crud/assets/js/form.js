const BASE_URL = "http://localhost:8000/users";
let id = new URLSearchParams(window.location.search).get("id");
let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newDate = new Date();
  let obj = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
    email: allInputs[2].value,
    date: newDate.toLocaleString(),
    userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
  };

  if (
    allInputs[0].value !== "" &&
    allInputs[1].value !== "" &&
    allInputs[2].value !== ""
  ) {
    if (!id) {
      fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      });
      window.location = "home.html";
    } else {
      fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      });
      window.location = "home.html";
    }
  } else {
    alert("empty imput");
  }
});

async function getData() {
  let response = await fetch(`${BASE_URL}/${id}`);
  let data = await response.json();
  allInputs[0].value = data.name;
  allInputs[1].value = data.surname;
  allInputs[2].value = data.email;
}

id && getData();
