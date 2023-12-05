let form = document.querySelector("form");
let input = document.querySelector("input");
let end = document.querySelector("end");

function getWeather(curCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((req) => req.json())
    .then((data) => console.log(data));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeather(input.value);
});
