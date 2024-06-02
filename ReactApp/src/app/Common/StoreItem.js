import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import office from '../images/office.png';
import Excel from '../images/excel.png';
import m365 from '../images/m365.png';
import powerpoint from '../images/powerpoint.png';

// Functional component using arrow function
const StoreItem = (props) => {
  const {
    _id,
    productName,
    price,
    desc,
    rating,
    picURL,
    addToCart,
    subtractToCart,
  } = props;
  let [quantity, setQ] = useState(0);

  const addToItem = (evt) => {
    evt.preventDefault();
    console.log('this is ' + _id);
    addToCart(productName, _id);
    setQ(quantity + 1);
  };

  const subtractToItem = (evt) => {
    evt.preventDefault();
    subtractToCart(productName);
    setQ(quantity - 1);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={picURL}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column ">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{productName}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto text-center">
          {quantity === 0 ? (
            <Button onClick={addToItem}>+ Add to Cart </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={subtractToItem}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> In cart
                </div>
                <Button onClick={addToItem}>+</Button>
              </div>
              {/* <Button
                variant="danger"
                size="sm"
              >
                Remove
              </Button> */}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
