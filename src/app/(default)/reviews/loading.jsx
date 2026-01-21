import ReviewCardSkeleton from "@/Component/SkeletonLoaders/ReviewCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(12)].map((_, i) => (
        <ReviewCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
