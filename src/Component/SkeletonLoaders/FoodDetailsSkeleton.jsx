const FoodDetailsSkeleton = () => {
  return (
    <div className="my-5 w-10/12 mx-auto animate-pulse">
      <div className="card bg-base-100 shadow-xl">
        {/* Image Skeleton */}
        <div className="relative w-full h-60 md:h-80 lg:h-150 bg-gray-300 rounded-t-xl" />

        <div className="card-body space-y-4">
          {/* Title */}
          <div className="h-8 bg-gray-300 rounded w-3/4" />

          {/* Meta Info */}
          <div className="h-4 bg-gray-300 rounded w-1/3" />
          <div className="h-4 bg-gray-300 rounded w-1/4" />

          {/* Price */}
          <div className="h-6 bg-gray-300 rounded w-1/6" />

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <div className="h-10 w-36 bg-gray-300 rounded" />
            <div className="h-10 w-36 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
