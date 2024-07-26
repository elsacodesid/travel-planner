import React from 'react'

function Hotels({trip}) {

  const hotelOptions = trip?.tripData?.hotelOptions || [];

  console.log("hotelOptions: ", hotelOptions)
  return (
    <div>
    <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    <div className="hotels-container">
      <h2>Hotel Options</h2>
      <div className="hotel-list">
        {hotelOptions.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <h3>{hotel.name}</h3>
            <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
            <p>Rating: {hotel.rating}</p>
            <p>Price: {hotel.price}</p>
            <p>Address: {hotel.address}</p>
            <p>Description: {hotel.description}</p>
            <p>Coordinates: {hotel.geoCoordinates}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  )
}

export default Hotels