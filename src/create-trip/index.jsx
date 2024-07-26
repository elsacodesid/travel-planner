import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelerList,
} from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { chatSession } from "@/service/AIModel";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      !formData?.location ||
      !formData?.budget ||
      !formData?.numberOfDays ||
      !formData?.numberOfTravelers
    ) {
      toast({
        title: "Error:",
        description: "Please fill all details.",
      });
      setIsLoading(false);
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData.location?.label
    )
      .replace("{totalDays}", formData.numberOfDays)
      .replace("{numberOfTravelers}", formData.numberOfTravelers)
      .replace("{budget}", formData.budget);

    setIsLoading(true);

    try {
      const tripResponse = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = tripResponse.response.candidates[0].content.parts[0].text

      console.log("Trip Data Received: ", tripData);

      await saveTrip(tripData);
    } catch (error) {
      console.error("Error generating trip:", error);
      toast({
        title: "Error:",
        description: `Failed to generate trip ${error.message}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        OnGenerateTrip();
      });
  };

  const saveTrip = async (tripData) => {
    setIsLoading(true);
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));

   

    await setDoc(doc(db, "UserTrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      id: docId,
      userEmail: user?.email

    });
    setIsLoading(false);
    navigate("/view-trip/"+ docId)
  };

  return (
    <div className="sm:pdx-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
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
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip? (No more than 5 days)
          </h2>
          <select
            onChange={(e) =>
              handleInputChange("numberOfDays", e.target.value)
            }
            className="p-2 border rounded-lg"
            defaultValue=""
          >
            <option value="" disabled>
              Select number of days
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <p>
            The budget is exclusively allocated for activities and dining
            purposes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:border-blue-300 cursor-pointer ${
                formData?.budget === item.title && "bg-green-100"
              }`}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Who are you planning to travel with?
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {SelectTravelerList.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:border-blue-300 cursor-pointer ${
                formData?.numberOfTravelers === item.people && "bg-green-100"
              }`}
              onClick={() =>
                handleInputChange("numberOfTravelers", item.people)
              }
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
        <div className="my-10 justify-end flex">
          <Button disabled={isLoading} onClick={OnGenerateTrip}>
            {isLoading ? <AiOutlineLoading className="animate-spin mr-2" /> : null}
            {isLoading ? "Generating..." : "Generate Trip"}
          </Button>
        </div>
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/vite.svg" alt="Logo" />
                <h2 className="font-bold text-lg mt-7">
                  Sign In with Google
                </h2>
                <p>Sign in to the app with Google Authentication securely</p>
                <Button
                  onClick={handleLogin}
                  className="w-full mt-5 flex gap-4"
                >
                  <FcGoogle className="h-6 w-6" />
                  Sign In With Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default CreateTrip;
