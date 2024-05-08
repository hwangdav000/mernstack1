// importing express top class and then creating experss server

console.log("In server js")

const express = require('express') // express calss constructor
const app = express() // invoke the class to create express app server

const port = 9000;

const defaultRouter = require("./Routers/defaultRoute.js")
const adminRouter = require("./Routers/adminRoute.js")

// we can have one main and multiple other express apps at a place
const adminApp = express(); // a new express app to handle requests mounted with admin in path


// setting up the midleware static , to handle all static files served to client
// serve static files like images, css using static middleware
// just add /static/ to path and it would move to public
app.use('/static', express.static('public'))


// // not feasible, can have a lot of files
// app.get('/alert_me.js', function(req,res) {
//     res.sendFile(__dirname+ "/Public/alert_me.js")
// })

// path mounting to other expres app
//locahost:3000/admin
app.use("/admin", adminApp)
adminApp.use(adminRouter)


// // fall back strategy for every API not available 
// // this is wild card to accept all failed calls
// app.all('*', function(req,res) {
//     res.sendFile(__dirname+ "/Public/index.html")
// })


app.use("/", defaultRouter)

app.listen(port)

console.log("api launched at - locahost:" + port)

// express 3 main pillar
// 1. express
// 2. request - incoming data/ send from browser
// 3. response - whatever server api sends
