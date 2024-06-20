//action - is an object with two properties - type and payload
import * as actionTypes from '../actionTypes';

import axios from 'axios';

export const AddTokenToStore = (tokens) => {
  return {
    type: actionTypes.ADD_TOKEN_TO_STORE, //actiontype to be matched in user reducer
    payload: tokens, //payload which will update the
  };
};
