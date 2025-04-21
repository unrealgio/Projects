import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">FoodTech</a>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none focus:text-gray-800"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;