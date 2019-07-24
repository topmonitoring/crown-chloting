import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { toogleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toogleCartHidden }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispachToProps = dispach => ({
  toogleCartHidden: () => dispach(toogleCartHidden())
});

export default connect(
  null,
  mapDispachToProps
)(CartIcon);
