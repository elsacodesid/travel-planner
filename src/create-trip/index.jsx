import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelerList } from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="sm:pdx-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="tex-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />

          <div>
            <h2 className="tex-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
            <Input placeholder={"Eg. 3"} type="number" onChange={(e) => handleInputChange("numberOfDays", e.target.value)} />
          </div>
          <div>
            <h2 className="tex-xl my-3 font-medium">What is your budget?</h2>
            <h2>
              The budget is exclusively allocated for activities and dining
              purposes.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow- cursor-pointer"
              onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
          <div>
            <h2 className="tex-xl my-3 font-medium">
              Who are you planning to travel with?
            </h2>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {SelectTravelerList.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow- cursor-pointer"
                onClick={() => handleInputChange("NumberOfTravelers", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
          <div className="my-10 justify-end flex">
            <Button>Generate Trip</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
