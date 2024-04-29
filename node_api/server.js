// importing express top class and then creating experss server

console.log("In server js")

const express = require('express')
const app = express() // express app server

app.get('/', function (req, res) {
  res.send('Hello World from node api')
})

//http://localhost:3000/name?name=suyash&session=express
app.get('/name', function(req,res) {
    let queryStr = req.query // i used to read the values after ? in api path
    console.log(queryStr)
    res.json(queryStr)
    console.log(queryStr.name)
})


//http://localhost:3000/nameByID/2000
app.get('/nameByID/:id', function(req,res) {
    let queryParam = req.params["id"] // reads the parameter in path of API, can have multiple query params

    console.log(queryParam)
    if (queryParam== 2000) {
        res.send("<h1>User is present</h1>")
    } else {
        res.send("<h1>User not present</h1>")
    }
})

app.listen(3000)

console.log("api launched at - locahost:3000")