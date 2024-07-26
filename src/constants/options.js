export const SelectTravelerList = [
    {
        id: 1,
        title: "Just Me",
        desc: "A solo traveler in exploration",
        icon: "🎒🏖️",
        people: "1"
    },
    {
        id: 2,
        title: "A Couple",
        desc: "Two travelers in tandem",
        icon: "🧳🧳🌴",
        people: "2 People"
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of fun-loving adventurers",
        icon: "🚐 🍃",
        people: "3 to 5 People"
    },
    {
        id: 4,
        title: "Friends",
        desc: "A bunch of thrill-seekers",
        icon: "🚌 💨",
        people: "5 - 10 People"
    }
];
 

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Economy",
        desc: "Stay conscious of costs",
        icon: "💸"
    },
    {
        id: 2,
        title: "Standard",
        desc: "Balance comfort and affordability",
        icon: "💰"
    },
    {
        id: 3,
        title: "Premium",
        desc: "Enjoy extra comfort and services",
        icon: "💳"
    },
    {
        id: 4,
        title: "Luxury",
        desc: "Indulge in top-notch amenities",
        icon: "🏆"
    }
];

export const AI_PROMPT = "Generate in valid JSON format for Firebase (No nested data!): A Travel Plan for {location}, for {totalDays} days for {numberOfTravelers} with {budget} budget. Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel imageUrl, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time of travel each of the location for {totalDays} days with each day plan with best time to visit."
