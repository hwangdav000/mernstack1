//action - is an object with two properties - type and payload
import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const AddProductToStore = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_STORE, //actiontype to be matched in user reducer
    payload: product, //payload which will update the store
  };
};

export const GetProductToStore = (product) => {
  return {
    type: actionTypes.GET_PRODUCT_TO_STORE, //actiontype to be matched in user reducer
    payload: product, //payload which will update the store
  };
};

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveProductToDB = (newProduct) => {
  return (dispatch) => {
    axios
      .post(
        'http://localhost:9000/product/api/saveproduct', //uri or end point of singninup api
        newProduct // the user state object we dispatch from the user component
      )
      .then((collection) => {
        let loggedProduct = collection.data;
        console.log(loggedProduct);
        dispatch(AddProductToStore(loggedProduct));
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const SaveProductToDBUsingFetch = (newProduct) => {
  return (dispatch) => {
    window
      .fetch('http://localhost:9000/product/api/saveproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      .then((response) => response.json())
      .then((productData) => {
        console.log('saving product');
        console.log(productData);
        dispatch(AddProductToStore(productData));
      })
      .catch((err) => {
        console.log('error while logging in ', err);
      });
  };
};

export const getProductsFromDB = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:9000/product/api/getProducts')
      .then((response) => {
        const products = response.data; // Assuming the response contains an array of product objects
        console.log(products);
        dispatch(GetProductToStore(products)); // Dispatch an action to store the retrieved products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        // Handle error, dispatch an error action, etc.
      });
  };
};
