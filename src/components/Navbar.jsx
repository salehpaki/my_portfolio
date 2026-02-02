import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    setMenuOpen(false);
    if (id === "about") {
      navigate("/about");
    } else if (id === "home") {
      navigate("/");
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <img
            src="/salehlogo.png"
            alt="SALEH Logo"
            className="h-10 w-10 mr-3 object-contain"
          />
          <span className="text-white font-bold text-2xl hidden sm:inline">
            SALEH
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {["Home", "Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-white hover:text-gray-400 transition font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/salehpaki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saleh-b1017b234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-lg flex flex-col items-center space-y-6 py-6">
          {["Home", "Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-white text-lg hover:text-gray-400 transition font-medium"
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-6">
            <a
              href="https://github.com/salehpaki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-saleh-b1017b234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
