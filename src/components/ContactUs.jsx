import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGlobe,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import SendUsMessage from "./SendUsMessage";
import { motion } from "framer-motion";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <motion.div
      className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-blue-600 bg-opacity-80 text-white p-8 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="pb-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      </div>
      
      <div className="block">
      <div className="map mt-4">
        <iframe
          title="iitmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685680821744!2d75.91814817503867!3d22.520364634883258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%20(IIT)%2C%20Indore!5e0!3m2!1sen!2sin!4v1693555440269!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-auto h-auto lg:w-[720px] lg:h-[480px]"
        ></iframe>
      </div>
      <SendUsMessage />
      </div>
      <div className="relative flex items-center justify-center space-x-10">
        <motion.a
          href="#"
          className="p-4 bg-white backdrop-filter bg-opacity-80 rounded-full hover:scale-105 transform transition duration-300"
        >
          <FaInstagram className="text-3xl text-red-500" />
        </motion.a>
        <motion.a
          href="#"
          className="p-4 bg-white rounded-full hover:scale-105 transform transition duration-300"
        >
          <FaLinkedin className="text-3xl text-[#0097e6]" />
        </motion.a>
        <motion.a
          href="#"
          className="p-4 bg-white rounded-full hover:scale-105 transform transition duration-300"
        >
          <FaFacebook className="text-3xl text-blue-500" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactUs;
