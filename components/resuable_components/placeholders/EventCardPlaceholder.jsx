// components/placeholders/EventCardPlaceholder.jsx

import React from "react";

const EventCardPlaceholder = () => {
  return (
    <div className="bg-gradient-dark h-[510px] rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="relative">
        <div className="w-full h-64 bg-gray-700" />
        <div className="absolute top-4 right-4 h-6 w-20 bg-gray-600 rounded" />
      </div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-600 w-3/4 rounded" />
        <div className="h-4 bg-gray-600 w-full rounded" />
        <div className="h-4 bg-gray-600 w-5/6 rounded" />
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-gray-600 rounded-full" />
          <div className="h-4 w-24 bg-gray-600 rounded" />
        </div>
        <div className="h-10 w-full bg-gray-600 rounded" />
      </div>
    </div>
  );
};

export default EventCardPlaceholder;
