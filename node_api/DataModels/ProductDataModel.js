let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let productSchema = new schemaObj({
    productName: {type: String, required : true},
    price: String,
    desc: String,
    rating: Number,
    picURL: String
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
)

let productModel = mongooseObj.model("product", productSchema);//user - collection name, pluralised by mongodb

module.exports = productModel; // this can be used in router/s to access the mongoose model methods like select, update queries

// studentName : "student",
// age : 20,
// Address : "somewhere on earth",
// mobile : 1112223333