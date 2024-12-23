
let array = ["ნიკა", "ელენე", 25, 83, "ანი", 62, "ნინი", 512,  "ლევანი", 59];

let num = array.filter(item => typeof item === "number");

console.log(num); 




/*  ---2---
let fruits = ["apple", "pear", "orange"];

fruits.push("banana", "grapefruit");
fruits.unshift("lime");

console.log(`მასივში ელემენტების რაოდენობა:  ${fruits.length}`);

fruits.splice(3,0,"mango")

console.log("მასივი", fruits);
*/


/* ---3---
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];

let arr = array2.map(item => item / 3);
console.log(arr);
*/


/* ---4---
let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);
*/


/* ---5---
let array4 = [1, 2, 3, 4, 5];

array4.splice(2, 1, "three");
console.log(array4);

*/


