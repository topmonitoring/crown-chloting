import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispachToProps = dispach => ({
  addItem: item => dispach(addItem(item))
});

export default connect(
  null,
  mapDispachToProps
)(CollectionItem);
