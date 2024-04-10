// In core.js -> var to declare which is functional scoped 
// let and const -> in ES6 which are lexical scope and behave more like class based literals


// 1. Scope <Functional and lexical {} >
{
    var my_var = 2024
    let my_let = 2015
    const my_const = 2015.1
}
// console.log(my_var) // 2024
// console.log(my_let) // outside boundary of block {} so not accessible // error throw not defined
// console.log(my_const) // same as my_let

// 2. let and const have no hoisting present
// {
//     console.log(my_let) // no hoisting  - cannot access my_let before initailizaiton
//     console.log(my_const)

//     let my_let = 2015 // let and const cannot access outside of block
//     const my_const = 2015.1

// }

// 3. re-assignment and re-declaration
{
    // var my_var -> var can be reassigned, re-declared anytime anywhere
    let my_let;// we can declare and assign value later
    my_let = 2015
    console.log(my_let) 

    my_let = 2015.2015 // reassignment is possible
    console.log(my_let) 

    //let my_let = "David JS Scholar" // re-declaration is not possible

    // constant 
    
    // const my_const = 2015.1; // we can't declare without initialization
    // const my_const; // can't do

    const my_const = 2015.1

    // const my_const = 2015.2 // re-declaration not possible
    // my_const = 2015.3 // reassignment not allowed
    console.log(my_const)

    // hack for const - value is immutable but reference can be changed
    const User = {
        session : "Javascript -- OOOJS"
    }

    const User2 = {
        session : "ES6"
    }
    // User = User2 // Assignment to constant variable. // error 

    User.session = "ES6 Variables" // updating the value of reference i.e. = session
    console.log(User.session)
}

// 4. let and const get evaulated and not passed as reference as var

for (var index = 1; index < 5; index++) {
    setTimeout(()=> {
        console.log("Incremented with 2 seconds delay " + index) // does not evaluate immediately only after for loop ends (functional scoped variable) var executes when function does (only prints 5)
    }, 2000);
}

console.log("breaking condition " + index)

for (let index1 = 1; index1 < 5; index1++) {
    setTimeout(()=> {
        console.log("Incremented with 2 seconds delay " + index1)  // with let it prints out 1,2,3,4
    }, 2000);
}

console.log("breaking condition " + index)