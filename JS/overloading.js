// Polymorphism 
// 1. Overriding - runtime  polymorphism (last function always executes)
// 2. Overloading - compile time polymorphism <same name multiple methods with different params and their types> (no overloading in JS)

// non concurrent - run one after another (waits)
// concurrent - runs simultaneously whichever is done first

PrintData(); // take function over var

var PrintData = function (param1, param2, param3, param4) {
    console.log("4 - Params ", param1, param2, param3, param4)
}

function PrintData(param1) {
    console.log("1 - Param ", param1)
}

PrintData("One")


// function PrintData(param1, param2) {
//     console.log("2 - Param ", param1, param2)
// }

// PrintData("One",  "Two")

// function PrintData(param1, param2, param3) {
//     console.log("3 - Params ", param1, param2, param3)
// }

// PrintData("One",  "Two", "Three") // uses function definition, function over var

// // function PrintData() { // override function , no overloading
// //     console.log("No param")
// // }

// // PrintData()

// // var PrintData = function (param1, param2, param3, param4) {
// //     console.log("4 - Params ", param1, param2, param3, param4)
// // }

// PrintData("One", "Two", "Three", "Four")

