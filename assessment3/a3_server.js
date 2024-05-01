const express = require('express')
const app = express()
const port = 3000

const studentRouter = require("./Routers/studentRoute.js")

const studentApp = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/Student", studentApp)
studentApp.use(studentRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

