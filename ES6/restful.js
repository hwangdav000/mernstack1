//http, request handler, response, routes, data-encoder, query
//configurator to define public or private access
//we will need multiple modules to integrate to build a web server

// integrate these modules to create api / service
// Express - web server which uses node modules to provide structure for web sever

// a. light weight
// b. supports http/s restful API
// c. supported and maintained by node js team

// REST - way of building your API, stateless API, HTTP protocol, JSON data
// set of specification if followed to build a API - web server is termed as RESTFUL API (Restfulness)

// REST - Representational State Transfer Protocol
//1. http/s - protocol
//2. http - hypertext type protocol transfer protocol <html - hypertext markup language>
//3. Information that travels is stateless -  <to avoid loss of information save it to server using http verbs>

//4. http- verbs Get, GetByID, Post , Put , Patch, Delete <CRUD - create , read , update , delete>
// Create - POST => Whenever we create information
// Read - Get/GetByID => whenver we need to read information 
// Update - Put/Patch => {Username , Addres,  ID , Mobile, Session} 
//          Put - to update <Address> we need to pass ALL the user object info
//          Patch - <Address, ID> => new address to update over the ID works for Patch
// DELETE - Delte => verb to delete data as all or by ID
// 5. Proper Response with status code is required

// Get /UserDetails?name=Wanda ==> the name can be saved 
// information can be stored on client side, cookies (browser storage)

// setup using npm for experss js and the APIs