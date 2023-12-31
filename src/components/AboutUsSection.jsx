import React from "react";

const AboutUsSection = () => {
  return (
    <div className="relative w-full">
      <div className="z-0">
        <img
          src="images/red.svg"
          alt=""
          className="absolute w-32 h-32 top-0 right-0 lg:w-48 lg:h-48"
        />
      </div>
      <div className="z-0">
        <img
          src="images/blue.svg"
          alt=""
          className="absolute w-32 h-32 left-0 top-0 lg:w-44 lg:h-48"
        />
        <img
          src="images/green.svg"
          alt=""
          className="absolute w-18 h-32 left-0 bottom-0 lg:w-24 lg:h-48"
        />
        <img
          src="images/yellow.svg"
          alt=""
          className="absolute w-32 h-32 right-0 bottom-0 lg:w-40 lg:h-44"
        />
      </div>
      <div className="bg-gray-100 flex flex-col lg:flex-row justify-center items-center py-8">
        <div className="mx-auto py-5 my-10">
          <img
            src="https://gdsc.jit.ac.in/wp-content/uploads/2022/08/GDSCboy.png"
            alt="About Us"
            className="w-96 h-96"
          />
        </div>

        <div className="lg:w-1/2 lg:ml-8 relative flex justify-center items-center">
          <div className=" z-10">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 ">
              Google Developer Student Clubs are university based community
              groups for students interested in Google developer technologies.
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome. By joining a GDSC,
              students grow their knowledge in a peer-to-peer learning
              environment.
            </p>
            <p className="text-gray-700 mt-2">
              Google Developer Student Clubs (GDSC) is a programme that targets passionate
              students from developer communities across the globe. This is a unique platform for
              students to not just learn through P2P workshops but solve actual
              real-world problems for the local community through sponsored
              projects. IIT Indore is now part of the few institutes that have
              been selected for this program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
