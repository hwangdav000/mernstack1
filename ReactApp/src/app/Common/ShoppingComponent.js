import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
const Shopping = ({ isOpen, closeCart }) => {
  return (
    <Offcanvas
      placement="end"
      show={isOpen}
      onHide={closeCart}
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default Shopping;
