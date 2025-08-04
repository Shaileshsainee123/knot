import React from 'react'

const ReviewPlaceholder = ({index}) => {
  return (
    <>
    <div
      key={`placeholder-${index}`}
      className="flex-shrink-0 max-w-[350px] bg-[linear-gradient(#1E1E1ECC,#0A0A0AE5)] p-5 rounded-lg animate-pulse"
    >
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
          <div>
            <div className="h-4 w-24 bg-gray-700 rounded mb-1" />
            <div className="h-3 w-16 bg-gray-700 rounded" />
          </div>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2" />
      <div className="h-4 bg-gray-700 rounded w-5/6 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-2/3" />
    </div>
    </>
  )
}

export default ReviewPlaceholder