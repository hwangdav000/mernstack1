// map is a data structure used to create objects and arrays with different types of keys 
// special kind of collection in ES6 to set iterables even with non primitive keys unlike other collections (JSON)
// Allows us to use a lot of methods to get set delete and do other operations without much pain
// insertion order so the fetch is alwasys easy compared to other collections

let myMap = new Map();

let keyString = 'a string', keyObj={},keyFunc=function(){},keyNum = 2000;

// myMap.set(keyString, "String is key for this")
// myMap.set(keyObj, "obj is key for this")
// myMap.set(keyFunc, "function is key for this")
// myMap.set(keyNum, "number is key for this")

// console.log(myMap.entries())

// console.log(myMap.get(keyString))
// console.log(myMap.get(keyFunc))
// console.log(myMap.get({})) // undefined, reference 
// console.log(myMap.get(keyNum))

// myMap.delete(2000)

// console.log(myMap.entries())

// myMap.clear()

// console.log(myMap.entries())

// when we need a iterable / collection with unique values
// Set : This maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["David N", "Wanda" , "Otoi"])

console.log(StudentSet.entries()) // similar to key val pair

console.log(StudentSet.add("Sierra"))
console.log(StudentSet.add("David N"))

console.log(StudentSet.entries())

console.log(StudentSet.has("David N"))
console.log(StudentSet.has("David"))