// TASK 1

// function printFullName(firstName = "lorem",lasstName = "ipsum"){
//     return firstName+lasstName

// }

// console.log(printFullName("Arkinaz ", "Mammadova"));

// TASK 2

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(5, 3));

// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(5, 3));

// let subtruct = (num1, num2) => num1 - num2;
// console.log(subtruct(5, 3));

// let divide = (num1, num2) => num1 / num2;
// console.log(divide(5, 3));

// TASK 3

// let a;

// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     a = num1 + num2;
//   }
//   else if(operator === "*"){
//     a = num1 * num2;
//   }
//   else if(operator === "/"){
//     a = num1 / num2;
//   }
//   else if(operator === "-"){
//     a = num1 - num2;
//   }
//   else{
//     a="operator dogru deyil"
//   }
//   return a;
// }

// console.log(calculator(1,2,"a"));

// TASK 4

let employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];
let employees2 = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" }
];

function filterEmployees(array) {
  let filtered = [];
  for (i = 0; i < array.length; i++) {
   array[i].salary > 65000 &&  filtered.push(array[i]);
    
  }


  return filtered
}

console.log(filterEmployees(employees));
console.log(filterEmployees(employees2));