import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 days for Couple with Economy budget. Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel imageurl, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time travel each of the location for 3 days with each day plain with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100/night\",\n      \"imageUrl\": \"https://www.thelinq.com/media/images/header-images/linq-hotel-room-view.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly casino hotel located in the heart of Fremont Street Experience. Offers a vibrant atmosphere, live music, and a range of dining options.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80/night\",\n      \"imageUrl\": \"https://media.nomadicmatt.com/wp-content/uploads/2017/02/CircusCircus_Hotel.jpg\",\n      \"geoCoordinates\": \"36.1143, -115.1722\",\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel with a circus theme, featuring a midway with carnival rides, a large casino, and affordable dining.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120/night\",\n      \"imageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/header-images/gnl-hotel-lobby.jpg\",\n      \"geoCoordinates\": \"36.1693, -115.1424\",\n      \"rating\": 4.5,\n      \"description\": \"A luxurious hotel known for its ornate décor, a shark tank, and a lively casino. Offers various dining options and a pool complex.\"\n    },\n    {\n      \"name\": \"The Strat Hotel, Casino & SkyPod\",\n      \"address\": \"2000 Las Vegas Blvd S, Las Vegas, NV 89104\",\n      \"price\": \"$70-$150/night\",\n      \"imageUrl\": \"https://media.nomadicmatt.com/wp-content/uploads/2018/09/The-Strat-Las-Vegas-hotel.jpg\",\n      \"geoCoordinates\": \"36.1261, -115.1697\",\n      \"rating\": 4.0,\n      \"description\": \"A hotel with an observation tower offering panoramic views of Las Vegas. Includes a casino, a variety of dining options, and entertainment venues.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"name\": \"Fremont Street Experience\",\n      \"details\": \"Experience the vibrant energy of Fremont Street with its iconic canopy, live music, street performers, and vintage casinos.\",\n      \"imageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/page-hero/public/2018-01/FremontStreet_Experience.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"time\": \"Evening\",\n      \"bestTime\": \"After sunset\"\n    },\n    \"day2\": {\n      \"name\": \"Bellagio Conservatory & Botanical Garden\",\n      \"details\": \"Admire the stunning floral displays and seasonal themes in this beautiful garden, free to visit.\",\n      \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/pages/conservatory/conservatory_carousel_7.jpg\",\n      \"geoCoordinates\": \"36.1107, -115.1734\",\n      \"time\": \"Morning\",\n      \"bestTime\": \"Anytime\"\n    },\n    {\n      \"name\": \"The Strip\",\n      \"details\": \"Explore the iconic Las Vegas Strip, walk along the boulevard, see the world-famous resorts, and enjoy the vibrant atmosphere.\",\n      \"imageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/page-hero/public/2020-06/Strip_Skyline_at_Night.jpg\",\n      \"geoCoordinates\": \"36.1180, -115.1716\",\n      \"time\": \"Afternoon\",\n      \"bestTime\": \"Evening for lights\"\n    },\n    \"day3\": {\n      \"name\": \"Red Rock Canyon National Conservation Area\",\n      \"details\": \"Escape the city for a scenic drive through Red Rock Canyon, with stunning rock formations and hiking trails.\",\n      \"imageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/RedRockCanyon_Nevada.jpg\",\n      \"geoCoordinates\": \"36.1841, -115.3404\",\n      \"time\": \"Day Trip\",\n      \"bestTime\": \"Morning or afternoon\"\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized based on your preferences.\n* Consider using public transportation or ride-sharing services to save on transportation costs.\n* Look for free activities and attractions to maximize your budget.\n* Book your hotel and activities in advance for better deals.\n* Enjoy the vibrant atmosphere of Las Vegas and have fun! \n"},
          ],
        },
      ],
    });
  
  
  
  
 