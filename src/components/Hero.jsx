import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Welcome to GDSC Club!
            </h1>
            <p className="text-lg mt-4">
              The Google Developer Student Clubs (GDSC) Club at IIT Indore is a
              community for students interested in technology. Join us to learn,
              share, and collaborate on exciting projects and events.
            </p>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
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
