// different type of function that we can use to behave a s a class and this kind of function definition
// is termed as a --> constructor function
// prototype : in js is an object associated to each function and object , which provides us inheritance by chaining parent child

var funcAsClass = function(name, age, address) {
    // this : is scope of function in which it executes
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name: this.name,
            age: this.age,
            session: this.session,
        }
    }
}

funcAsClass.prototype.session = "javascript basics"

var funcObj = new funcAsClass("Bryan", 20, "US")
funcObj.age = 22
console.log(funcObj.getUserDetails(true))

// new class
var objOffFuncConstructor = new funcAsClass("Arda", 19.6, "Somewhere on Earth")

console.log(objOffFuncConstructor.address);
console.log(objOffFuncConstructor.getUserDetails());

// Using prototype we can add properties in child class or object
// objOfFuncConstructor.__proto__.hobbies
objOffFuncConstructor.hobbies = "Reading, Playing Soccer"

objOffFuncConstructor.getHobbies = function (params) {
    console.log("Hobbies are " + this.params)
}

objOffFuncConstructor.getHobbies() // only added to object
// console.log(funcObj.getHobbies()) // get error getHobbies not a function 

// able to override the method
objOffFuncConstructor.getUserDetails = function () {
    return {
        name: this.name,
        age: this.age,
        session: this.session,
        hobbies: this.hobbies
    }
}
console.log(objOffFuncConstructor.getUserDetails())
console.log(funcObj.getUserDetails())
//create a constructor function to print user details add one information using prototype

function userDetails(name, pin) {
    this.name = name,
    this.pin = "1111"
    this.password = "1234"
    this.getDetails = function(isUser) {
        if (isUser && this.pin==pin) {
            return {
                name: this.name,
                gender: this.gender
            }
        }
    }
}
var user = new userDetails("David", "1111")
user.gender = "male"
console.log(user.getDetails(true))