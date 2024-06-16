import * as actionTypes from '../actionTypes';

let initialState = {
  cart: {
    userId: 0,
    cartList: [],
  },
};

// action => type and payload

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      //...state == is extracting all the states present in store
      //action.payload - is the new user data that we need to add to store
      //User: action.payload - new payload is assigned to used

      return {
        ...state,
        cart: {
          userId: action.payload.userId,
          cartList: action.payload.cartItems,
        },
      }; //new state dispatched to store upon update

    case actionTypes.GET_CART:
      //...state == is extracting all the states present in store
      //action.payload - is the new user data that we need to add to store
      //User: action.payload - new payload is assigned to used

      return { ...state, cart: { ...state.cart, cartList: action.payload } }; //new state dispatched to store upon update

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartList: state.cart.cartList.filter(
            (item) => item._id !== action.payload.id
          ),
        },
      };

    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartList: state.cart.cartList.map((item) => {
            if (item._id === action.payload.id) {
              return { ...item, quantity: action.payload.quantity };
            }
            return item;
          }),
        },
      };

    case actionTypes.CLEAR_CART:
      //...state == is extracting all the states present in store
      //action.payload - is the new user data that we need to add to store
      //User: action.payload - new payload is assigned to used
      //need to also clear db cart
      return { ...state, cart: { ...state.cart, cartList: [] } }; //new state dispatched to store upon update

    default:
      return state; //if no action type matched return default state
  }
};

export default cartReducer;
