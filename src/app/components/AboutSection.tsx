"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  "Started as an IT student with a passion for building real-world tools — from Excel dashboards to web apps.",
  "Developed a full business management system in Excel with automated inventory, sales, and expense tracking.",
  "Built Ndaje, a multi-language bus ticket booking platform using Python, PHP, and JavaScript.",
  "Served as IT Consultant at Radiant Company, providing system support and technical troubleshooting.",
  "Currently exploring AI-driven solutions to enhance user experiences in web development.",
];

export default function AboutSection() {
  const [currentMilestone, setCurrentMilestone] = useState(milestones[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone(milestones[Math.floor(Math.random() * milestones.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Journey</h2>
        <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">From Theory to Code · Builder at Heart</p>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-7xl shadow-lg">
              👨‍💻
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-gray-600 dark:text-gray-300 italic"
            >
              Building practical solutions, one line of code at a time.
            </motion.div>
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
              I'm <strong className="text-gray-800 dark:text-white">NZASINGIZIMANA Jean Bonheur</strong>, a Year 2 Information Technology student and software developer based in Kigali, Rwanda. My journey began with a curiosity for technology, leading me to build functional, real-world applications rather than just studying theory.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
              I'm comfortable across <strong className="text-gray-800 dark:text-white">Python, PHP, and JavaScript</strong>, with a solid grounding in networking fundamentals and IT support gained through direct consulting experience. I've built everything from a full business management system in Excel to a multi-language web platform for bus ticket booking.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">IT Consultant</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">Software Developer</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">Network Enthusiast</span>
            </div>
            <motion.a
              href="/resume.pdf"
              download="Jean_Bonheur_Nzasingizimana_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <figure className="my-8">
          <motion.blockquote
            key={currentMilestone}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300 italic bg-gray-200 dark:bg-gray-800 px-6 py-4 rounded-lg max-w-2xl mx-auto text-center relative"
          >
            <span className="absolute left-4 top-2 text-2xl text-gray-500 dark:text-gray-400">“</span>
            {currentMilestone}
            <span className="absolute right-4 bottom-2 text-2xl text-gray-500 dark:text-gray-400">”</span>
          </motion.blockquote>
        </figure>
      </motion.div>
    </section>
  );
}