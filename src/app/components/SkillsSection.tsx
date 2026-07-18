"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSkillsSection = () => {
  const technicalSkills = [
    { 
      category: "Programming Languages",
      skills: [
        { name: 'Python', proficiency: 85 },
        { name: 'PHP', proficiency: 80 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'SQL', proficiency: 70 },
        { name: 'HTML5/CSS3', proficiency: 85 }
      ]
    },
    { 
      category: "Web Development & Tools",
      skills: [
        { name: 'Python Web (Flask/Django)', proficiency: 75 },
        { name: 'PHP (Laravel)', proficiency: 70 },
        { name: 'React.js', proficiency: 65 },
        { name: 'Tailwind CSS', proficiency: 75 },
        { name: 'Git/GitHub', proficiency: 70 }
      ]
    },
    { 
      category: "Networking & IT Support",
      skills: [
        { name: 'TCP/IP & OSI Model', proficiency: 80 },
        { name: 'Subnetting & Routing', proficiency: 75 },
        { name: 'Cisco IOS Fundamentals', proficiency: 70 },
        { name: 'IT Troubleshooting', proficiency: 85 },
        { name: 'EBM Operation', proficiency: 80 }
      ]
    },
    { 
      category: "Data & Automation",
      skills: [
        { name: 'Excel Advanced Formulas', proficiency: 90 },
        { name: 'Excel Dashboards', proficiency: 85 },
        { name: 'Data Entry & Management', proficiency: 85 },
        { name: 'Automation Scripts', proficiency: 75 }
      ]
    }
  ];

  const coreCompetencies = [
    {
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend interfaces to backend logic using Python, PHP, and JavaScript."
    },
    {
      title: "IT Support & Consulting", 
      description: "Providing professional IT support, system operation, and technical troubleshooting for businesses and organizations."
    },
    {
      title: "Business Automation",
      description: "Designing automated business management systems using Excel and custom software solutions to streamline operations."
    },
    {
      title: "Network Administration",
      description: "Practical knowledge of networking fundamentals including TCP/IP, subnetting, routing, and Cisco IOS configuration."
    }
  ];

  const professionalSkills = [
    "Problem-Solving & Fast Learning",
    "Teamwork & Communication",
    "IT Support & Troubleshooting",
    "Data Entry & Management",
    "Technical Consulting",
    "Project Management"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive skill set combining software development, IT support, and business automation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
              
              <div className="space-y-8">
                {technicalSkills.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
              <div className="space-y-3">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Kinyarwanda</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">English</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">French</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {competency.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {competency.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Education & Continuous Learning</h3>
            <p className="opacity-90">
              Year 2 Information Technology student at RP Musanze College · Diploma in Software Development from Apeki Tumba TSS
            </p>
            <p className="opacity-75 text-sm mt-2">
              Committed to staying current with emerging technologies and industry best practices through continuous learning and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;