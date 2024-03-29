//March - MERNStack Session - Assessment Number 1
//Q1. Create a file with name basics and show all the features that you know about javascript

// 1 javascript types : number, string, boolean, undefined, null, object
console.log("Question 1")
var hello = "hello world" // string
hello1 = true // boolean
hello2 = undefined // undefined
hello3 = null // null , when getting the type it will be object
hello4 = {} // object
console.log(typeof hello3)

// 2 comparison 
console.log("comparison")
a = 1 // declaration
b = 1=="1" // comparison with value 
c = 1==="1" // comparison with value and type 
console.log(a) // 1
console.log(b) // true
console.log(c) // false


// 3 hoisting 
console.log(hoist_var) // this will get undefined 
console.log(hoist_func()) // this will hello hoist
var hoist_var = "hello hoist"

function hoist_func() {
    console.log("hello hoist")
}

// 4 functions
// 4.1. named function 
function A (a) {
    console.log(a)
}

// 4.2. function expression
var f = function (a,b) {
    return a*b
};

//4.3. IIFE
(function () {
    console.log("IIFE");
})();

//4.4. Constructor
function getArea(length, width) {
    this.length = length,
    this.width = width,
    this.area = function() {
        return length*width
    }
}

// 5. callback stack
// get use a function within a function
function callback(a, b) {
    console.log("parameters are " + a + " and " + b)
}
function getCallback(par1, par2, callback) {
    callback(par1, par2)
}

// 6. closures - used for encapsulation, can choose what var we want to make public
function Parent(userName) {
    var name = "David"
    var accountBalance = "$20000" // public
    var accountPassword = "340908fkj" // private 

    var child = function (getBalance) {
        if (getBalance && name==userName) {
            return {
                accountBalance : accountBalance
            }
        }
    }

    return child;
}
var objA = Parent("David")
console.log(objA(true)) // get account balance

// 7. nested function
// nested function can call functions in sequence

var number1 = 20;

function A(a) {

    return function B(b) {
        return a + b
    }
}

var objA = A(5) // returns function B
var result = objA(10) 

console.log(result) // get 15
// chain execution
console.log(objA(10)) // get 15 

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
console.log("Question 2")
var hello = "Robert "
console.log("value: " + hello + " type: " + typeof hello)
hello = .0266
console.log("value: " + hello + " type: " + typeof hello)
hello = false
console.log("value: " + hello + " type: " + typeof hello)
hello = {myname : "Test Me"}
console.log("value: " + hello + " type: " + typeof hello)
hello = 25166665
console.log("value: " + hello + " type: " + typeof hello)
hello = undefined
console.log("value: " + hello + " type: " + typeof hello)
hello = true
console.log("value: " + hello + " type: " + typeof hello)
hello = "Robert Jr."
console.log("value: " + hello + " type: " + typeof hello)
hello = null 
console.log("value: " + hello + " type: " + typeof hello)
hello = {}
console.log("value: " + hello + " type: " + typeof hello)
hello = -32767
console.log("value: " + hello + " type: " + typeof hello)

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
console.log("Question 3")
function userInfo(firstName, lastName, age) {
    console.log(firstName, lastName , age)
}
var objUser = userInfo("David", "Hwang", 25)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
console.log("Question 4")
function add(a, b, c) {
    return a+b+c
}
console.log(add(2,3,4)) // adds all the number
console.log(add(2)) // for b and c var is undefined so get NaN which is not a number cannot add 2 with b and c
console.log(add("first", 2, "three")) // string concatenation

//Q5. Give me an example of your choice on closure, hoisting, constructor function, each.
// closure
function Parent(userName) {
    var name = "David"
    var accountBalance = "$20000" // public
    var accountPassword = "340908fkj" // private 

    var child = function (getBalance) {
        if (getBalance && name==userName) {
            return {
                accountBalance : accountBalance
            }
        }
    }

    return child;
}
var objA = Parent("David")
console.log(objA(true)) // get account balance

// hoisting
console.log(hoist_var) // this will get undefined 
console.log(hoist_func()) // this will hello hoist
var hoist_var = "hello hoist"

function hoist_func() {
    console.log("hello hoist")
}

// constructor
function getArea(length, width) {
    this.length = length,
    this.width = width,
    this.area = function() {
        return length*width
    }
}
var areaObj = new getArea(2,5)
console.log(areaObj.area())


//Optional Question - what will the following code output? why?
// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }
// this is the output
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined

// by time setTimeout executes loop is already done
// get index 4 as it is array length + 1 , out of array bounds
// since there is no element at index 4 get undefined

