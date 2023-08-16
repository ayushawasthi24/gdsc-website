import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-white-900 text-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="heading-container">
              <h1 className="text-4xl md:text-6xl font-extrabold moving-background-heading">
                Welcome to GDSC Club!
              </h1>
            </div>
            <p className="text-lg mt-4">
              The Google Developer Student Clubs (GDSC) Club at IIT Indore is a
              community for students interested in technology. Join us to learn,
              share, and collaborate on exciting projects and events.
            </p>
            <div className="mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-400 text-black py-2 px-4 rounded">
                Join Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://logogen.gdscasu.com/logos/gdsc-logo.png"
              alt="GDSC Club"
              className="rounded-md ms-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
