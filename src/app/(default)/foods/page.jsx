import FoodCard from "@/Component/Cards/FoodCard";
import SearchFoods from "@/Component/SearchFoods";
import React from "react";

const getFoods = async (search) => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const Foods = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  return (
    <section className="min-h-screen">
      <div className="my-4 flex flex-col lg:flex-row items-center lg:justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Total <span className="text-orange-600">{foods.length}</span> foods
          found.
        </h1>
        <SearchFoods />
      </div>

      <div className="">
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className=""></div>
      </div>
    </section>
  );
};

export default Foods;
