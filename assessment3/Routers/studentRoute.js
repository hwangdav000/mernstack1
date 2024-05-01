let fs = require("fs")
let express = require("express")

let studentRouter = express.Router({})

studentRouter.get('/', function (req, res) {
    res.send('Hello World from student')
})

//http://localhost:3000/Student/getStudentDetails?name=david&age=25&address=US&session=express
studentRouter.get('/getStudentDetails', function(req,res) {
    let queryStr = req.query // i used to read the values after ? in api path
    let name = queryStr.name
    let age= queryStr.age
    let address= queryStr.address
    let session= queryStr.session
    let userDetails = {
        name, age, address, session
    }

    fs.readFile('studentInfo.json','utf8',(err, fileData)=>{
    
        let writerStream = fs.createWriteStream("studentInfo.json","utf8");
        if (fileData) {           
            let oldData = JSON.parse(fileData)    
            console.log(oldData)
            writerStream.write(JSON.stringify([...oldData, userDetails]));
            writerStream.end();
        }else{
            writerStream.write(JSON.stringify([
                userDetails]));
            writerStream.end();
        }
    })

    res.send(queryStr)
})

module.exports = studentRouter;
