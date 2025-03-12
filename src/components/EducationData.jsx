import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2020 - 2024",
    degree: "BSCS In Computer Science",
    institution: "IQRA UNIVERSITY",
    location: "GULSHAN, KARACHI",
    description:
      "University life is a blend of learning, growth, and unforgettable experiences that shape both your mind and character.",
  },
  {
    year: "2018 - 2019",
    degree: "Intermediate",
    institution: "BAHRIA COLLEGE",
    location: "MAJEED SRE, KARACHI",
    description:
      "College life is an exciting time of independence and exploration. It's a chance to deepen knowledge in your field.",
  },
  {
    year: "2007 - 2017",
    degree: "Matric",
    institution: "DAR-UL-MADINAH SECONDARY SCHOOL",
    description:
      "School life is a journey of learning and growth. It's a place to make friends, discover interests, and face challenges",
  },
];

const EducationData = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-800  flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center max-w-xs mx-auto transition-all duration-300"
          >
            <p className="text-lg font-semibold text-gray-700">{edu.year}</p>
            <h3 className="text-xl font-bold mt-2 text-gray-900">{edu.degree}</h3>
            <p className="text-md font-semibold mt-2 text-gray-700">{edu.institution}</p>
            {edu.location && <p className="text-sm text-gray-500 mt-1">{edu.location}</p>}
            <p className="text-sm text-gray-600 mt-3">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationData;
