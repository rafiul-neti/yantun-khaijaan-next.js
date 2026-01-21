import FoodCardSkeleton from "@/Component/SkeletonLoaders/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
