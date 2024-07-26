import React from "react";

function PlacesToVisit({trip}) {
    const itinerary = trip?.tripData?.itinerary
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <h2 className="font-bold text-xl mt-5">Places To Visit</h2>
{itinerary.map((item, index) => (
    <div>
        <h2 className="font-medium">
Day {item.day}
        </h2>
        <h2>
{item.placeName}
        </h2>
        <h2>
{item.time}
        </h2>
    </div>
))}
    </div>
  );
}

export default PlacesToVisit;
