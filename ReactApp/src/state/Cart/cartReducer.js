
import * as actionTypes from "../actionTypes";

let initialState = {
    cart : {
        userId : 0,
        cartList : []
    }
}

// action => type and payload

let cartReducer = (state=initialState, action)=>{


    switch (action.type) {

        case actionTypes.ADD_CART:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, cart: action.payload} //new state dispatched to store upon update
        
        case actionTypes.GET_CART:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, cart: {...state.cart, cartList: action.payload} } //new state dispatched to store upon update
    
        default:
            return state //if no action type matched return default state
    }
}

export default cartReducer;