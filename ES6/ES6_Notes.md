Everything we covered in JS ES6
Also might be some stuff in JS that i need to cover

Arrow Function / lambda expression
allows us to create functions with these benefits
1. shorter approach to write functions
2. Arrow Function copies the context of parent as its own content
let func_arrow = (a, b) => a+b
let func_arrow2 = (a=0, b=0) => {
	if (a+b  > 10) return true
	else return false
}
var User = {
	Name: "t1",
	Address: "t2",
	UsrInfo: function () {
		console.log(this.Name + this.Address) // will take parent
		setTimeout((function() {
			console.log(this.Name + this.Address) // will lose
		}), 1000)
		setTimeout((() => { // copy context of immediate parent
			console.log(this.Name + this.Address) // will lose
		}), 1000)
	}
}

Default Parameter 
able to set the default values for function
function Sum (a=0, b=0) {
	return a + b
}

Destructuring 
Way to read values from arrays / objects without initializing literals
1. Array Destructuring 
a. reading values w/o multiple variables and indexing
let [one, two, three] = [11,22,33]
b.we can have rest for array
let [one, ...rest] = [11, 22, 33] // rest contains [22,33]
c. swapping variables
let x = 9, y=10;
[x,y] = [y,x]

2. Object Destructuring
a. Single level destructuring
let User = {name: "David", age=25}
let {name, age, other="hello"} = User
b. Nested Destructuring
let User = {name: "David", second : {name2: "David2"}}
let {name, second : {name2}} = User // set name,name2 (second error)

For in , For of
normal for loop
const numbers = [1,2,3,4,5];
for (let i=0;i<numbers.length;i++){
console.log(numbers[i])}
for each loop
numbers.forEach(function(number) {console.log(number)})

for in - used for objects
let person = {fname: "John", lname: "Doe", age:25, address : {}}
for (const key in person) {
	if (Object.hasOwnProperty.call(person, key)) {
		const ele = person[key]
	}
}
// would get the index for array objects

for of - used for arrays / string
let cars = ['BMW', 'Volvo', 'Mini'];
for (const val of cars) { console.log(val)}

Iterators
let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];
//1. List the person with javascript tag
persons.filter(person => person.tags == "javascript" ? person : "")

//2. List the same on person using javascript and put programmer after their name, change the name key to Developer
persons.map(person => {
    if (person.tags =="javascript") {
        return {"Developer" : person.name + "Programmer" }
    }
}).filter()

//3. If we have anyone with tag python
let anyPython = persons.some(person=> person.tag=="python")

//4. Find the number of unique tags and their count present in list
let tagUnique = persons.reduce((prevVal, currVal, index, array) => {
    prevVal[currVal.tags] = preVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1;
    return prevVal
}, new Set())

Shorthand 
avoid writing redundant variable names
let cat="m1",dog="m2"
let animalSound = {cat:cat, dog:dog}
let animalSound2 = {cat , dog}

Spread and Rest
let cities = ["Rome", "New York", "London"]
console.log(...cities) // spread

can use spread to combine two objects
let user1 = {name : "David"}
let user2 = {name2 : "David2"}
let all_cities = {...user1, ...user2} // combines the objects

function Sum(a,b,c) {return a+b+c}
function Sum(...numbers) {
	let sum =0;
	sum = numbers.reduce((prevVal, currVal) = > prevVal + currVal, 0)
	return sum
}

Variables
1. scope functional and lexical
let and const cannot go outside of block
2. let and const have no hoisting present
3. reassignment , redeclaration
- var can be reassigned and redeclared
- let can be reassigned NOT redeclared
- const CANNOT be reassigned or redeclared

4. const is immutable but reference can be changed
const User = {session: "JS"}
User.session = "Another JS"

5. let and const in for loop
for (let index=1;index1<5;index++) {
	setTimeout(()=> {
		console.log(index1) // prints out index1 for scope
	}, 2000)
}
// var would lose reference