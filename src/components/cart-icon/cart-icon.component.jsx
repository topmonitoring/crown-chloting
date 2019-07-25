import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispachToProps = dispach => ({
  toogleCartHidden: () => dispach(toogleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(CartIcon);
