import * as actionTypes from '../actionTypes';
//order more details like date
// total price
let initialState = {
  order: {
    userId: 0,
    orderList: [],
  },
  ordersList: [],
};

// action => type and payload

let orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // might not need this
    case actionTypes.ADD_ORDER:
      //...state == is extracting all the states present in store
      //action.payload - is the new user data that we need to add to store
      //User: action.payload - new payload is assigned to used

      return {
        ...state,
        ordersList: [...state.ordersList, action.payload],
      }; //new state dispatched to store upon update

    case actionTypes.GET_ORDER:
      return { ...state, ordersList: action.payload };

    default:
      return state; //if no action type matched return default state
  }
};

export default orderReducer;
