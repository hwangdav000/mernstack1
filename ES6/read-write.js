// to do the IO operation need to use fs module in node framework
// using the same we can do the read write operations as follows

// synchronously - blocking
// asynchronously - non-blocking

// read stream
// write stream

let fs = require("fs")

// asynchronous - non blocking -- file read operation
// fs.readFile(__dirname+"/shortHand.js", "utf-8", (err, data)=>{
//     console.log("error: ", err)
//     console.log("data: ", data) // need to specify type of encoding
// })

// synchronous - blocking -- file read operation
let data = fs.readFileSync(__dirname+"/shortHand.js", "utf-8")

console.log(data) // it waits for file to read at line 19