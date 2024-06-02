// mongodb

// 1. nosql db - 
// 2. collections and documents, instead of table and rows
// 3. json format
// 4. schema less
// 5. document based - like json file but binary encrypted

// have info as much as possible in single document

// row of a table
//  name, session1, session2, session3
// if have one more column need to update with null/empty/etc for other rows

// documents
{
    name: "David",
    sessions= {
        session1 : "MERNSTACK",
        session2 : "MERNSTACK",
        session3 : "MERNSTACK"
    }
}
{
    name: "Mayuri",
    sessions= {
        session1 : "MERNSTACK",
        session2 : "MERNSTACK",
        session3 : "MERNSTACK"
    }
}

// handler to check if db server is there or not
// use connection string to make connection
// get read/write access on db and allow us to do manipulation
// provide functions to read data, add, udpate, delete etc
// once done close connection

// another module - mongoose, helps us to do all other jobs listed above
// also allows us to create schema