// literals represent memory allocation of some / few values
// user1
var name = "Bryan"
var age = 99
var address = "somewhere on earth"
//user2
var name2 = "gauri"
var age2 = 98 
var address2 = "Somewhere in US"

// reference any var in function alive for that function usage 
// if var is global var then garbage collection will not remove it 
// strng to number garbage collects extra space

//Using Object Literals
// only global variable is User vs all, easier to maintain
var User = {
    name: "Wanda", 
    age: 26, 
    address : "Somewhere in Canada"
}
//update
User.name = "David"
//get
var getName = User.name

// another way to update
User2 = User;

var User2 = {
    name: "Reed", 
    age: 26, 
    address : "Somewhere in Canada"
}

console.log(User)