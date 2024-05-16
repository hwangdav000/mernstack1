//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
import React from 'react'

//8. pass a random value from SuccessStory component back to Success
const Story = (props) => {
    // pass new name to success
    const doClick = ()=>{
        const newName= "Jeff"
        props.update(newName)
    }

    return (
        <div>
            <p>Story Success</p>
            <button onClick={doClick}>Update Name</button>
        </div>
    )
}

export default Story;