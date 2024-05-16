//Assessment #4 react and its fundamentals - 16/05/2024

//1. create a webpack setup, index html and one css file to show css in next questions
//2. how react renders dom in conservative manner - explain

The actual dom is created when the page is loaded. A virtual DOM is also created in tandem. Whenever changes are made react then refers to this virtual DOM and then makes changes to that specific place where the changes are then made which are reflected in the real DOM. As everything is loaded upfront it is able to make the changes without having to refer to the backend.

//3. create a class component named - Success and show some quotes (messages) on success in it

//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component

//6. create UserSignIn component using uncontrolled way, should be class component

//7. explain how virtual dom works 

virtual dom is a representation over the real dom and react 
sees if any changes are made and then updates the real dom from the virtual
dom.

//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.