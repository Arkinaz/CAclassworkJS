let text = document.createElement("h3");
let user = localStorage.getItem("name");

text.innerText = `WELCOME! ${user}`;
document.body.append(text);
document.body.style.display = "flex";
text.style.color = "red";

document.body.style.justifyContent = "center";
