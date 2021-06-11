// VIA DE .FOREACH METHODE.................................

let doubleArrayValues = ([1, 2, 3])

doubleArrayValues.forEach(function (element, index, array) {
    array[index] = element * 2;
})

console.log(doubleArrayValues)

// OF .....................................................

let doubleArrayValues2 = ([1, 2, 3])

doubleArrayValues2.forEach(function (number, i) {
    doubleArrayValues2[i] *= 2;
})
console.log(doubleArrayValues2)

// OF VIA DE .MAP METHODE..................................

let doubleArrayValues1 = ([1, 2, 3])

let doubledArray = doubleArrayValues1.map(function (element) {
    return element * 2;
})

console.log(doubledArray)

// doubleArrayValues([1, 2, 3]) 
// // result should be [2, 4, 6

