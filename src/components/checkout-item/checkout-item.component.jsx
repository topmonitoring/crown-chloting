import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItem, clerItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clerItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispachToProps = dispach => ({
  clerItem: item => dispach(clearItemFromCart(item)),
  addItem: item => dispach(addItem(item)),
  removeItem: item => dispach(removeItem(item))
});
export default connect(
  null,
  mapDispachToProps
)(CheckOutItem);
