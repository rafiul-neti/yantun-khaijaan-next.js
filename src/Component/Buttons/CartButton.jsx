"use client";
import { CartContext } from "@/app/Contexts/CreatedContexts/CartContext";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const { cart, addToCart } = use(CartContext);
  const inCart = cart.some((item) => item.id === food.id);
  const handleAddToCart = () => {
    addToCart(food);
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
