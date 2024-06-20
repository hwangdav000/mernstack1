import * as actionTypes from '../actionTypes';

let initialState = {
  accessToken: '',
  refreshToken: '',
};

// action => type and payload

let tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOKEN_TO_STORE:
      // action.payload contains the new tokens
      const { accessToken, refreshToken } = action.payload;
      return { ...state, accessToken, refreshToken }; // new state with updated tokens

    default:
      return state; // if no action type matched return default state
  }
};

export default tokenReducer;
