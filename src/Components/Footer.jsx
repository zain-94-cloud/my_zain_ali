import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-red-500 text-2xl font-bold mb-3 ">Travel Agency</h3>
          <p>
            Your trusted partner for unforgettable travel experiences. Explore
            the world with us.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="contect" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </Link>
          </div>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Travel Agency. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link to="/" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
