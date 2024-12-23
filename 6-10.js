/* ----6----
let array5 = [14, 150, 'css', null, 'javascript', 25];

let arr = array5.map(item => {
    if (typeof item === "number") {
        return item ** 2; 
    } else if (typeof item === "string") {
        return item.toUpperCase(); 
    } else {
        return item;
    }
});

console.log(arr);
*/


/* ---8---
let numbers = [12, 23, 34, 45, 95, 56]; 

let sum = numbers.reduce((jami, raoden) => jami + raoden, 0);

console.log(sum);
*/


let info = 'good day';
let day = info.slice(5); 

console.log(day); 
