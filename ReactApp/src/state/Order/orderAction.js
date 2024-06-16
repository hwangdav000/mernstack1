//action - is an object with two properties - type and payload
import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const AddOrder = (order) => {
  return {
    type: actionTypes.ADD_ORDER,
    payload: order,
  };
};

export const GetOrders = (orders) => {
  return {
    type: actionTypes.GET_ORDER,
    payload: orders,
  };
};

export const cancelOrder = (id) => ({
  type: actionTypes.CANCEL_ORDER,
  payload: { id }, //id: 4
});

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveOrderToDB = (order) => {
  return (dispatch) => {
    axios
      .post(
        'http://localhost:9000/order/api/saveorder', //uri or end point of singninup api
        order // the user state object we dispatch from the user component
      )
      .then((response) => {
        let loggedOrder = response.data;
        console.log('logged data', loggedOrder);
        dispatch(AddOrder(loggedOrder));
        //alert('order has been submitted');
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const CancelOrderToDB = (id, userId) => {
  return (dispatch) => {
    axios
      .post('http://localhost:9000/order/api/cancelOrder/' + id)
      .then((response) => {
        let loggedOrder = response.data;
        console.log('logged data', loggedOrder);

        dispatch(getOrdersFromDB(userId));
        alert('canceled order');
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const DeliverOrderToDB = (id, userId) => {
  return (dispatch) => {
    axios
      .post('http://localhost:9000/order/api/deliverOrder/' + id)
      .then((response) => {
        let loggedOrder = response.data;
        console.log('logged data', loggedOrder);

        dispatch(getOrdersFromDB(userId));
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const getOrdersFromDB = (id) => {
  return (dispatch) => {
    console.log(id);
    var path = 'http://localhost:9000/order/api/getOrders/' + id;
    axios
      .get(path)
      .then((response) => {
        const orders = response.data;
        dispatch(GetOrders(orders));
        console.log('get order from db', orders);
      })
      .catch((error) => {
        console.error('Error fetching order:', error);
      });
  };
};
