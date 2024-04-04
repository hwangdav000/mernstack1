// concurrency - when we are able to execute different call parallely or without blocking
// callbacks/API's - registered call backs of JS - XHR, promises, SetTimeout, SetInterval, Asyn IO Operations
// when interpreter encounters callbacks /API's - this execution should be done on api -> Queue -> stack
// // so other executions are not blocked
// event loop - mechanism to move callbacks output from event queue to call stack once stack is empty
// event queue - queue's the output of callback API's and pushes in  FIFO

// example 
console.log("Concurrent Execution Starts") // 1

setTimeout(function() {
    console.log("timeout 1") // 3,

    setTimeout(function() {
        console.log("timeout 1.1") // 4, goes last when other timeout is 1sec
    }, 0)
}, 1000)

setTimeout(function() {
    console.log("timeout 2") // 5,
}, 1000)

setTimeout(function() {
    console.log("timeout 3") // 6,
}, 1000)

console.log("Concurrent Execution Ends") // 2

// whatever gives output first will go into queue first
// if stack is busy delay can be more than 1 second
// order not guaranteed
// not every callback is non blocking
// registered callback use api then go into queue which are nonblocking to stack

