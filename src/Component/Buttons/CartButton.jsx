"use client";
import { CartContext } from "@/app/Contexts/CreatedContexts/CartContext";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const { addToCart } = use(CartContext);
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      disabled={inCart}
      onClick={handleAddToCart}
      className="btn btn-primary btn-sm disabled:text-gray-600 disabled:bg-gray-300"
    >
      Add to Cart
    </button>
  );
};

export default CartButton;
