import React from "react";
import OurServices from "../Components/OurServices";
const destinations = [
  {
    title: "Paris, France",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    desc: "The City of Light draws millions of visitors every year with its unforgettable ambiance.",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy.",
  },
  {
    title: "New York, USA",
    img: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/New_York_1.jpg",
    desc: "New York City is the largest city in the United States and home to many world-famous attractions.",
  },
  {
    title: "Tokyo, Japan",
    img: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    desc: "Tokyo offers a seemingly unlimited choice of entertainment, shopping, cultural attractions, and dining.",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Featured Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{place.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <OurServices />
    </section>
  );
};

export default FeaturedDestinations;
