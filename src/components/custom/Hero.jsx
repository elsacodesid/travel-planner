import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your
        Fingertips!   
      </h1>
      <p className="text-xl text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in.</p>
      <Button>Get Started, It's Free!</Button>
    </div>
  );
}

export default Hero;
