import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React: Tips & Tricks",
    description: "Learn advanced techniques to enhance your React skills and build efficient applications.",
    image: "/re.webp",
    date: "March 12, 2025",
  },
  {
    id: 2,
    title: "Framer Motion: Smooth Animations in React",
    description: "A beginner-friendly guide to creating stunning animations using Framer Motion in React.",
    image: "/be.avif",
    date: "March 5, 2025",
  },
  {
    id: 3,
    title: "Optimizing Web Performance",
    description: "Best practices to improve website speed, SEO, and overall user experience.",
    image: "/rr.png",
    date: "February 28, 2025",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 border-b-4 border-black inline-block pb-2"
      >
        BLOG
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: post.id * 0.2 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer w-80"
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 text-sm">{post.description}</p>
              <button className="mt-3 px-3 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition text-sm">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;