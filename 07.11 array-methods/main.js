// let num = [1, 2, 3, 5, 6, 7, 8];
// let teks = num.filter((elem) => elem % 2 === 1);
// console.log(teks);

// let nums = [-1, 0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
// let numbers = nums.filter((elem) => {
//   return elem <= 10 && elem > 0;
// });
// console.log(numbers);

// 2

// const users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//   },
// ];

// let userName = users.map((elem) => (`${elem.first_name} ${elem.last_name}`));

// console.log(userName);

// 3

// const persons = [
//     { name: "Akif", age: 25 },
//     { name: "Aysu", age: 32 },
//     { name: "Ali", age: 35 }
// ];

// let firstPerson = persons.find((elem)=>elem.age>30);
// console.log(firstPerson);
// let firstPerson = persons.findIndex((elem)=>elem.age>30);
// console.log(firstPerson);

// 4

// const array1 = [1, 4, 9, 16];

// let arraySquare = array1.map((elem) => elem ** 2);

// console.log(arraySquare);


// 5

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log(animals.slice());
// Gözlənilən çıxış: ["camel", "duck", "elephant"]

console.log(animals.slice());
// Gözlənilən çıxış: ["camel", "duck"]

console.log(animals.slice());
// Gözlənilən çıxış: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice());
// Gözlənilən çıxış: ["duck", "elephant"]

console.log(animals.slice());
// Gözlənilən çıxış: ["camel", "duck"]

console.log(animals.slice());
// Gözlənilən çıxış: ["ant", "bison", "camel", "duck", "elephant"]