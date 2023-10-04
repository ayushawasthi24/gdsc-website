import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-4 background text-white-500 text-xl navbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mt-1">
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
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/events"}>Events</NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>Projects</NavLink>
              </li>
              <li>
                <NavLink to={"/resources"}>Resources</NavLink>
              </li>
              <li>
                <NavLink to={"/team"}>Team</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>
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
        <div className="md:hidden background">
          <ul className="px-4 py-2 space-y-2">
            <li className="">
              <a href="/" className="block text-black hover:text-gray-300 border-2 border-gray-400 focus:outline rounded-xl">
                Home
              </a>
            </li>
            <li className="">
              <a
                href="/events"
                className="block text-black hover:text-gray-300 border-2 border-gray-400 focus:outline rounded-xl"
              >
                Events
              </a>
            </li>
            <li className="">
              <a
                href="/projects"
                className="block text-black hover:text-gray-300 border-2 border-gray-400 focus:outline rounded-xl"
              >
                Projects
              </a>
            </li>
            <li className="">
              <a
                href="/resources"
                className="block text-black hover:text-gray-300 border-2 border-gray-400 focus:outline rounded-xl"
              >
                Resources
              </a>
            </li>
            <li className="">
              <a
                href="/contactus"
                className="block text-black hover:text-gray-300 border-2 border-gray-400 focus:outline rounded-xl"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
