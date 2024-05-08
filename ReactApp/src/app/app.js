import React, { Component } from "react";
import "./test.css";
import TestComponent from "./CommonComponent/test";

export default class ApplicationComponent extends Component {

    render(){
        let name = "Suyash Talekar!!!"
        return(
            <div className="topdiv">
                <h4>This is main react application Component</h4>
                <b id="name_element">{name}</b>

                <TestComponent/>
            </div>
        )
    }
}