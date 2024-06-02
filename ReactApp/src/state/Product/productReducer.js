
import * as actionTypes from "../actionTypes";

let initialState = {
    product : {
        _id : "",
        productName : "product name",
        price : 0,
        desc : "some description",
        rating : 0
    },
    productList : []
}

// action => type and payload

let productReducer = (state=initialState, action)=>{

    console.log("Product Actions ", action)

    switch (action.type) {

        case actionTypes.ADD_PRODUCT_TO_STORE:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, product: action.payload} //new state dispatched to store upon update
        
        case actionTypes.GET_PRODUCT_TO_STORE:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, productList: action.payload} //new state dispatched to store upon update

        default:
            return state //if no action type matched return default state
    }
}

export default productReducer;