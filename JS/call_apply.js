var user = {name: "Bryan", age: 21, session : "Javascript"}
var user2 = {name: "Bryan2", age: 212, session : "Javascript2"}

// t his - execution context of executing fuction

function PrintDetails(comment) {
    console.log("this", this)
    console.log(comment)
    console.log(this.name, this.age, this.session)
}

// PrintDetails("Executing PrintDetail in global conetext")
// PrintDetails.call(user, "Executing PrintDetail in global conetext")
// PrintDetails.call(user2, "Executing PrintDetail in global conetext") 

function GetDetails(concept, session1, session2, session3, session4, session5) {
    console.log(`Call Extension - ${concept}`)

    console.log(`${session1} ${session2} ${session3} ${session4} ${session5})`)

    console.log(`The user details are as below
                Name is - ${this.name}
                Age is - ${this.age}
                Session is - ${this.session}`)
}
var sessionList = ["Web Tech", "AWS", "MERNSTACK", "DEVOPS", "DATA SCIENCE"]
// GetDetails.call(user, "Web Tech", "AWS", "MERNSTACK", "DEVOPS", "DATA SCIENCE")
// GetDetails.apply(user2, sessionList)
// GetDetails.apply(null, sessionList)

//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases
function GetStudent(context, class1, class2, class3) {
    console.log(`context - ${context}`)
    console.log(`${class1} ${class2} ${class3}`)
    console.log(`The user details are as below
                Name is - ${this.name}
                Age is - ${this.age}
                `)
}
var student = {
    name: "David",
    age: "25"
}
var csciList = ["csci", "c1", "c2", "c3"]
GetStudent.call(student, "csci", "c1", "c2", "c3")
GetStudent.apply(student, csciList)

