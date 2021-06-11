
let numbersArray1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

let isbelow100A = function (currentValue1) {
    return currentValue1 < 100;
}

console.log(numbersArray1.every(isbelow100A))

// OF .........................................................
// OF .........................................................

let array1 = [];
let numberRange = number => number < 1000;
let isBelow100 = (array) => array.every(num => numberRange(num));


console.log(isBelow100([1, 181, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


































// let numbersArray = [];
// // const isBelow100 = (numbersArray) => numbersArray > 1000;
// let isBelow100 = number => number > 100
// let allPositive = numbersArray.some (num => isBelow100 (num))

// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


// let numberRange = number => number < 100;
// let array1 = [];
// let isBelow100 = array1.every(num => numberRange(num));
// console.log(isBelow100([1, 181, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// // result should be: false


