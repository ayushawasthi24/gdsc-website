import React from "react";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-4 background text-white-500 text-xl navbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://logogen.gdscasu.com/logos/gdsc-logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2 logo"
            />
            <a href="/" className="text-black text-2xl font-semibold">
              GDSC IIT Indore
            </a>
          </div>
          <div className="hidden md:flex space-x-6 nav-elements">
            <ul>
              <li>
                <a href="/" className="text-black hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-black hover:text-gray-300">
                  Events
                </a>
              </li>
              <li>
                <a href="/projects" className="text-black hover:text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/resources" className="text-black hover:text-gray-300">
                  Resources
                </a>
              </li>
              <li>
                <a href="/team" className="text-black hover:text-gray-300">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none focus:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-600">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <a href="/" className="block text-black hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block text-black hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block text-black hover:text-gray-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-black hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
