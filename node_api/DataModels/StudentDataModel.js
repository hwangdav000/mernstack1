let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let studentSchema = new schemaObj({
    studentName: {type: String, required : true},
    age: String,
    address: String,
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
)

let studentModel = mongooseObj.model("student", studentSchema);//user - collection name, pluralised by mongodb

module.exports = studentModel; // this can be used in router/s to access the mongoose model methods like select, update queries

// studentName : "student",
// age : 20,
// Address : "somewhere on earth",
// mobile : 1112223333