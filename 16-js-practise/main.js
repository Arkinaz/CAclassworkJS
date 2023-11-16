// 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];

// let newArr = [];

// function findPositives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {newArr.push(arr[i])}
//   }
//   return newArr
// }
// console.log(findPositives(arr));

// 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//   let result = "";

//   if (
//     a ** 2 === b ** 2 + c ** 2 ||
//     b ** 2 === c ** 2 + a ** 2 ||
//     c ** 2 === b ** 2 + a ** 2
//   ) {
//     result = `${a}, ${b}, ${c} duzbucaqli ucbucaqdir`;
//   }
//   else{
//     result = `${a}, ${b}, ${c} duzbucaqli ucbucaq deyil`;
//   }

//   return result;
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// let result = webTechs.findIndex((el) => el === el.toLocaleUpperCase());
// console.log(result);

// 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];

// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// let result = webTechs.filter((el) => el === el.toLocaleUpperCase());
// console.log(result);

// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     str = str.toLocaleLowerCase();
//   } else {
//     str = str.toLocaleUpperCase();
//   }
//   return str;
// }

// console.log(reverseCase("MANY THANKS")); //"many thanks"
// console.log(reverseCase("many thanks")); //"MANY THANKS"

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    age: "22",
    uni: "ADA",
    gender: "male",
    salary: "3001",
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    age: "25",
    uni: "GDU",
    gender: "male",
    salary: "200",
  },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
    salary: "300",
  },
  {
    name: "Hikmet",
    surname: "Hesenov",
    age: "22",
    uni: "UNEC",
    gender: "male",
    salary: "320",
  },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "GDU",
    gender: "male",
    salary: "420",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
    salary: "3210",
  },
];

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

// let result = users.filter((el)=>el.uni==="UNEC" && el.surname[0].toLocaleLowerCase()==="r")

// console.log(result);

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

// let result = users.filter((el)=>el.age==="22" && el.name[0].toLocaleLowerCase()==="a")

// console.log(result);

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

let arr = users.map((el) => {
  if (el.gender === "male") {
    return {...el, name:`Mr. ${el.name}`};
  } 
  else {
    return {...el, name:`Mrs. ${el.name}`}
  }
  
});

console.log(arr);

// 2.4.Sort users by age (ascending).

// let result = users.sort((a,b)=>a.age-b.age)

// console.log(result);
