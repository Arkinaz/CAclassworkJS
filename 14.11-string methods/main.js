// TASK 1

// let text = "Java is awesome. Java is fun.";

// function replacementText(str) {
//   let result = str.replaceAll("Java", "Javascript");
//   return result;
// }

// console.log(replacementText(text));

// TASK 2

// function mixUp(a, b) {
//    let result = b.slice(0,2)+a.slice(2) +" "+a.slice(0,2)+b.slice(2);
//    return result
// }

// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// TASK 3

// function verbing(word) {
//   let result = "";
//   if (word.length < 3) {
//     result = word;
//   } else if (word.length > 3 && word.slice(-3) === "ing") {
//     result = word + "ly";
//   } else {
//     result = word + "ing";
//   }
//   return result;
// }

// console.log(verbing("go")); // go
// console.log(verbing("swim")); //swiming
// console.log(verbing("swimming")); //swimmingly

// TASK 4

// function isPalindrome(string) {
//     let result;
//   if (string == string.split("").reverse().join("")) {
//     result = string + " is polidrome";
//   } else {
//     result = string + " is not polidrome";
//   }

//   return result
// }

// console.log(isPalindrome("ollo"));

// TASK 5

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

// function splitIntoChunk(arr, len) {
//   let a = arr.splice(len);
//  let b = arr.splice(-1* len);
//  let result=[];
//  result.push(a,b)

//   return result;
// }


// function splitIntoChunk(arr, len){ 


//   return [[...arr.slice(0, len)], [...arr.slice(len)]];
// }

// console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]


// TASK 6


function longestWord(word){

//     let arr = word.split(" ")
//     let max= arr[0]
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i].length>max.length){
//         max=arr[i]
//     }
//    }

//     return max
    let arr = word.split(" ")

    arr.reduce((acc,curr,i)=> curr.length > acc.length ? curr : acc )
}

console.log(longestWord("Hello word hi programmers"));

//Ən uzun sözü tapın.  ======>> programmers