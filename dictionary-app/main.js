let meaning = document.querySelector(".meaning");

async function getData(word) {
  let response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  let data = response.data;
  console.log(data);
  drawList(data);
}

let form = document.querySelector("form");
let search = document.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(search.value);
});

function drawList(data) {
  meaning.innerHTML = "";
  data.forEach((el) => {
    meaning.innerHTML += `<div>
  <div class="head">
    <p>${el.word} <span class="color">${
      el.phonetics[1]?.text ? el.phonetics[1].text : "/----/"
    }</span></p>
    <i class="fa-solid fa-volume-off" onclick=playAudio(this)><audio src="${
      el.phonetics[0]?.audio
    }"></audio></i>
  </div>
  <div class="bottom">
    <div class="definition">
      Definotion <span class="color">(${el.meanings[0].partOfSpeech})</span>
    </div>
    <span class="color">${el.meanings[0].definitions[0].definition}</span>
  </div>
</div>`;
  });
}

function playAudio(icon) {
  icon.querySelector("audio").play();
  if (icon.className == "fa-solid fa-volume-off") {
    icon.className = "fa-solid fa-volume-high";
  } else if ((icon.className == "fa-solid fa-volume-high")) {
    icon.className = "fa-solid fa-volume-off";
  }
}
search.addEventListener("input", function (e) {
  meaning.innerHTML = "";
});
