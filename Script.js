// OPDRACHT A (PUSH)

let addTheWordCool = function () {
    let nicewords = ['nice', 'awesome', 'tof']
    nicewords.push('cool');
    return nicewords
}
console.log("Add cool:", addTheWordCool());

// OF OP DEZE MANIER

let addTheWordCool1 = function (array) {
    array.push('cool');
    return array
}
console.log("Add cool:", addTheWordCool1(['nice', 'awesome', 'tof']));


// OPDRACHT B

let amountOfElementsInArray = function () {
    let elements = ['appels', 'peren', 'citroenen']
    return elements.length
}
console.log(amountOfElementsInArray())

//   OF OP DEZE MANIER

let amountOfElementsInArray1 = function (array1) {
    return array1.length
}
console.log(amountOfElementsInArray1(['appels', 'peren', 'citroenen']))

// OPDRACHT C

let selectBelgiumFromBenelux = function (array2) {
    return array2[0]
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// OPDRACHT D
let lastElementInArray = function (array3) {
    return array3[array3.length - 1]
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// OPDRACHT E

let presidents = ["Trump", "Obama", "Bush", "Clinton"]

let impeachTrumpSlice = function (array4) {
    return presidents.slice(1)
}
let impeachTrumpSplice = function (array5) {
    return presidents.splice(1)
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// OPDRACHT F

let stringsTogether = function (array5) {
    return array5 = array5.join()
}

console.log(stringsTogether(['Winc ', 'Academy ', 'is ', 'leuk ', ';- }']))
//resultaat: "Winc Academy is leuk ;-}"


// OPDRACHT G

let combineArrays = function (array6, array7) {
    return array6.concat(array7);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
// resultaat: [1,2,3,4,5,6]