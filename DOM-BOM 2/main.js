// let button = document.querySelector(".btn");
// console.log(button.parentElement);

// button.addEventListener("click",()=>{
//     button.parentElement.classList.add("bgcolor","size","btn")
//     button.parentElement.style.position="relative"
//     button.style.position="absolute"
// })

// button.addEventListener("click", function () {
// button.parentElement.classList.toggle("bgcolor")

// if(button.innerText==="Light"){
//     button.innerText="Dark"
// }
// else{
//     button.innerText="Light"

// }

// });

// let img = document.querySelector(".img");

//  img.setAttribute("src","IMG-worlds-of-adventure.webp")
//  img.classList.add("size")


// const arr = ["Ganja", "Azerbaydjan", "Goranboy", "Yevlax"];

// let ul = document.querySelector(".ul");
// arr.forEach((elem, i) => {
//   let li = document.createElement("li");
//   li.style.listStyle="none"

//   li.innerText = i +". " +elem;
//   ul.append(li);

//   li.addEventListener("click",()=>{
//     li.remove()
//   })

// });

let header = document.querySelector("header")

let divHeader= document.createElement("div")

let h1Elem = document.createElement("h1")
h1Elem.innerText= "LOGOBAKEY";





divHeader.append(h1Elem)
header.append(divHeader)


