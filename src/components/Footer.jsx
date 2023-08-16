import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-900 text-black py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GDSC Club, IIT Indore. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
