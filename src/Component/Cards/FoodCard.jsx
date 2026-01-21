"use client";

import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative h-48">
        <Image src={foodImg} alt={title} fill className="object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg">{title}</h2>

        <p className="text-sm text-gray-500">Category: {category}</p>

        <p className="text-lg font-semibold">৳ {price}</p>

        <div className="card-actions mt-3 justify-between">
          <button className="btn btn-primary btn-sm">Add to Cart</button>

          <Link href={`/food/${id}`}>
            <button className="btn btn-outline btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
