let search = document.querySelector("#search");
let add = document.querySelector(".add");
let ulElement = document.querySelector("#list");

add.addEventListener("click", function () {
  let liElem = document.createElement("li");
  let spanElem = document.createElement("span");
  let buttonElem = document.createElement("button");

  liElem.style.display = "flex";
  liElem.style.justifyContent = "space-between";
  liElem.style.alignItems = "center";
  liElem.style.padding = "10px 5px";
  liElem.style.margin = "5px";
  liElem.style.backgroundColor = "pink";
  liElem.style.borderRadius = "5px";
  spanElem.style.color = "brown";
  buttonElem.style.backgroundColor = "red";
  buttonElem.style.color = "white";
  buttonElem.style.padding = "10px 5px";
  buttonElem.style.borderRadius = "5px";
  buttonElem.style.border = "none";

  buttonElem.innerText = "Delete";

  if (search.value !== "") {
    spanElem.innerText = search.value;

    liElem.append(spanElem, buttonElem);
    ulElement.append(liElem);
  } else {
    alert("empty input!!!");
  }
  buttonElem.addEventListener("click", function () {
    this.parentElement.remove(liElem);
  });
  search.value = "";
});
