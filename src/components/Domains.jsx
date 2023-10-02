import React from "react";

const Domains = () => {
  return (
    <div className="flex flex-col h-auto md:h-96 justify-center items-center bg-black">
      <h1 className="text-white text-4xl md:text-5xl mb-4 font-black">
        Domains
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-48 h-48 md:w-56 md:h-56 bg-red-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center">
          <p className="text-white">WEB DEVELOPMENT</p>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 bg-yellow-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center">
          <p className="text-white">APP DEVELOPMENT</p>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 bg-green-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center">
          <p className="text-white">AI/ML</p>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 bg-blue-600 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center">
          <p className="text-white">BLOCKCHAIN</p>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 bg-purple-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center">
          <p className="text-white">GAME DEVELOPMENT</p>
        </div>
      </div>
    </div>
  );
};

export default Domains;
