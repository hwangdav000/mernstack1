import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  CancelOrderToDB,
  DeliverOrderToDB,
  SaveOrderToDB,
  getOrdersFromDB,
} from '../../state/Order/orderAction.js';
import { Button } from 'react-bootstrap';

const OrderItemComponent = (props) => {
  const { item } = props;
  const dispatchToDB = useDispatch();
  const [delivered, setDelivered] = useState(false);
  const [formattedOrderDate, setFormattedOrderDate] = useState('');

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
  }, [dispatchToDB]);

  const handleCancel = () => {
    dispatchToDB(CancelOrderToDB(item._id, item.userId));
  };

  let handleReorder = () => {
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
    alert('reordered');
    //dispatchToDB(getOrdersFromDB(item.userId));
  };

  const handleReview = () => {
    alert('review');
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
          <Button
            onClick={handleReview}
            variant="info"
          >
            Review
          </Button>
        )}
      </td>
    </tr>
  );
};

export default OrderItemComponent;
