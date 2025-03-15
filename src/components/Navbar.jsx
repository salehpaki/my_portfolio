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
    <nav className="px-6 py-4 fixed top-0 w-full bg-gray z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="text-3xl font-bold text-black cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          SALEH
        </div>

        <div className="hidden md:flex space-x-10">
          {["Home", "Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-black hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/salehpaki" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-saleh-b1017b234/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition">
            <FaLinkedin size={24} />
          </a>
        </div>

        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-500 shadow-md flex flex-col items-center space-y-6 py-6">
          {["Home", "Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-black text-lg hover:text-gray-700 transition"
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-6">
            <a href="https://github.com/salehpaki" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-saleh-b1017b234/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;