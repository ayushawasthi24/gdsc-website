import React from "react";
import { useCallback } from "react";
import "./Hero.css";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="hero-container">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        className="particles"
        options={{
          particles: {
            number: {
              value: 25, // Number of particles
            },
            color: {
              value: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437", "#4285F4"],
            },
            move: {
              enable: true, // Allow particle movement
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 30 },
            },
          },
        }}
      />
      <div className="bg-white-900 text-black py-16 px-20 md:px-4">
        <div className="max-w-6xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-5xl md:text-6xl md:font-extrabold moving-background-heading">
                Welcome to GDSC Club!
              </h1>
              <p className="text-lg mt-4">
                The Google Developer Student Clubs (GDSC) Club at IIT Indore is
                a community for students interested in technology. Join us to
                learn, share, and collaborate on exciting projects and events.
              </p>
              <div className="mt-6">
                <button className="bg-yellow-400 hover:bg-yellow-400 text-black py-2 px-4 rounded">
                  Join Us
                </button>
              </div>
            </div>
            <div className="hidden md:w-1/2 md:block">
              <img
                src="https://logogen.gdscasu.com/logos/gdsc-logo.png"
                alt="GDSC Club"
                className="rounded-md ms-5"
              />
            </div>
          </div>
          <div className="container">
            {/* <h1>Hello wordl</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
