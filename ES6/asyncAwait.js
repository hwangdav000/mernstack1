// async and await - to give a us a syncrhonised bheavior of execution through executing async
// if we create a promise object inside async it will take it or if we don't create promise then it wil wrap a promise object
// async and await : //async : a way to have multi-threading in js like other OOP

// fetch userInfo - call // 150
// fetch  productDetails - call // 200
// fetch cartInfo - call // 100

// stack 1 (main thread) - 200mb (300 request/ sec) +/- 150 request for each call
// => if requests increas 600 request / sec
// if requests keep on increase keep on getting slower or possibility of crashing

// (async) - create stack (thread) of 100 mb 
// (await)
//stack2(thread) - 200 mb (300 request / sec) can handle up to // 150
//stack3(thread) - 200 mb (300 request / sec) // 200
//stack4(thread) - 200 mb (300 request / sec) // 100

// can split up the requests 

function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "statuscode": 200,
                "statusmsg" : "resolved"
            }, 2000);
        })
    })
}

// async creates a new thread
// the await blocks until promise is resolved
async function asyncCall() {
    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
        .then((data, err)=>console.log(data))
        .catch((err)=>console.log(err))
    console.log("After await - thread executes one by one")

    console.log("Before await 2 - blocking thread starts")

    await resolveAfter2Seconds()
        .then((data, err)=>console.log(data))
        .catch((err)=>console.log(err))
    console.log("After await 2 - thread executes one by one")
}
asyncCall()