const ReviewCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md animate-pulse">
      <div className="card-body space-y-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />

          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-3 w-20 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Rating */}
        <div className="h-4 w-24 bg-gray-300 rounded" />

        {/* Review Text */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-3/4" />
        </div>

        {/* Like Section */}
        <div className="flex items-center gap-3 pt-2">
          <div className="h-8 w-20 bg-gray-300 rounded" />
          <div className="h-3 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
