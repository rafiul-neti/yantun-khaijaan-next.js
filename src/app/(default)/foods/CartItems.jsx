"use client";
import { CartContext } from "@/app/Contexts/CreatedContexts/CartContext";
import CartCard from "@/Component/Cards/CartCard";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <>
      <h1 className="text-2xl font-bold text-center">
        Items in Cart ({cart.length})
      </h1>

      <div className="mt-7 grid grid-cols-1 gap-2">
        {
            cart.map(item=> <CartCard key={item.id} item={item} />)
        }
      </div>
    </>
  );
};

export default CartItems;
