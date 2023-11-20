// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let count = 1;

// let countmultiple = setInterval(() => {
//   console.log(count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(countmultiple);
// }, 4000);

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

// let btn = document.querySelector(".colorChange");
// let text = document.querySelector(".text");
// btn.addEventListener("click", function(){
//   text.innerText = "SALAM!";
//   text.style.color = "green";
// });

// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.

// let text = document.querySelectorAll(".text");
// console.log(text);

// text.forEach((item)=>{console.log(item.innerText);})

// --------------------------------------------------------- TASK 4 ---------------------------------------------------------

// let str = "developer";

// // Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.
// let interval;
// let i = 1;
// interval = setInterval(() => {
//   if (i<=str.length) {
//     str = str.slice(0, i).toLocaleUpperCase()+ str.slice(i);
//     i++;
//     console.log(str);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.

let btn = document.querySelector(".colorChange");
let body = document.querySelector(".body");
btn.addEventListener("click", function () {

    
});
