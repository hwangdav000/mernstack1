import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCartFromDB,
  SaveCartToDB,
  removeItem,
  updateItem,
  ClearCartToDB,
} from '../../state/Cart/cartAction.js';
import { Col, Row, Button, Table } from 'react-bootstrap';
import { SaveOrderToDB } from '../../state/Order/orderAction.js';
import StoreItem from './StoreItem.js';
import { set } from 'mongoose';
import CartItemComponent from './CartItemComponent';

const CartDetail = () => {
  // Need to show the Name and Address of the user
  const user = useSelector((store) => store.userReducer.user);
  const couponStoreValue = useSelector(
    (store) => store.couponReducer.couponValue
  );

  const [couponValue, setCouponValue] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const userName = user.userName;
  const userAddress = user.street;

  // get cart items
  // later when showing cart
  const dispatchToDB = useDispatch();

  let clickToSaveCart = () => {
    console.log(user);
    console.log('cart List here');
    let newCart = {
      userId: user._id,
      userName: userName,
      cartItems: cartList,
    };
    if (!user._id) {
      alert('Please sign in to save the cart!!!');
    } else {
      dispatchToDB(SaveCartToDB(newCart));
    }
  };

  let purchaseCart = () => {
    const currentDate = new Date();
    console.log(currentDate);
    let newOrder = {
      userId: user._id,
      status: 'IN TRANSIT',
      orderDate: currentDate,
      price: totalPrice,
      userName: userName,
      order: cartList,
    };
    if (!user._id) {
      alert('Please sign in to save the cart!!!');
    } else {
      dispatchToDB(SaveOrderToDB(newOrder));
      alert('Cart has been purchased');

      // need to clear the cart
      dispatchToDB(ClearCartToDB(user._id));
    }
  };

  // // get user cart I think I want to add product name later
  const userCart = useSelector((store) => store.cartReducer.cart);
  const cartList = userCart ? userCart.cartList : [];
  // Calculate total price only when cartList is available

  // check if coupon value is correct and apply to total price
  let applyCoupon = () => {
    if (couponValue == couponStoreValue) {
      alert('valid coupon');
      setCouponApplied(true);
    } else {
      console.log(couponValue);
      console.log(couponStoreValue);
      setCouponApplied(false);
      alert('invalid coupon');
    }
  };

  useEffect(() => {
    dispatchToDB(getCartFromDB(user._id));
  }, [dispatchToDB]);

  useEffect(() => {
    // set total price
    if (cartList) {
      if (cartList) {
        let calculatedTotalPrice = cartList.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0);

        if (couponApplied) {
          // 10% discount
          calculatedTotalPrice = calculatedTotalPrice * 0.9;
        }

        setTotalPrice(calculatedTotalPrice);
      }
    }
  }, [cartList, couponApplied]);
  // at the end there will be a total
  console.log('cartList ', cartList);

  // want ot check order last

  const orders = useSelector((store) => store.orderReducer.order);
  const orderList = orders ? orders.orderList : [];

  console.log('orderList ', orderList);
  return (
    <>
      <div>
        <h1>Cart Details</h1>

        <Table
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item) => {
              //return item.name
              return (
                <CartItemComponent
                  item={item}
                  key={item._id}
                />
              );
            })}
          </tbody>
        </Table>
        <Button onClick={() => clickToSaveCart()}>Save Cart</Button>
        <div>
          Apply Coupon:
          <input
            type="text"
            value={couponValue}
            onChange={(evt) => {
              setCouponValue(evt.target.value);
            }}
          ></input>
          <Button onClick={() => applyCoupon()}>Apply Coupon</Button>
        </div>

        <h1>Total Price: {totalPrice}</h1>
        <br></br>
        <h1>User Details</h1>
        <p>Name: {userName}</p>
        <p>Address: {userAddress}</p>
        <br></br>

        <Button
          variant="primary"
          onClick={() => purchaseCart()}
          size="lg"
          className="mx-auto d-block mt-5 mb-3"
        >
          Purchase Cart
        </Button>
      </div>
    </>
  );
};

export default CartDetail;
