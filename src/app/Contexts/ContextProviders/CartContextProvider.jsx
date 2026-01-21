"use client";
import React, { useState } from "react";
import { CartContext } from "../CreatedContexts/CartContext";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartInfo = { cart, addToCart, setCart };

  return <CartContext value={cartInfo}>{children}</CartContext>;
};
export default CartContextProvider;
