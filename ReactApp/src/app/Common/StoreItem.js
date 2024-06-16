import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import excel from '../images/excel.png';
import m365 from '../images/m365.png';
import office from '../images/office.png';
import powerpoint from '../images/powerpoint.png';

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
    initQuantity,
  } = props;

  const [quantity, setQuantity] = useState(initQuantity);

  // useEffect to set initial quantity when component mounts
  useEffect(() => {
    setQuantity(initQuantity);
  }, [initQuantity]); // run this effect only when initQuantity changes

  const addToItem = (evt) => {
    evt.preventDefault();
    const success = addToCart(productName, _id, price);
    if (success !== -1) {
      setQuantity((prevQuantity) => prevQuantity + 1); // update quantity immutably
    }
  };

  const subtractToItem = (evt) => {
    evt.preventDefault();
    if (quantity > 0) {
      subtractToCart(productName);
      setQuantity((prevQuantity) => prevQuantity - 1); // update quantity immutably
    }
  };

  // Function to generate star icons based on rating
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    // Full stars
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i
          key={i}
          className="fa fa-star text-warning"
        ></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i
          key="half"
          className="fa fa-star-half-o text-warning"
        ></i>
      );
    }

    return stars;
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={picURL}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-3 align-items-start">
          <div>
            <span className="fs-2">{productName}</span>
            <div className="text-right">
              <div className="mt-1">Rating: {renderStars()}</div>
            </div>
            <span className="text-muted">Price: ${price}</span>
          </div>
        </div>
        <div className="text-center mt-auto">
          {quantity === 0 ? (
            <Button onClick={addToItem}>+ Add to Cart </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <Button onClick={subtractToItem}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> In cart
              </div>
              <Button onClick={addToItem}>+</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
