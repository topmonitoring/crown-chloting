export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartitem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartitem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartitem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
