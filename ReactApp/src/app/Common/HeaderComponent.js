import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Shopping from './ShoppingComponent.js';

let Header = (props) => {
  //allows us to read data from store/reducer as we do with mapStateToProps
  //becomes subscriber of user state from user reducer
  const user = useSelector((store) => store.userReducer.user);
  const cart = useSelector((store) => store.cartReducer.cart);
  const userLoginHeader = useSelector((store) => store.userReducer.login);
  const cartList = cart ? cart.cartList : [];

  const [isOpen, setIsOpen] = useState(false);

  //useDispatch
  console.log(user);

  const usrName = user && user.userName ? user.userName : props.userName;

  console.log('Header login state', userLoginHeader);
  console.log('User ', user);

  const openCart = () => {
    console.log('click open cart');
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        expand="md"
      >
        <Container>
          <NavLink
            to="/home"
            className="navbar-brand"
          >
            {' '}
            SynergisticIt{' '}
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/about"
                className="nav-link"
              >
                {' '}
                About{' '}
              </NavLink>
              <NavLink
                to="/user"
                className="nav-link"
              >
                User{' '}
              </NavLink>
              {user._id !== '' && (
                <>
                  <NavLink
                    to="/product"
                    className="nav-link"
                  >
                    {' '}
                    Product{' '}
                  </NavLink>
                  <NavLink
                    to="/store"
                    className="nav-link"
                  >
                    {' '}
                    Store{' '}
                  </NavLink>
                  <NavLink
                    to="/coupon"
                    className="nav-link"
                  >
                    {' '}
                    Coupon{' '}
                  </NavLink>
                  <NavLink
                    to="/order"
                    className="nav-link"
                  >
                    {' '}
                    Orders{' '}
                  </NavLink>
                  <Button
                    onClick={() => openCart()}
                    variant=""
                  >
                    <div
                      style={{
                        width: '1.3rem',
                        height: '1.3rem',
                        paddingTop: '.3rem',
                      }}
                      className="fas fa-cart-shopping fa-fw"
                    ></div>
                  </Button>
                </>
              )}
            </Nav>

            <Navbar.Text
              className="d-none d-md-block"
              style={{ marginRight: '20px' }}
            >
              Signed in as: <a href="/user">{usrName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isOpen && (
        <Shopping
          isOpen={isOpen}
          closeCart={closeCart}
        />
      )}
    </>
  );
};

export default Header;
