import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const textToType = "Hi all, I'm Muhammad Saleh";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < textToType.length) {
      const typingEffect = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(typingEffect);
    }
  }, [charIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-0 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen pt-24 md:pt-0 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white px-6 md:px-20"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col justify-center items-start text-left md:mr-12 w-full md:w-auto"
      >
        {/* Typing Heading */}
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-4 mt-10 md:mt-0">
          {displayedText}
          <span className="text-blue-400 animate-pulse">|</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg max-w-xl text-gray-300 mb-6 leading-relaxed"
        >
          Web Developer with over 2 years of experience in designing,
          developing, and maintaining high-performance WordPress websites.
          Skilled in React.js and Tailwind CSS for building modern,
          responsive, and user-friendly interfaces. Passionate about clean
          code, performance optimization, and delivering business-focused
          solutions.
        </motion.p>

        {/* Social Icons */}
        <motion.div className="flex space-x-4 mb-6">
          {[
            {
              href: "mailto:yourmail@gmail.com",
              icon: <FaEnvelope size={18} />,
            },
            {
              href: "https://www.linkedin.com/in/muhammad-saleh-b1017b234/",
              icon: <FaLinkedin size={18} />,
            },
            {
              href: "https://github.com/salehpaki",
              icon: <FaGithub size={18} />,
            },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-md hover:bg-gray-300 transition duration-300"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

    {/* Buttons */}
<div className="flex flex-row gap-3 mt-2 w-full max-w-sm mb-4">

  {/* Resume Button */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    href="/MUHAMMAD SALEH - Web Developer - CV.pdf.pdf"
    download="MUHAMMAD SALEH - Web Developer - CV.pdf"
    className="flex-1 h-11 md:h-12 flex items-center justify-center bg-white text-black text-sm md:text-base font-medium rounded-md shadow-md hover:bg-gray-200 transition duration-300"
  >
    <FaFileAlt className="mr-2 text-sm md:text-base" />
    Resume
  </motion.a>

  {/* Hire Me Button */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    href="https://wa.me/923162252161"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 h-11 md:h-12 flex items-center justify-center bg-blue-600 text-white text-sm md:text-base font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-300"
  >
    Hire Me
  </motion.a>

</div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-0 w-[180px] h-[180px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl mb-8 md:mb-0"
      >
        <img
          src="/sn1.png"
          alt="Muhammad Saleh"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
