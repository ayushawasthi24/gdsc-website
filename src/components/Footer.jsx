import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-5 pb-2">
      <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">
          Google Developers Students Club
        </h2>
        <p>IIT Indore</p>
        <p>Address: IIT Indore Simrol, Indore, Madhya Pradesh</p>
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>  
      <div className="text-gray-500 my-2">
        <div className="mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} GDSC IIT Indore. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
