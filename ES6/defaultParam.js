// Default parameters are used to pass and assign in a function where we may or may not be able to pass the values

// ideally want default value to 0
// function Sum(a, b) {
//     console.log(`${a} ${b}`)
//     return a + b
// }

// console.log(Sum(10,9)) // 10,9 -> 19
// console.log(Sum(9)) // 9,undefined -> NaN
// console.log(Sum()) // undefined,undefined -> Nan

// set default of a b to 0
function Sum(a=0, b=0) {
    console.log(`${a} ${b}`)
    return a + b
}
console.log(Sum(10,9)) // 10,9 -> 19
console.log(Sum(9)) // 9,0 -> 9
console.log(Sum()) // 0,0 -> 0