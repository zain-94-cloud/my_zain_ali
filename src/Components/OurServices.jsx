import React from "react";
import Testimonials from "../Components/Testimonials";
import { Plane, Hotel, Umbrella, ConciergeBell } from "lucide-react";

const services = [
  {
    title: "Flight Booking",
    icon: <Plane className="w-10 h-10 text-blue-600" />,
    desc: "We provide easy and quick flight booking services to make your travel hassle-free.",
  },
  {
    title: "Hotel Booking",
    icon: <Hotel className="w-10 h-10 text-blue-600" />,
    desc: "Book hotels at the best prices with our exclusive deals and discounts.",
  },
  {
    title: "Beach Tours",
    icon: <Umbrella className="w-10 h-10 text-blue-600" />,
    desc: "Enjoy relaxing beach tours with all-inclusive packages and guided tours.",
  },
  {
    title: "Concierge Services",
    icon: <ConciergeBell className="w-10 h-10 text-blue-600" />,
    desc: "Get personalized concierge services for a seamless travel experience.",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
      <Testimonials />
    </section>
  );
};

export default OurServices;
