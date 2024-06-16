import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CancelOrderToDB,
  DeliverOrderToDB,
  SaveOrderToDB,
  getOrdersFromDB,
} from '../../state/Order/orderAction.js';
import { Button } from 'react-bootstrap';
import ReviewModal from './OrderReviewModal'; // Import the ReviewModal component

const OrderItemComponent = (props) => {
  const { item } = props;
  const dispatchToDB = useDispatch();
  const [delivered, setDelivered] = useState(false);
  const [formattedOrderDate, setFormattedOrderDate] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Calculate if 2 days have passed since the order date
  useEffect(() => {
    const orderDate = new Date(item.orderDate);
    const currentDate = new Date();
    const timeDifference = currentDate - orderDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    if (daysDifference >= 2) {
      setDelivered(true);
      if (item.status !== 'DELIVERED' && item.status !== 'CANCELED') {
        dispatchToDB(DeliverOrderToDB(item._id, item.userId));
      }
    }

    // Format order date
    const formattedDate = orderDate.toLocaleDateString('en-GB'); // Adjust locale as needed
    setFormattedOrderDate(formattedDate);
  }, [dispatchToDB, item]);

  const handleCancel = () => {
    dispatchToDB(CancelOrderToDB(item._id, item.userId));
  };

  const handleReorder = () => {
    const currentDate = new Date();

    let newOrder = {
      userId: item.userId,
      status: 'IN TRANSIT',
      orderDate: currentDate,
      price: item.price,
      userName: item.userName,
      order: item.order,
    };

    dispatchToDB(SaveOrderToDB(newOrder));
    alert('Reordered successfully');
    //dispatchToDB(getOrdersFromDB(item.userId));
  };

  const handleReview = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
    // Optionally reset review data here if needed
  };

  return (
    <tr>
      <td>{item._id}</td>
      <td>{formattedOrderDate}</td>
      <td>{item.price}</td>
      <td>{item.status}</td>
      <td>
        {delivered || item.status === 'CANCELED' ? (
          <Button
            onClick={handleReorder}
            variant="primary"
          >
            Reorder
          </Button>
        ) : (
          <Button
            onClick={handleCancel}
            variant="danger"
          >
            Cancel
          </Button>
        )}
      </td>
      <td>
        {item.status === 'DELIVERED' && (
          <>
            <Button
              onClick={handleReview}
              variant="info"
            >
              Review
            </Button>
            <ReviewModal
              show={showReviewModal}
              handleClose={handleCloseReviewModal}
              order={item.order} // Pass the items of the order to the modal
              user={item.userId}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default OrderItemComponent;
