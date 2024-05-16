//6. create UserSignIn component using uncontrolled way, should be class component
import React, { Component} from "react";
export default class SignIn extends Component {
    constructor(props){

        super(props)

        this.state = {
            refSign : "Sign Out",
        }

        this.sign = React.createRef() 
    }

    formSubmit = (evt)=> {
        let newSign = this.sign.current.value

        this.setState({
            refSign : newSign
        })

        evt.preventDefault()
    }

    render() {
        return (
            <div>
                <form className="form" method="post" onSubmit={this.formSubmit}>
                    <b>Sign</b>
                     <input type="text" placeholder={"Default Sign"} 
                         ref={this.sign} maxLength={20}></input>
                     <button type="submit"> Save </button>
                </form>

                <label>{this.state.refSign}</label>
            </div>
    
        )
    }
    
}