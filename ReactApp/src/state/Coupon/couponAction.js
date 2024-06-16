import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const AddCoupon = (coupon) => {
  return {
    type: actionTypes.ADD_COUPON,
    payload: coupon,
  };
};
