import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex justify-center p-6 bg-gray-900 py-2">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white border-blue-800/90 border-[10px] rounded-lg shadow-lg w-full max-w-4xl p-8 relative"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mt-2 py-4 text-center"
        >
          <span className="text-blue-800/90">About</span> Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-black rounded-xl  p-6 md:p-10 -mt-9"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Muhammad Saleh</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I'm a passionate Front-end Web Developer specializing in crafting modern, visually stunning, and high-performance web applications. 
              With expertise in Htnml, css, javascript, React, Next, Tailwind, Node js, Wordpress, and UI/UX design, I focus on delivering seamless user experiences.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
              I love turning complex problems into simple, elegant solutions using the latest web technologies.
              Let's build something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="bg-blue-800/90 text-white p-6 rounded-xl max-w-sm absolute bottom-6 right-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
        <p className="text-sm">
        I have completed my Bachelor's degree in Computer Science from Iqra University, where I gained a strong foundation in software development and problem-solving, preparing me for the ever-evolving tech industry.
</p>
<a 
  href="/transcript.pdf" 
  download 
  className="text-black-900 hover:underline text-sm block mt-2"
>
  Download Transcript
</a>


        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
