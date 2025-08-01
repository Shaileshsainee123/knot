const StatsPlaceholder = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-700 rounded-md p-3 animate-pulse"
          >
            <div className="w-16 h-8 bg-gray-700 rounded mb-2" />
            <div className="w-24 h-4 bg-gray-700 rounded" />
          </div>
        ))}
    </div>
  );
};

export default StatsPlaceholder;
