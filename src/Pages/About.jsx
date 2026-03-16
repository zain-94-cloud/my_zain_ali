import React from "react";

const About = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/Image/hero.png.jpg')] bg-no-repeat bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
          About Us
        </h1>
        <p className="text-lg sm:text-xl max-w-xl">
          Learn more about our journey, mission, and values. We strive to create
          amazing experiences and build a great community.
        </p>
      </div>
    </div>
  );
};

export default About;
