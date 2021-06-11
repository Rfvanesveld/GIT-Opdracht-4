let numbersArray = ([1, 4, 3, 6, 9, 7, 11])

containsNumberBiggerThan10 = numbersArray.some((item) => {
    return item > 10;
})

console.log(containsNumberBiggerThan10)
// result should be true

// OF .........................................................
// OF .........................................................

let numbersArray2 = ([1, 4, 3, 6, 9, 7, 11])

const containsNumberBiggerThan10A = (currentValue) => currentValue > 10;

console.log(numbersArray2.some(containsNumberBiggerThan10A))
// result should be true


//.............................................................
//.............................................................


let numbersArray1 = ([1, 2, 1, 2, 1, 2])

containsNumberBiggerThan10B = numbersArray1.some((item) => {
    return item > 10;
})

console.log(containsNumberBiggerThan10B)
// result should be false


// OF .........................................................
// OF .........................................................


let numbersArray3 = ([1, 2, 1, 2, 1, 2])

const containsNumberBiggerThan10D = (currentValue) => currentValue > 10;

console.log(numbersArray3.some(containsNumberBiggerThan10D))
// result should be false