// Spread operator ..., spread elements of object or array

let arrayOfCities= ["Rome", "New York" , "New Delhi", "London"]

console.log(...arrayOfCities) // Rome New York New Delhi London

// spread operator used to combine two objects and preserve the immutability of each object
let User = {name : "Anna", age: 25}
let Address = {home: "Somewhere in US", office: "Virtual"}

//let Delivery = {User, Address} // Object.assign need to extract attributes from object to combine

let Delivery = {...User, ...Address} // Preserving the immutability // if we do change after assignment it wont copy to new object
console.log(Delivery)

Address.phone = 8989898

console.log(Delivery) // not reflected here 
console.log(Address) // changed here

// rest - parameter : if we have many parameters which can be clubbed(join) so rest can be used as parameter
// rest parameter will be last parameter

function Sum(a , b, c, d, e) {
    return a + b + c + d + e
}

console.log(Sum(1,2,3,4,5))

// rest is the last parameter of a function which can accept any number of params
function Sum_Large(...numbers) {
    let sum = 0;
    sum = numbers.reduce((prevVal, currVal) => prevVal + currVal, 0)
    return sum
}

let numList = [1,2,3,4,5,6,7]
console.log(Sum_Large(...numList))
console.log(Sum_Large.apply(null, numList)) // legacy way by using apply function in js

