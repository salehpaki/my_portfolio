

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div 
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 mt-24 py-4"
      style={{ backgroundImage: "url('/ss.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 mt-16">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-10"> 
        {[{
          title: "Mobapp-fitness-app",
          description: "A React Native mobile app for workout tracking, meal planning, and progress monitoring.",
          link: "https://github.com/salehpaki/Mobapp-fitness-app",
          image: "/mb.png"
        }, {
          title: "React + Vite",
          description: "A sleek, fully responsive React website with modern UI and high performance.",
          link: "https://github.com/salehpaki/Nexcent.com",
          image: "/Illustration.png"
        }, {
          title: "Portfolio using advanced HTML and CSS",
          description: "I have built this portfolio using advanced HTML and CSS, showcasing my skills in modern web design.",
          link: "https://github.com/salehpaki/msportfolio",
          image: "/ff.png"
        }, {
          title: "Java",
          description: "The Mobile Market System is a simple Java-based project designed to demonstrate core programming concepts such as object-oriented programming.",
          link: "https://github.com/salehpaki/OOP-javaproject",
          image: "/jv.png"
        }].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-md h-72"
          >
            <div className="p-6 flex flex-col justify-center md:w-1/2 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-900 text-gray-900 px-3 py-1.5 rounded-md text-sm hover:bg-gray-900 hover:text-white transition duration-300 w-max"
              >
                View Project
              </a>
            </div>
            <div className="md:w-1/2 h-full">
              <img src={project.image} alt="Project" className="w-full h-full object-cover shadow-lg" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
