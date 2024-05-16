import React, { Component, PureComponent } from "react";
//9. Create a class component and show all the life cycle hooks/methods

export default class lifeCycle extends Component {
    //creation life cycle method
    constructor(props){

        super(props)
        this.state = {
            age : 17,
            text : "set text",
            change : "change here"
        }
    }

    componentWillUnmount() {
        console.log("component unmounted")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if (this.state.age !== nextState.text || this.state.change !== nextState.change) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevState, prevProps) {
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
    }

    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
    }

    updateAge = (evt) => {
        this.setState({
            age : this.state.text
        })
        evt.preventDefault()
    }

    onTextChange = (evt) => {
        let newText = evt.target.value;
        this.setState({
            text : newText
        })
        evt.preventDefault()
    }
    //10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
    updateChange = (evt) => {
        this.setState({
            change : "change here"
        })
    }

    render() {
        return (<div>
            <div>
                <h1>lifecycle component</h1>
                <input type="text" value={this.state.text} placeholder="please provide new age" onChange={this.onTextChange}/>
            </div>
            <div>
                <button onClick={this.updateAge}>Update Age</button>
            </div>
            <label>{this.state.age}</label>
            <div>
                <h1>{this.state.change}</h1>
                <button onClick={this.updateChange}>Update Change</button>
            </div>
        </div>)
    }


}