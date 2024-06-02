//action - is an object with two properties - type and payload
import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const AddCart = (cart) => {
  return {
    type: actionTypes.ADD_CART,
    payload: cart,
  };
};

export const GetCart = (cart) => {
  return {
    type: actionTypes.GET_CART,
    payload: cart,
  };
};

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveCartToDB = (cart) => {
  return (dispatch) => {
    axios
      .post(
        'http://localhost:9000/cart/api/savecart', //uri or end point of singninup api
        cart // the user state object we dispatch from the user component
      )
      .then((response) => {
        let loggedCart = response.data;
        console.log(loggedCart);
        dispatch(AddCart(loggedCart));
        alert('cart has been submitted');
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const getCartFromDB = (id) => {
  return (dispatch) => {
    console.log(id);
    var path = 'http://localhost:9000/cart/api/getCart/' + id;
    axios
      .get(path)
      .then((response) => {
        const cart = response.data;
        dispatch(GetCart(cart));
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
      });
  };
};
