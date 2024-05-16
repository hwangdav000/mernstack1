import "./success.css";
import React, { Component } from "react";
import Child from "./Common/successChild";
import Story from "./Common/successStory";
import SignIn from "./Common/userSignIn";
import LifeCycle from "./Common/lifeCycle";

//3. create a class component named - Success and show some quotes (messages) on success in it
export default class successComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : "David",
            address: "Home"
        }

    }

    updateName = (newName) => {
        this.setState({name: newName})

    }

    render() {
        return(
            <div>
                <h1>Success here</h1>
                <Child name={this.state.name} address={this.state.address} storyComponent={<Story update={this.updateName}/>}/>
                <SignIn />
                <LifeCycle />
           
            </div>
            
        )
    }

}