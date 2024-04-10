// var mylet_var = "new Value to Var"
// let mylet_var = "new Value to Let"
// console.log(mylet_var) // error , mylet_var has already been declared (cannot do redeclaration)

//for - array[1].key
//foreach -  (this)
// 1. loops through length - (for) 
// 2. to access the value we pass key as index for current object array[1].key dictionary object which to do the loop, (this) - foreach
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// numbers.forEach(function(number) {
//     console.log(number);
// });

// for in loop - iterates eover the property value, basicaly meant for json objects with key values
// let person = {fname: "John", lname: "Doe", age:25, address : {}}
// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) { // confirm that key is present
//         const element = person[key];
//         console.log(`${key} ${element}`)
//     }
// }

// let arr = [3,5,7] // 0:3, 1:5, 2:7
// // arr[3] = "Mayuri"
// arr.newKey = "Sierra"

// for (const key in arr) {
//     console.log(`${key}: ${arr[key]}`);
// }

// for of loop : mainly for arrays , iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For of loop")
let cars = ['BMW', 'Volvo', 'Mini'];
//cars[2] = 'Toyota' // can do
//cars[4] = 'Toyota' // get undefined then toyota
// cars.newCar = "Tesla" // Array with key not based on index for of loop will not support for that value
console.log(cars)

for (const car of cars) { // strictly made for arrays doesn't get other type of index
    console.log(" " + car)
}
// so for objects use for in loop if you have simple array can use for of loop