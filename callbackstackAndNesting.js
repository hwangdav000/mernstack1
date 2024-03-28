// Callback - we pass a funciton  as paramter to another function to increase the reusability is termed as callback function
// when user executes need to display some message callback function scope will be held by the function calling it
// majorly used by button clicks
function PrintDetails(printMsg, param1, param2) {
    console.log(printMsg, param1, param2)
}

function GetUserInfo(firstName, lastName, printCallBk) {
    printCallBk("User Details are ", firstName, lastName)
}

// GetUserInfo("David", "Miller", PrintDetails)

// since we are using callbacks the others are returned first
for (let index=0; index < 200; index++ ) {
    setTimeout( function() {
        GetUserInfo("David", "Miller", PrintDetails)
    }, 2000) // 400 seconds
}

function GetSessionInfo(sessionName, sessionTopic , printCallBk) {
    printCallBk("Session details are ", sessionName, sessionTopic)
}

GetSessionInfo("MERNstack", "Core Javascript - Callback", PrintDetails)

// nested function and javascript currying

var number1 = 20;

function A(a) {

    return function B(b) {
        return function C(c) {
            return function D(d) { 
                return a + b + c + d + number1
            }
        }
    }
}

var objA = A(5) // returns function B
var objB = objA(10) // return function C
var objC = objB(15) // return function D
var result = objC(20) // returns result a + b + c + d + 20
console.log(result)

// chain execution

var result2 = A(5)(10)(15)(30) // A()=>B()=>C()=>D()
console.log(result2)