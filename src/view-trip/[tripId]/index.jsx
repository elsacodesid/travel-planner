import Hotels from "@/components/Hotels";
import InfoSection from "@/components/InfoSection";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({})
  
  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  const getTripData = async () => {
    try {
      const docRef = doc(db, "UserTrips", tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
       setTrip(docSnap.data())
    
      } else {
        console.log("No such document");
        toast("No trip found");
      }
    } catch (error) {
      console.error("Error fetching trip data:", error);
      toast("Error fetching trip data");
    }
  };
  return <div>
    
    {/* Information Section */}
    <InfoSection trip={trip} />

    {/* Hotels */}
    <Hotels trip={trip}/>

    {/* Itinerary */}
    
    {/* Footer */}
    </div>;
}

export default ViewTrip;
