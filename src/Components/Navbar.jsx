import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 mt-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-red-500">Travel</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home 
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
          open ? "max-h-80 py-4 shadow-md" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
