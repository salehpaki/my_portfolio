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
      }, 100);

      return () => clearTimeout(typingEffect);
    }
  }, [charIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col-reverse md:flex-row items-center min-h-screen bg-gradient-to-r from-gray-600 to-white-400 text-white px-6 md:px-20"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col justify-center items-start text-left md:mr-12 w-full md:w-auto"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 transition duration-500 hover:scale-105 mt-16"
        >
          {displayedText}
          <span className="text-blue-300 animate-blink">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="md:mt-4 text-base md:text-lg max-w-xl transition duration-500 hover:text-blue-200 mb-5"
        >
          Web Developer with over 2 years of experience in designing, developing, and maintaining high-performance WordPress websites. Proficient in both front-end and back-end development, with hands-on experience in React.js and Tailwind CSS for building modern, responsive, and user-friendly interfaces. Strong commitment to clean code, performance optimization, and WordPress best practices. Proven ability to collaborate with cross-functional teams and deliver innovative solutions that enhance user experience and meet business goals.
        </motion.p>

        <motion.div className="flex space-x-4 mt-6 md:mt-8 flex-wrap md:flex-nowrap mb-4 md:mb-0">
          {[{
            href: "https://mail.google.com/",
            icon: <FaEnvelope size={20} />,
            bg: "bg-white",
            text: "text-black",
            hover: "hover:bg-gray-300"
          }, {
            href: "https://www.linkedin.com/in/muhammad-saleh-b1017b234/",
            icon: <FaLinkedin size={20} />,
            bg: "bg-blue-600",
            text: "text-white",
            hover: "hover:bg-blue-800"
          }, {
            href: "https://github.com/salehpaki",
            icon: <FaGithub size={20} />,
            bg: "bg-black",
            text: "text-white",
            hover: "hover:bg-gray-800"
          }].map(({ href, icon, bg, text, hover }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ${bg} ${text} rounded-md transition duration-300 ${hover}`}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          href="/MUHAMMAD SALEH - Web Developer - CV.pdf"
          download="MUHAMMAD SALEH - Web Developer - CV.pdf"
          className="w-[180px] md:w-auto h-10 md:h-12 mt-4 md:mt-6 flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-800"
        >
          <FaFileAlt className="mr-2 text-lg" /> SEE MY RESUME
        </motion.a> */}
        <motion.div className="flex space-x-4 mt-4 md:mt-6">
  {/* Resume Button */}
  <motion.a
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.8 }}
    whileHover={{ scale: 1.1 }}
    href="/MUHAMMAD SALEH - Web Developer - CV.pdf"
    download="MUHAMMAD SALEH - Web Developer - CV.pdf"
    className="w-[180px] md:w-auto h-10 md:h-12 flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-800"
  >
    <FaFileAlt className="mr-2 text-lg" /> SEE MY RESUME
  </motion.a>

  {/* Hire Me Button */}
  <motion.a
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
    whileHover={{ scale: 1.1 }}
    href="https://wa.me/923162252161"  // <-- Replace with your number
    target="_blank"
    rel="noopener noreferrer"
    className="w-[180px] md:w-auto h-10 md:h-12 flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-800"
  >
    HIRE ME
  </motion.a>
</motion.div>

      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-[400px] h-auto md:h-full overflow-hidden shadow-lg rounded-lg"
      >
        <img src="/sn.png" alt="Muhammad Saleh" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
