import React from "react";

function Hotels({ trip }) {
  const hotelOptions = trip?.tripData?.hotelOptions || [];

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      
          {hotelOptions.map((hotel, index) => (
            <div>
              <img src="/placeholder.jpg"alt={hotel.name} className="rounded-xl w-300 h-[250px]" />
              <div className="my-3">
                <h2 className="font-medium">{hotel.name}</h2>
                <h2 className="text-gray-600">📍 {hotel.address}</h2>
                <h2 className="font-medium text-medium">💲 {hotel.price}</h2>
                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
      
      </div>
    </div>
  );
}

export default Hotels;
