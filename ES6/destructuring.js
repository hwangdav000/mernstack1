//Destructuring - way to read values from Array or object without initializing literals

// 1. Array Destructuring

// a. reading values without multiple variables and indexing
// let [one, two, three, four, no_val] = [11,22,33,44]
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(no_val)

// b. we can have rest for array
// let [one_1, two_1, ...rest_Array] = [11,22,33,44,55,66]
// console.log(one_1)
// console.log(two_1)
// console.log(rest_Array)

// c. swapping of variables
// let x = 9 , y = 10;
// [x,y]=[y,x]
// console.log(x)
// console.log(y)

// 2. Object Destructuring
// a. Single level destructuring
let User = {
    Standard: "Higher Secondary",
    Session: "Final Session",
    TotalMarks: "75%"
}

// let session = User.session;
// let {Name = "David N", Session, TotalMarks} = User
// console.log(Name)
// console.log(Session)
// console.log(TotalMarks)

// b. Nested Destructuring
let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}
// let { Name = "Joe S", Session, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student

// console.log(Name)
// console.log(Session)
// console.log(Standard)
// //console.log(Subject)
// console.log(Mathematics)
// console.log(Physics)
// console.log(Language)


//Questions for practice
//print firstname and sessionTopics,
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

// let { First = "Joe", Last="Semrad", covered3="ES6", Subject : {Physics, Chemistry, Language}} = Student
// console.log(First)
// console.log(Last)
// console.log(covered3)
// console.log(Physics)
// console.log(Chemistry)
// console.log(Language)


//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

// function multiply (a =0,b=0,c=0) {
//     return a*b*c
// }
// console.log(multiply())

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

// var arr = [1,2,3,4,5]
// arr[5] = 6

// // for of
// for (const num of arr) {
//     console.log(num)
// }

// // for in
// for (const key in arr) {
//     console.log(arr[key])
// }

//create an example of const where we can update on property of the object, where it says const is mutable

// const obj1 = {
//     name: "David",
//     age: 25 
// }
// console.log(obj1)
// obj1.age = 26
// console.log(obj1)

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let

for (var i = 0; i < 5; i++) {
    setTimeout((function() {
        console.log("var index ", i)
    }), 2000)
}

for (let i = 0; i < 5; i++) {
    setTimeout((function() {
        console.log("let index ", i)
    }), 2000)
}

{
    var test = "hello"
    let test2 = "hello 2"
}
// console.log(test)
// console.log(test2) // error not in scope


