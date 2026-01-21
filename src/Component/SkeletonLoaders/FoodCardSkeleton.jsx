const FoodCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      <div className="h-48 bg-gray-300 rounded-t-xl" />

      <div className="card-body p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-1/4" />

        <div className="flex justify-between mt-3">
          <div className="h-8 w-24 bg-gray-300 rounded" />
          <div className="h-8 w-28 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
