// call and apply help us to set the context by immediately executing the function 
// whenever we nned to have some delay for execution like - button click, mouse - hover

// console.log("Print starts")
// setTimeout(callback, 1000) // execute after 1 second does not delay other executions
// console.log("print ends")

// function callback (params) { // callback
//     console.log("prints after 1 second")
// }

var User = {
    Name : "Otoi",
    Address : "In France",
    GetUserInfo : function () {
        // console.log(this)
        // console.log(`User info ${this.Name} and ${this.Address}`)
        setTimeout((function (params) { // lose context of user, the context gets updated with Timeout which does not have name and address (regardless of time)
            console.log(this)
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`)
        }).bind(User),2000)

        var that = this; // - copies dynamic content
        setTimeout((function (params) { 
            
            console.log(`SetTimeOut User info ${that.Name} and ${that.Address}`)
        }),2000)
    }
    
}
//call gets the output , sets context to object passed and gives output
//bind - sets the context back to user after 2 seconds and returns the function as it is, unlike call and apply which executes immediately

console.log(User.GetUserInfo()) //Gets context as User itself

//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)