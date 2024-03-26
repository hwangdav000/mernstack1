// class template/abstraction - Area
// functions/methods - circle, rectangle, square, etc (behavior)
// Area arr = new Area()
// arr.circle()
// arr.rectangle()
// arr.square()

// functions in javascript are first class member citizens and hold almost all power present in runtime
// first-class member - functions can be passed as variable, equal status with other data types

// keyword is function, name of function, then params
// return - mandatory in js funtions, bydefault js will return default value - undefined
// Pure Functions - which must have something returned
session = 'MERNStack Session'; // creates a global variable

// 1. Named function (most common type of function)
function UserName(params) {
  // definition and scope of the function
  console.log(params);
  console.log(this.session);
}

UserName('Ramant');

// 2. function expression - assign func definition to a var
//console.log(validUser(5, 9)); //redefined as a var - which hoisted is undefined...
var validUser = function (a, b) {
  return a + b;
};

console.log(validUser(5, 9));

//3. IIFE - Immediately Invoked Function - helps us to execute a function for one time use only
(function IIFE(firstName, lastName) {
  // definition and scope of the function
  console.log(firstName);
  console.log(lastName);
  console.log(this.session);
})('David', 'Hwang'); // invoke, call, execute function, pass parameter
//IIFE('Check'); does not work
// js functions globally executed
// this.session read at time of execution will asssign value

//4. Constructor Function : Is used to create a class like structure using functions

function Area(length, width, radius) {
  this.length = length, // can use semicolon, or nothing (optional) constructor pattern
  this.width = width, // any dynamic variables expect to change should be here (independent variable) access within this area function
  this.radius = radius, // attach variable here

  this.rectangle = function () {
    return this.length * this.width;
  }
  this.square = function () {
    return this.length * this.length;
  }
  this.circle = function () {
    return 3.1412 * this.radius * this.radius;
  }
}

var areaObj = new Area(2, 5, 15); // initalizing it as constructor

console.log(areaObj.rectangle()); // executing in Area context (constructor function object / class)
console.log(areaObj.square());
console.log(areaObj.circle());

// this is reserved keyword
