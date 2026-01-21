"use client";

import { CartContext } from "@/app/Contexts/CreatedContexts/CartContext";
import Image from "next/image";
import { use } from "react";
import { MdDelete } from "react-icons/md";

const CartCard = ({ item }) => {
  const { cart, setCart } = use(CartContext);
  const { title, foodImg, price } = item;

  const handleDeleteFromCart = (id) => {
    const remainingItems = cart.filter((elem) => elem.id !== id);
    setCart(remainingItems);
  };

  return (
    <div className="card bg-white shadow-md">
      <div className="flex items-center gap-4 p-1">
        {/* Part 1: Image */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
          <Image src={foodImg} alt={title} fill className="object-cover" />
        </div>

        {/* Part 2: Title + Price */}
        <div className="flex-1">
          <h3 className="font-semibold text-black">{title}</h3>
          <p className="text-sm font-medium text-gray-500">৳ {price}</p>
        </div>

        {/* Part 3: Delete Button */}
        <button
          onClick={() => handleDeleteFromCart(item.id)}
          className="btn btn-sm text-red-500"
          aria-label="Remove item"
        >
          <MdDelete size={22} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
