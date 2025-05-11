import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Front-End Developer",
    company: "360XpertSolutions",
    duration: "Jan 2024 - Jan 2025",
    description: "Working on HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and WordPress to build modern web applications."
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Developing responsive and interactive UI/UX using React.js, Next.js, Tailwind CSS, and WordPress for various clients."
  },
  {
    role: "Marketing Supervisor & Specialist",
    company: "ENVISION_INTERNATIONAL",
    duration: "2021 - 2024",
    description: "Project marketing to enhance user experience and sales. Ensured brand consistency and optimized website performance across different platforms."
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div id="experience" className="py-12 bg-white text-black" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-2xl shadow-lg flex gap-4 items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-3 bg-gray-700 rounded-full">
                <Briefcase className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">{exp.role}</h3>
                <p className="text-yellow-400">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
