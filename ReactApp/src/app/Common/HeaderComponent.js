import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

let Header = (props)=>{

    //allows us to read data from store/reducer as we do with mapStateToProps
    //becomes subscriber of user state from user reducer
    const user = useSelector((store)=>store.userReducer.user)
    //useDispatch 
    console.log(user)
    
    const usrName = user && user.userName ? user.userName : props.userName
    

    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="md">
            
                <Container>
                    <NavLink to="/home" className="navbar-brand" > SynergisticIt </NavLink>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/product" className="nav-link" > Product </NavLink>
                        <NavLink to="/cart" className="nav-link" > Cart </NavLink>
                        <NavLink to="/about" className="nav-link" > About </NavLink>
                        <NavLink to="/user" className="nav-link" > User </NavLink>
                    </Nav>
                    <Navbar.Text className="d-none d-md-block">
                        Signed in as: <a href="/user">{usrName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
 
            {/* <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>
            
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                <NavLink to="/hobby"  className="button" activeclassname="true"> Hobby </NavLink>
                <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
                <NavLink to="/student"  className="button" activeclassname="true"> Student </NavLink>
                <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink>
            </div>
            <hr/> */}
        </>
    )
}

export default Header;