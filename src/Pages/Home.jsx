import React from "react";
import FeaturedDestinations from "../Components/FeaturedDestinations";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url('/Image/hero.png.jpg')] bg-no-repeat bg-cover bg-center"></div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Explore the world with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Discover amazing places at exclusive deals
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm sm:text-base transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <FeaturedDestinations />
    </>
  );
};

export default Home;
