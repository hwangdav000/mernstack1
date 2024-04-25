// we have 99k+ packages in node js which we use for various tasks
console.log("log information")
const { log } = require("console") // console module 
const path = require("path")
log("We are using log from console package")

const os = require("os")
console.log(os.userInfo())
console.log(os.cpus())
console.log(os.hostname())

log(__dirname) // fullpath of dir
log(__filename) // fullpath+filename

//path
console.log(path.basename())