import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartFromDB, SaveCartToDB } from '../../state/Cart/cartAction';
import { Col, Row, Button } from 'react-bootstrap';
import {
  SaveProductToDBUsingFetch,
  getProductsFromDB,
} from '../../state/Product/productAction';
import StoreItem from './StoreItem.js';
import { set } from 'mongoose';
const Cart = () => {
  const navigate = useNavigate();
  // Get list of products
  let ProductList = useSelector((state) => state.productReducer.productList);
  console.log(ProductList);

  const user = useSelector((store) => store.userReducer.user);
  const dispatchToDB = useDispatch();

  const userCart = useSelector((store) => store.cartReducer.cart);
  const cartList = userCart ? userCart.cartList : [];

  const [cartItems, setCartItems] = useState(cartList);

  useEffect(() => {
    setCartItems(cartList);
  }, [cartList]);

  const handleIncrement = (productName, productId, price) => {
    if (!user._id) {
      alert('Please Sign In to Add to Cart');
      return -1;
    }
    const itemIdx = cartItems.findIndex(
      (item) => item.productName === productName
    );
    let updatedCartItems = [...cartItems];
    if (itemIdx === -1) {
      updatedCartItems = [
        ...cartItems,
        { productName, productId, price, quantity: 1 },
      ];
    } else {
      updatedCartItems[itemIdx].quantity += 1;
    }
    setCartItems(updatedCartItems);
    //saveCart(updatedCartItems);
    return 1;
  };

  const handleDecrement = (productName) => {
    const itemIdx = cartItems.findIndex(
      (item) => item.productName === productName
    );
    let updatedCartItems = [...cartItems];
    if (itemIdx !== -1) {
      if (updatedCartItems[itemIdx].quantity === 1) {
        updatedCartItems = updatedCartItems.filter(
          (item) => item.productName !== productName
        );
      } else {
        updatedCartItems[itemIdx].quantity -= 1;
      }
      setCartItems(updatedCartItems);
      //saveCart(updatedCartItems);
    } else {
      console.log('Error handling decrement');
    }
  };

  let saveCart = (updatedCartItems) => {
    let newCart = {
      userId: user._id,
      userName: user.userName,
      cartItems: updatedCartItems,
    };
    console.log(newCart);

    if (user._id !== '') {
      dispatchToDB(SaveCartToDB(newCart));
    } else {
      alert('Please Sign In to Add to Cart');
    }
  };

  let navCart = () => {
    saveCart(cartItems);
    if (user._id !== '') {
      navigate('/cartDetail');
    } else {
      alert('Please Sign In to Add to Cart');
    }
  };

  // later when showing cart
  useEffect(() => {
    dispatchToDB(getProductsFromDB());
    dispatchToDB(getCartFromDB(user._id));
    // dispatch(getCartFromDB(user._id));
  }, [dispatchToDB]);

  // // get user cart I think I want to add product name later
  // const userCart = useSelector((store) => store.cartReducer.cart);
  // const cartItems = userCart.cartList;
  // console.log(cartItems)
  console.log('cart items', cartItems);
  return (
    <>
      <h1>Store</h1>
      <Row
        md={2}
        xs={1}
        lg={3}
        className="g-3"
      >
        {ProductList.map((item) => {
          const cartItem = cartItems.find(
            (cartItem) => cartItem.productId === item._id
          );

          const quantity = cartItem ? cartItem.quantity : 0;
          console.log('q', quantity);
          return (
            <Col key={item._id}>
              <StoreItem
                {...item}
                addToCart={handleIncrement}
                subtractToCart={handleDecrement}
                initQuantity={quantity}
              />
            </Col>
          );
        })}
      </Row>
      <div>
        <Button
          variant="primary"
          onClick={() => navCart()}
          size="lg"
          className="mx-auto d-block mt-5 mb-3"
        >
          Save Cart and Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;
