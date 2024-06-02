let express = require("express")
let userRouter = express.Router({}) // 

let UserDataModel = require("../DataModels/UserDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data


//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
userRouter.post("/api/signinup",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema

    UserDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("already existing user ", existingUser);
            res.send(existingUser)
        }
        else {//if user object is not present in users collection so we need to create 
            //new user and this is sign up

            let newUser = new UserDataModel(req.body)

            newUser.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("error while searching user sign in")
    })
})

userRouter.post("/api/login",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema

    UserDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("already existing user ", existingUser);
            res.send(existingUser)
        }
        else {
            console.log("user not found");
            res.status(404).send({ message: "User not found" });
        }
    }).catch((err)=>{
        console.log("err sign in", err);
        res.status(500).send("Error while searching user sign in");
    })
})

userRouter.post("/api/addhobby",(req, res)=>{ //localhost:9000/user/api/signinup
    //initialize the userSchema

    UserDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);

            existingUser.hobbies = req.body.hobbies;
            
            existingUser.save().then((user)=>{//will get _id once document is created
                console.log("successful signup ", user);
                res.send(user.hobbies)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
            
        } else {console.log("user not found")}
        
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("error while searching user sign in")
    })
})


//code to fetch all the users from user collection and return back 
userRouter.get("/api/getHobbies/:userName",(req, res)=>{

    const userName = req.params.userName;

    UserDataModel.findOne({userName : userName}).then((user) => {
        if (user) {
            res.send(user.hobbies);
            
        } else {console.log("user not found")}
        
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("error while searching user sign in")
    })
})
  
//code to fetch all the users from user collection and return back 
userRouter.get("/api/getUser/:userId",(req, res)=>{

    const userId = req.params.userId;

    UserDataModel.findOne({_id : userId}).then((user) => {
        if (user) {
            res.send(user);
            
        } else {console.log("user not found")}
        
    }).catch((err)=>{
        console.log("err user id", err);
        res.send("error while searching user id")
    })
})
module.exports = userRouter;