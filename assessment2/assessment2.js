// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// can preserve immutability by using const
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
// a. Get heroes who are not evils
console.log(heroes.filter(hero => hero.isEvil == false ? hero : ""))

// b. Print Unique family names
let uniqueFamilies = heroes.reduce((prevVal, currVal,index, array) => {
    prevVal[currVal.family] = prevVal[currVal.family] ? prevVal[currVal.family]+1 : 1; 
    return prevVal
}, new Set())
console.log(uniqueFamilies)

// c. Print Hero Names from given objects, and append sir in each of them before printing
heroes.map(hero => {
    return {"name" : "sir " + hero.name}
}).filter(names => names != undefined)

// d. Do we have any hero in Marvel Family who is not evil
console.log(heroes.some(hero => hero.family == "Marvel" && hero.isEvil==false))

//2. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
let students_session = ["mary", "joe", "abigail"];
function Count(...numbers) {
    // usage of spread
    let [s1, s2, s3] = students_session;
    console.log(`${s1} ${s2} ${s3}`)

    let sum = 0;
    sum = numbers.reduce((prevVal, currVal) => prevVal * currVal, 1)
    return sum
}
console.log(Count(1,2,3))

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let {contact_number = "9119119110", userDetails : {last}} = person
console.log(`${contact_number} ,  ${last}`)

//4. Give me an example of const data manipulation
const person2 = {
    name:"David",
    last:"Hwang"
}
console.log(person2.name)
person2.name="Abigail"
console.log(person2.name)

//5. What is the difference between for-of and for-in show with examples
// for in used with objects, get the key/index of array
for (const key in person2) {
    console.log(key)
}

// for of used more with arrays / strings, get the value
let arr = ["val1", "val2"]
for (const val of arr) {
    console.log(val)
}

//6. Give me an example of bind and write its usage, comparison with arrow function
var User = {
    Name: "David",
    Age: 25,
    getUserInfo : function() {
        setTimeout((function (params) {
            // without bind get undefined for both
            console.log(`No Bind: ${this.Name} ${this.Age}`)
        }), 1000)

        setTimeout((function (params) {
            // without bind get undefined for both
            console.log(`Bind: ${this.Name} ${this.Age}`)
        }).bind(User), 1000)

        // arrow func get immediate parent which is User 
        setTimeout((() =>  {
            console.log(`Arrow: ${this.Name} ${this.Age}`)
        }), 1000)
    }
}
User.getUserInfo()

//7. Create an example showing usage of event loop in concurrent execution cycle

// the setTimeout will go to stack then  Heap
// the event loop console.log will go to stack and out
// then after 3 sec the setTimeout calls will each
// go to queue then to stack and then out
for (let i=0;i<5;i++ ) {
    setTimeout((function(){
        console.log("i: ", i)
    }), 3000)
}
console.log("event loop")


//8. create an example showing usage of short hand and default param.
let movie1= "Batman arises", movie2="Get out"
let movies = {movie1, movie2}
console.log(JSON.stringify(movies))
function ex1 (a=1, b=2) {
    return a+b;
}
console.log(ex1())

//9. Create two objects with some properties and merge them using Object method and ES6 way
let obj_9 = {first:"George"}
let obj_9_2 = {last:"Russel"}
let person_9 = {...obj_9, ...obj_9_2}
console.log(person_9)

//10. Give me an example of call and apply each with it's usage
function GetTest(one , two, three) {
    console.log(`context- ${this.name}`)
    console.log(`${one} ${two} ${three}`)

}
// call - pass context and then arguments individually
var userContext={
    name: "context test"
}
GetTest.call(userContext, "one1", "two2", "three3")
var contextList = ["one", "two", "three"]

// apply - pass context then arguments as array
GetTest.apply(userContext, contextList)