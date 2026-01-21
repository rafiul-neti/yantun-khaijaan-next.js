import Image from "next/image";
import React from "react";

const singleFood = async (foodId) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${foodId}`,
  );
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const { title, foodImg, price, category, area, video } = await singleFood(id);
  return (
    <div className="my-5 w-10/12 mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure className="relative w-full h-60 md:h-80 lg:h-150">
          <Image src={foodImg} alt={title} fill className="object-cover" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-xl md:text-2xl lg:text-4xl font-bold">
            {title}
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>

            <p>
              <span className="font-semibold">Area:</span> {area}
            </p>

            <p className="text-xl font-bold">৳ {price}</p>
          </div>

          <div className="card-actions mt-4 flex-nowrap items-center lg:gap-7">
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Watch Recipe
            </a>

            <button className="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
