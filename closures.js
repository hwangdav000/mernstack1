// Inheritance
// Encapsulation - Private, Public, Internal, Protected ...
// Polymorphism
// Abstraction

// Encapsulation - access modifiers : in languages like java help us to prevent/limit usage of class members

// In Javascript : When we have a function within a function and parent function returns child function 
// then we can limit what can be accessed by external user through child function this is termed as closure

// currying- sequence of functions
// closures - when limiting access to variables (must have 2 functions: 1 parent and 1 child) child functions will always have access to var, parameters in parent function. Think about it like imitating a class structure some methods are public / private
// global variables will not be cleaned up by garbage collector

function Parent(userName, userPin) {
    // Private scope  of parent function
    var name = "David"
    var pin = "25694158"
    var accountName = "Savings Account" // public - on authentication 
    var accountBalance = "$20000" // public - on authentication
    var accountPassword = "340908fkj" // private - should not be accessed

    var child = function (getBalance) {
        // Public scope which is accessible to others 
        // can choose what is private / public
        if (getBalance && name==userName && pin==userPin) {
            return {
                name : name,
                accountName : accountName,
                accountBalance : accountBalance
            }
        }
    }

    return child;
}

// chain execution
var balanceInfo = Parent("David", "25694158") 
console.log(balanceInfo) // get child function
console.log(balanceInfo(true)) // pass in getBalance

// create a sample of your own implementation for closure

function Dog(dogName, dogBreed) {
    var name = "Benjii"
    var breed = "Maltese"
    var weight = "5kg"
    var height = "1ft"

    var child = function (getDog) {
        if (getDog && dogName==name && dogBreed==breed) {
            return {
                name : name,
                weight : weight,
            }   
        }
    }
    return child
}

var checkDog = Dog("Benjii", "Maltese")
console.log(checkDog)
console.log(checkDog(true))
