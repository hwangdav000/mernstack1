import * as actionTypes from '../actionTypes';
//review more details like date
// total price
let initialState = {
  productReviews: [],
};

// action => type and payload

let reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS:
      return { ...state, productReviews: action.payload };

    default:
      return state; //if no action type matched return default state
  }
};

export default reviewReducer;
