const total1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

let bigSum1 = total1.reduce((currentbigSum1, item1) => {
    return item1 + currentbigSum1
}, 0)


console.log(bigSum1)
// result should be 1118

// OF .........................................................
// OF .........................................................



const total2 = [];

let bigSum2 = (total2) => total2.reduce((currentbigSum2, item2) => {
    return item2 + currentbigSum2
})


console.log(bigSum2([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))







