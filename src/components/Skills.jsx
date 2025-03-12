import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "/Html.png" },
  { name: "CSS", img: "/Css.png" },
  { name: "React", img: "/React.png" },
  { name: "Next", img: "/Next.png" },
  { name: "JAVASCRIPT", img: "/js.png" },
  { name: "Tailwind", img:"/ss.png" },
  { name: "WORDPRESS", img: "/wp.png" },
  { name: "GIT", img: "/git.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 text-gray-900 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold border-2 border-black inline-block px-6 py-2 mb-6">
        SKILLS
      </h2>

      {/* Subtitle */}
      <p className="text-lg font-semibold mb-8">USING NOW:</p>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <p className="text-sm md:text-md font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
