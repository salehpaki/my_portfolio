import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8 flex flex-col items-center text-center">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="text-gray-400 hover:text-white mb-4 text-sm flex flex-col items-center cursor-pointer"
      >
        <span className="text-lg">⌃</span>
        BACK TO TOP
      </button>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-white text-xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-xl">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-xl">
          <FaInstagram />
        </a>
        <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white text-xl">
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        <span className="font-bold">&copy; {new Date().getFullYear()} M SALEH</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
