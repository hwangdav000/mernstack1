// // concurrent promise calls
// // when we make multiple promise calls and we want to check what happened to all of them 
// // and then decide whats going to be the next step

// //user is authenticated and my product requires some details of user using userid created but authentication
// //userid - from authentication (first)

// //try making these calls parallely 
// //getUserProducts(userid)
// //getUserAccountDetails(userid)
// //getUserCartHistory(userid)

// //authentication.then("To get resolve callback data").catch("To get reject callback data")

// let getUserProducts = new Promise((resolve, reject)=>{ //getUserProducts - api call

//     setTimeout(() => { // getUserProducts - api call
//         resolve({
//             "status" : 200,
//             "msg" : "user products are fetched",
//             "promise date" : (new Date).toDateString()
//         })
//     }, 5000);
// })

// let getUserAccountDetails = new Promise((resolve, reject )=>{ //getUserAccountDetails
    
//     setTimeout(() => { // getUserAccountDetails - api call
//         resolve({
//             "status" : 200,
//             "msg" : "user AccountDetails are fetched",
//             "promise date" : (new Date).toDateString()
//         })
//     }, 10000);
// })

// let getusercart = new Promise((resolve, reject)=>{ //getusercart
    
//     // setTimeout(() => { // getusercart - api call
//     //     resolve({
//     //         "status" : 200,
//     //         "msg" : "user cart is fetched",
//     //         "promise date" : (new Date).toDateString()
//     //     })
//     // }, 15000);

//     setTimeout(() => { // getusercart - api call
//         reject({
//             "status" : 500,
//             "msg" : "API Crashed!!",
//             "promise date" : (new Date).toDateString()
//         })
//     }, 15000);

// })

// console.log("Promises are working... ")

// // when we need all the promises to be settled we use this
// // the case when even one promise fails all the promises gets rejected

// // Promise.all([
// //     getUserProducts,
// //     getUserAccountDetails,
// //     getusercart
// // ]).then((data, error)=>{
// //     console.log("Promise All returns, when each one is settled ", data)
// // }).catch((data, error)=>{
// //     console.log("Promise All returns to catch, when any one is rejected ", data)
// // })


// // Upon completion of each promises that we start, it returns the data for each promise individually

// // Promise.allSettled([
// //     getUserProducts,
// //     getUserAccountDetails,
// //     getusercart
// // ]).then((data, error)=>{
// //     console.log("No need to stop exectution when on promise is failed.", data)
// // })

// // console.log("Promises are all done!!! ")


//create promise of three concurrent sessions of a day and try to resolve and reject them
let firstSession = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve({
            "status": 200,
            "msg": "f1 success",
            "promise date": (new Date).toDateString()
        })
    }, 1000)
    
})
let secondSession = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve({
            "status": 200,
            "msg": "f2 success",
            "promise date": (new Date).toDateString()
        })
    }, 2000)

})
let thirdSession = new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject({
            "status": 200,
            "msg": "f3 reject",
            "promise date": (new Date).toDateString()
        })
    }, 3000)
})
const startTime = performance.now();

Promise.all([firstSession, secondSession, thirdSession
]).then((data)=>{

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Promise.all() settled in ${elapsedTime} milliseconds`);
    console.log("Promise all returns: ", data)

}).catch((error)=> {

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Promise.all() settled in ${elapsedTime} milliseconds`);
    console.log("Promise all catch: ",error)
})

console.log("after promise")