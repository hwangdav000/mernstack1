// callbacks and callbacks - can become callback hell situation
// signinuser

// function Authentication_API(userInfo) {} // Login SignUp, create userSession
// function Authorization_API(userInfo, sessionId) {} // Permissions to access like admin/normal user - roles
// function Navigation_API(userInfo, permissions) {} // what all pages user can navigate, returns first page

// problem all calls are async
// not sure when response will come back
function LoginProcess(userId, password) {

    let userInfo = {userId, password}
    //let userSession = Authentication(userInfo, Authorization) // async

    // non blocking call
    Authentication(userInfo, Authorization)
    function Authentication(userInfo, Authorization) {
        let userSession = Authentication_API(userInfo) 
        
        if (userSession==valid)
            Authorization(userInfo, userSession, Navigation)
        else
            Authentication(userInfo, Authorization) // if server fails we'll have many recursive calls to authentication
    }

    function Authorization(userInfo, Navigation) {
        let permissions = Authorization_API(userInfo, userSession) 

        let loginScreen = Navigation_API(userInfo, permissions)
    }
    // let permissions = Authorization(userInfo, userSession) // async
    //let loginScreen = Navigation(userInfo, permissions) // async

    let displayScreen = Navigation(loginScreen)
}
// call back hell : at line number 23, fall into loop of failures it will take us into callback hell situation
// not a proper handlin of response
// mandatory to take immediate action after we got response

// Promise - is a object which completes some async/sync  job in its execution but has the capability to hold 
// manipulate and return the response when asked
// laptop should be given david N , can ask if laptop is configured or not
// library of ES6, have their own implementation
// let promiseObject = new Promise((resolve, reject) => {
//     //let userSession = Authentication_API(userInfo) // make call to server get the response and store
//     // get one or the other
    
//     setTimeout(()=>{
//         resolve({
//             status : "Success",
//             value : "User Session Object",
//             code : 200
//         })
//     }, 2000)

//     setTimeout(()=>{
//         reject({
//             status : "Failed",
//             value : "User Session Failed",
//             code : 403.15
//         })
//     }, 1000)
// })

// console.log(promiseObject)

// response is returned upon being asked ==> promiseObj.then.then.catch
// .then => returns for resolve cases
// .catch => returns for rejected cases

// promiseObject.then((response, error)=>{
//     console.log("Execution is successful " + response)
// }).catch((response, error)=>{
//     console.log("Execution is failed " + error)
// })

// create a promise object with name student on it after 2 seconds student is pass
// and set status stating learnt es6
// then for rejected case set for 
let studentPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve({
            status: "learntES6",
            value : "pass",
            code: 200
        })
    }, 2000 )

    setTimeout(()=>{
        reject({
            status: "learntES6 I am progressing",
            value : "fail",
            code: 400
        })
    }, 1000 )
})

console.log(studentPromise)

// Handling the promise
studentPromise.then((result) => {
    console.log("Success:", result);
}).catch((error) => {
    console.log("Error:", error);
});