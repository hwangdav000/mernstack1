import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartFromDB, SaveCartToDB } from '../../state/Cart/cartAction';
import { Col, Row, Button } from 'react-bootstrap';
import {
  SaveProductToDBUsingFetch,
  getProductsFromDB,
} from '../../state/Product/productAction';
import StoreItem from './StoreItem.js';
import { set } from 'mongoose';
const Cart = () => {
  // Get list of products
  let ProductList = useSelector((state) => state.productReducer.productList);
  console.log(ProductList);

  const user = useSelector((store) => store.userReducer.user);
  const dispatchToDB = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsInfo, setCartItemsInfo] = useState([]);

  const handleIncrement = (productName, productId) => {
    const itemIdx = cartItems.findIndex(
      (item) => item.productName === productName
    );
    if (itemIdx === -1) {
      setCartItems([...cartItems, { productName, productId, quantity: 1 }]);
    } else {
      let updatedCartItems = [...cartItems];
      updatedCartItems[itemIdx].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleDecrement = (productName) => {
    const itemIdx = cartItems.findIndex(
      (item) => item.productName === productName
    );

    if (itemIdx !== -1) {
      let updatedCartItems = [...cartItems];
      let itemCount = updatedCartItems[itemIdx].quantity;

      if (itemCount === 1) {
        // Filter out the item
        updatedCartItems = updatedCartItems.filter(
          (item) => item.productName !== productName
        );
      } else {
        // Decrement the quantity
        updatedCartItems[itemIdx].quantity -= 1;
      }

      // Update the state with the modified array
      setCartItems(updatedCartItems);
    } else {
      console.log('Error handling decrement');
    }
  };

  let saveCart = (evt) => {
    evt.preventDefault();
    let newCart = {
      userId: user._id,
      userName: user.userName,
      cartItems,
    };
    console.log(newCart);

    if (user._id !== '') {
      dispatchToDB(SaveCartToDB(newCart));
    } else {
      alert('Please Sign In to Add to Cart');
    }
  };

  // later when showing cart
  useEffect(() => {
    dispatchToDB(getProductsFromDB());
    // dispatch(getCartFromDB(user._id));
  }, [dispatchToDB]);

  // // get user cart I think I want to add product name later
  // const userCart = useSelector((store) => store.cartReducer.cart);
  // const cartItems = userCart.cartList;
  // console.log(cartItems)
  console.log(cartItems);
  return (
    <>
      <h1>Store</h1>
      <Row
        md={2}
        xs={1}
        lg={3}
        className="g-3"
      >
        {ProductList.map((item, index) => (
          <Col key={index}>
            <StoreItem
              {...item}
              addToCart={handleIncrement}
              subtractToCart={handleDecrement}
            />
          </Col>
        ))}
      </Row>
      <div>
        <Button
          variant="primary"
          onClick={saveCart}
          size="lg"
          className="mx-auto d-block mt-5 mb-3"
        >
          Submit Cart
        </Button>
      </div>
    </>
  );
};

export default Cart;
