// Behaves as the snapshot or lookahead of the javascript code present, and gives behavior of partial compilation
// It happens when we try to use a function or variable before its declaration
// 1. Variable Hoisting - Variable egets an undefined value
// 2. Functional Hoisting - Function gets hoisted with definition

console.log(myVar)
//console.log(myVar()) //error: function expressions do not hoist with definition
//console.log(PrintName("whats in the name")) // can be executed

var myVar = "assign a name"

myVar = function PrintName(name) {
    console.log(name)
}

function PrintName(name) {
    console.log(name)
}