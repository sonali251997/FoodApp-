import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addToCartItemHandler = () => {};

  const removeToCartItemHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addToCartItemHandler,
    removeItem: removeToCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.Children}
    </CartContext.Provider>
  );
};

export default CartProvider;
