import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, []);

  const imageSize = leftHeight > 96 ? leftHeight - 96 : leftHeight;

  return (
    
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center min-h-screen bg-gradient-to-r from-gray-600 to-white-400 text-white px-6 md:px-20"
    >
      {/* Left Section (Text) */}
      <motion.div
        ref={leftRef}
        variants={slideFromLeft}
        className="flex flex-col justify-center items-start text-left md:mr-12 w-full md:w-auto"
      >
        <motion.h1
          variants={slideFromLeft}
          className="text-4xl md:text-5xl font-bold mb-4 transition duration-500 hover:scale-105 mt-16"
        >
          Hi all, I'm Muhammad Saleh
        </motion.h1>

        <motion.p
          variants={slideFromLeft}
          className="md:mt-4 text-base md:text-lg max-w-xl transition duration-500 hover:text-blue-200 mb-5"
        >
          I’m a creative and detail-oriented Front-end Web Developer dedicated to crafting seamless, visually engaging, and high-performance web experiences. With a strong passion for clean design and intuitive user interfaces, I transform ideas into reality through modern web technologies. Constantly evolving and learning, I thrive on turning challenges into innovative digital solutions.


        </motion.p>

        {/* Social Icons */}
<motion.div
  variants={slideFromRight}
  className="flex space-x-4 mt-6 md:mt-8 flex-wrap md:flex-nowrap mb-4 md:mb-0"
>

          {[
            {
              href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
              icon: <FaEnvelope size={20} />,
              bg: "bg-white",
              text: "text-black",
              hoverBg: "hover:bg-gray-300",
              hoverText: "hover:text-gray-800",
            },
            {
              href: "https://www.linkedin.com/in/muhammad-saleh-b1017b234/",
              icon: <FaLinkedin size={20} />,
              bg: "bg-blue-600",
              text: "text-white",
              hoverBg: "hover:bg-blue-800",
              hoverText: "hover:text-white",
            },
            {
              href: "https://github.com/salehpaki",
              icon: <FaGithub size={20} />,
              bg: "bg-black",
              text: "text-white",
              hoverBg: "hover:bg-gray-800",
              hoverText: "hover:text-gray-200",
            },
          ].map(({ href, icon, bg, text, hoverBg, hoverText }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideFromRight}
              whileHover={{ scale: 1.2 }}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ${bg} ${text} rounded-md transition duration-300 ${hoverBg} ${hoverText}`}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

       {/* Resume Button */}
       <motion.a
  variants={slideFromRight}
  whileHover={{ scale: 1.1 }}
  href="/Muhammad_Saleh_Resume.pdf" // Public folder mein rakhne ke baad yeh path sahi hoga
  download="Muhammad_Saleh_Resume.pdf"
  className="w-[180px] md:w-auto h-10 md:h-12 mt-4 md:mt-6 flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-800"
>
  <FaFileAlt className="mr-2 text-lg" /> SEE MY RESUME
</motion.a>




      </motion.div>

      {/* Right Section (Box-Shaped Image) */}
      <motion.div
        variants={slideFromRight}
        style={{ height: imageSize, width: imageSize }}
        className="w-full md:w-[400px] h-auto md:h-full overflow-hidden shadow-lg rounded-lg"
      >
        <img
          src="\sn.png"
          alt="Muhammad Saleh"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
