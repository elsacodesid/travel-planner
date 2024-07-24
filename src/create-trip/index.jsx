import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [place, setPlace] = useState()
  return (
    <div className="sm:pdx-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="tex-xl my-3 font-medium">What is your destination of choice?</h2>
        <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
        selectProps={{
place,
onChange: (v) => {setPlace(v); console.log(v)}
        }}
        />
        <h2 className="tex-xl my-3 font-medium">How many days are you planning your trip?</h2>
<Input placeholder={"Ex.3"} type="number" />
        </div>
      </div>
      
    </div>
  );
}

export default CreateTrip;
