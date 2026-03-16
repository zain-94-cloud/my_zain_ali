import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted")
    console.log("Form submitted");
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/Image/hero.png.jpg')] bg-no-repeat bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 bg-black/70 p-8 rounded-lg"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded bg-white text-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
