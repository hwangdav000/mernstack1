//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
import React from 'react'

const Child = (props) => {
    return (
        <div>
            <p>Child Success</p>
            <p>name: {props.name}</p>
            <p>address: {props.address}</p>
            {props.storyComponent}
        </div>
    )
}

export default Child;