import * as actionTypes from '../actionTypes';

let initialState = {
  couponValue: '',
};

// action => type and payload

let couponReducer = (state = initialState, action) => {
  console.log('Coupon Actions ', action);

  switch (action.type) {
    case actionTypes.ADD_COUPON:
      console.log('in the coupon reducer', action.payload);
      return { ...state, couponValue: action.payload }; //new state dispatched to store upon update

    default:
      return state; //if no action type matched return default state
  }
};

export default couponReducer;
