import React from "react";
const testimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This travel agency provided excellent service and helped us plan the perfect vacation. Highly recommend!",
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.",
  },
  {
    name: "Alice Johnson",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Great customer service and fantastic travel packages. Will definitely book with them again.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Clients Say
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.location}</p>
            <p className="text-gray-700 italic">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
