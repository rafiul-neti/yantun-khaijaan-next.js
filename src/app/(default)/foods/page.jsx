import React from "react";

const getFoods = async () => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/random`,
  );

  const data = res.json();
  return data.foods || [];
};

const Foods = () => {
  const foods = getFoods();
  return (
    <section className="min-h-screen">
      <h1 className="text-4xl font-bold">
        Total <span className="text-orange-600">{foods.length}</span> foods
        found.
      </h1>
    </section>
  );
};

export default Foods;
