// Arrow Function or FAT arrow funciton or Lambda Expressions are ways to create functions with following benefits

// 1. Creates Shorter approach to write function
function Add(a, b) {
    return a + b
}

// User.Details();
// Add.call(User); 
Add();

() => {} // Arrow function

let Func_Arrow = (a, b) => a + b
console.log(Func_Arrow(5,9))

let Func_Arrow_1 = (a = 0,b = 0) => {
    if (a+b >= 15) 
        return "Greater Than or equal 15" + (a+b)
    else    
        return "less than 15" + (a+b)
}
//console.log(Func_Arrow_1(7,9)) 
//console.log(Func_Arrow_1(9))

// 2. Arrow function copies the context of parent as its own content

var User = {
    Name : "Otoi",
    Address : "In Paris",
    GetUserInfo : function () {
        // console.log(this)
        console.log(`User info ${this.Name} and ${this.Address}`)

        var that = this; // - copies dynamic content
        setTimeout((function () { // lose context of user, the context gets updated with Timeout which does not have name and address (regardless of time)
            
            console.log(`SetTimeOut User info ${that.Name} and ${that.Address}`)
        }),200)

        setTimeout((function () { // lose context of user, the context gets updated with Timeout which does not have name and address (regardless of time)
            
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`)
        }),200)

        setTimeout((() => { // copies the context of immediate parent (this) 
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`)
        }),200)
    }
}

User.GetUserInfo()

var User2 = {
    Name : "Otoi",
    Address : "In Paris",
    GetUserInfo : () => { // parent context is global so vars undefined as not declared
        // console.log(this)
        console.log(`User info ${this.Name} and ${this.Address}`) 

        var that = this; // that - copies dynamic content
        setTimeout((function () { 
            
            console.log(`SetTimeOut User info ${that.Name} and ${that.Address}`)
        }),200)

        setTimeout((() => { // copies the context of immediate parent (this) 
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`)
        }),200)
    }
}

// var User3 = function () {
//     var Name = "David"
//     var last = "Hwang"
//     var that = this

//     var func = () => { // Changed to an arrow function
//         console.log(this)
//         console.log(that)
//         console.log(`1 Name is ${Name} ${last}`)

//         setTimeout(() => { // Changed to an arrow function
//             console.log(`2 Name is ${Name} ${last}`)
//         }, 200)
//         return
//     }

//     func()
//     return
// }
// User3()