import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Massage submitted");
    console.log("Massage submitted");
  };
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/Image/hero.png.jpg')] bg-no-repeat bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-6">
          Have questions? We'd love to hear from you. Reach out via the form
          below or email us directly.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
