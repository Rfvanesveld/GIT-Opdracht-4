// let tenfold = ([1, 4, 3, 6, 9, 7, 11])

// tenfold.forEach(function (element, index, array) {
//     array[index] = element * 10;
// })

// console.log(tenfold)


// OF .........................................................
// OF .........................................................

// var array = [ 23, 67, 120, 170, 200, 212, 350 ]


function tenfold(array) {
    var newArray = [];
    array.forEach(function (element) { newArray.push(element * 10) });
    return newArray;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// // result should be [10, 40, 30, 60, 90, 70, 110]