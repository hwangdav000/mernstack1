// Objects - defined with class Object in js are the back bone of JS
// var user = new Object({}) // constructor based object initialization

// 1. Using two curly brackets 
var Employee = {
    Name: "Nhan",
    ID: 2123,
    GroupCode : "Permanent",
    GetEmployeeInfo : function () {
        return this.Name + " " + this.ID + " " + this.GroupCode + " " + this.Salary
    }
}
// adding new property to class
// Employee.Salary = "25000"
// console.log(Employee.GetEmployeeInfo())

// This is not recommended for inheritance , doesn't give separation from parent and child
// 2. inheritance, we can use object constructor to create a copy and provide partial inheritance
// - inherits from employee obj
// var userEng = new Object(Employee); 
// userEng.Salary = "$30000" // new property, backward flow of new property
// userEng.GetEmployeeInfo = function () { // overriding
//     return this.Name + " " + this.ID + " " + this.GroupCode + " " + this.Salary
// }

// console.log(userEng.GetEmployeeInfo())
// console.log(Employee.GetEmployeeInfo()) // same , any changes in userEng to Employee

// want two separate copies
// 3. We should use Object.create to create a copy and provide inheritance
var userEng = Object.create(Employee); 
userEng.Name = "Mayuri"
userEng.Salary = "$30000" // new property, backward flow of new property
// userEng.GetEmployeeInfo = function () { // overriding
//     return this.Name + " " + this.ID + " " + this.GroupCode + " " + this.Salary
// }

console.log(Employee.GetEmployeeInfo()) 
console.log(userEng.GetEmployeeInfo()) // will go to prototype and return the function expression, so anything missing will reference prototype

// this inheritance in javascript is possible only due to prototype
// prototype - object in JS  to create link between child and parent

console.log(userEng.__proto__) // returns Employee object
console.log(userEng)
// prototype only way in JS to achieve inheritance

// 4. Empty Object
var  EmptyObj = {} // new Object({})
console.log(EmptyObj.__proto__) // every object created this way will get aprototype chain -> Object


// 5. Breaking the prototype chain and defining base functions - pasing null in constructor method
var nullPrototype = Object.create(null) // no prototype
nullPrototype.toString = function(params) {
    return "Something smart"
}

console.log(nullPrototype.__proto__) // undefined

// 6. Object.assign - mergin two objects

var User = {name: "Aileen", add1  : "lake city", mobile : "44545454"}
var Address = {name : "Aileen", add1 : "wall street", productName : "New product"}

//var Delivery = {User, Address}

var Delivery= Object.assign( User, Address) // merge value take on Address add1

console.log(Delivery)

//Assignment
// create one object with name person, and inherit it to Student and create two new properties and one new method
// please use both ways of inheritance 
// with Object.create
var personObj = {
    name : 'David',
    person : 'male'
}

var Student = Object.create(personObj)
Student.name = "Alexa"
Student.age = 25
Student.debt = "$25000"
Student.printOut= function () {
    return Student.name + Student.debt + Student.person
}

console.log(Student.printOut())
// with new Object constructor to provide partial inheritance
var Student2 = new Object(personObj)
Student2.name = "George"
Student2.age = 25
Student2.debt = "$25000"
Student2.printOut= function () {
    return Student2.name + Student2.debt + Student2.person
}

console.log(Student2.printOut())