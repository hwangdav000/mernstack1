import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../../state/Cart/cartAction.js';

let CartItemComponent = (props) => {
  let item = props.item;

  let [Quantity, setQuantity] = useState(item.quantity);

  let dispatchItem = useDispatch();

  return (
    <tr>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>
        <input
          type="text"
          value={Quantity}
          onChange={(evt) => {
            setQuantity(evt.target.value);
          }}
        ></input>
      </td>
      <td>{Quantity * item.price}</td>
      <td>
        <button onClick={() => dispatchItem(removeItem(item._id))}>
          Remove
        </button>{' '}
      </td>
      <td>
        <button onClick={() => dispatchItem(updateItem(item._id, Quantity))}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default CartItemComponent;
