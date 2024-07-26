import React from "react";
import { FaShareAlt } from "react-icons/fa";



function InfoSection({ trip }) {
  const textStyles = "px-1 text-gray-600 font-medium";

  const location = trip?.userSelection?.location?.label || "Unknown Location";
  const numberOfDays = trip?.userSelection?.numberOfDays || "N/A";
  const budget = trip?.userSelection?.budget || "N/A";
  const numberOfTravelers = trip?.userSelection?.numberOfTravelers || "N/A";

  if (!trip?.userSelection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <img
        src="/placeholder.jpg"
        className="h-[340px] w-full object-cover rounded-md"
      />
 
          <div className="my-5 flex flex-col gap-3">
            <h2 className="font-bold text-2xl">{location}</h2>
            <div className="flex gap-5 text-lg">
              <h2 className={textStyles}>📅 Trip for: {numberOfDays} Days</h2>
              <h2 className={textStyles}>💵 Budget: {budget}</h2>
              <h2 className={textStyles}>
                🧳 For: {numberOfTravelers}{" "}
                {trip.userSelection.numberOfTravelers === "1"
                  ? "Traveler"
                  : "Travelers"}
              </h2>
          
            </div>
          
          </div>
          <FaShareAlt />
  
    </div>
  );
}

export default InfoSection;
