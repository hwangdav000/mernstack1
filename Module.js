var User = {
    test: "testing"
}

var aConstant = 3.14

globalThis.User = {
    User : "Second User",
    NewUser : "Suyash",
    ConnectionString : "this is the commopn string for external DB connection"
}

// this helps us to return information from this file to be used in other files
module.exports = {
    // User : User, 
    // aConstant: aConstant
    User, // short hand of ES6 same name variable for key and value
    aConstant
}