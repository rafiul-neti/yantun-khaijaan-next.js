const FoodsLoading = () => {
  return (
    <section className="min-h-screen animate-pulse">
      {/* Header */}
      <div className="my-4 flex flex-col lg:flex-row items-center lg:justify-between gap-4">
        <div className="h-8 w-64 bg-gray-300 rounded" />
        <div className="flex gap-2">
          <div className="h-10 w-48 bg-gray-300 rounded" />
          <div className="h-10 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-3">
        {/* Food Cards Skeleton */}
        <div className="lg:col-span-9 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              <div className="h-48 bg-gray-300 rounded-t-xl" />

              <div className="card-body space-y-3">
                <div className="h-5 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-5 bg-gray-300 rounded w-1/4" />

                <div className="flex justify-between pt-3">
                  <div className="h-8 w-28 bg-gray-300 rounded" />
                  <div className="h-8 w-28 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar Skeleton */}
        <div className="lg:col-span-3 px-3 pt-1 bg-base-100 border border-gray-400 rounded shadow-2xl space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4 mt-2" />

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 border rounded">
              <div className="w-16 h-16 bg-gray-300 rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-300 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodsLoading;
