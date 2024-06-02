//action - is an object with two properties - type and payload
import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddStudentToStore = (student)=>{
    return {
        type : actionTypes.ADD_STUDENT_TO_STORE, //actiontype to be matched in user reducer
        payload : student //payload which will update the store
    }
}

export const setStudents = (students) => {
    return {
        type: actionTypes.GET_STUDENT_TO_STORE,
        payload: students
    };
};


//server call
//to save user to mongo db and do sign-in or sign up
export const SaveStudentToDB = (newStudent)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/student/api/signinup",//uri or end point of singninup api
                newStudent // the user state object we dispatch from the user component
            ).then((collection)=>{
                let loggedStudent = collection.data
                console.log(loggedStudent)
                dispatch(AddStudentToStore(loggedStudent))
            }).catch((err)=>{
                console.log("error while saving", err)
        })
    }
}


export const SaveStudentToDBUsingFetch = (newStudent)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/student/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)})
            .then((response)=>response.json())
            .then((studentData)=>{
                console.log("saving student")
                console.log(studentData)
                dispatch(AddStudentToStore(studentData))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}

export const getStudentsFromDB = () => {
    return (dispatch) => {
        axios.get("http://localhost:9000/student/api/students")
            .then((response) => {
                const students = response.data; // Assuming the response contains an array of student objects
                console.log(students)
                dispatch(setStudents(students)); // Dispatch an action to store the retrieved students
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
                // Handle error, dispatch an error action, etc.
            });
    };
};