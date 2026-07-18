"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Code2, Briefcase } from 'lucide-react';

const ProfessionalHeroSection = () => {
  const stats = [
    { number: '3+', label: 'Projects Built' },
    { number: '1', label: 'IT Consultant' },
    { number: '2', label: 'Years Experience' }
  ];

  const expertise = [
    'Software Development',
    'Python & PHP',
    'IT Support',
    'Business Automation'
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-4 py-2"
            >
              <Code2 size={16} className="text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Software Developer & IT Support</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                NZASINGIZIMANA
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  JEAN BONHEUR
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 font-light"
              >
                Software Developer · IT Support Specialist · Year 2 IT Student
              </motion.p>
            </div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-2xl"
            >
              Building practical solutions with code — from full business management systems 
              to multi-language web platforms. Comfortable across Python, PHP, and JavaScript, 
              with hands-on IT support experience gained through direct consulting.
            </motion.p>

            {/* Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 border rounded-full text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    index === 0 || index === 2 
                      ? 'bg-blue-400/10 border-blue-400/30 text-blue-300' 
                      : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Open to opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase size={16} className="text-blue-400" />
                <span>IT Consultant @ Radiant Company</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/Jean_Bonheur_Resume.pdf"
                download
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400/30 text-white font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <Download size={18} className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image & Stats Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Professional Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 scale-105"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-3xl backdrop-blur-sm border border-blue-400/20">
                <Image
                  src="/images/WhatsApp Image 2026-07-18 at 07.25.21 (1).jpeg"
                  alt="NZASINGIZIMANA Jean Bonheur - Software Developer & IT Support Specialist"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 w-full max-w-md"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`text-center p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105 ${
                    index === 1 
                      ? 'bg-blue-400/10 border-blue-400/30' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 ${
                    index === 1 ? 'text-blue-400' : 'text-white'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <span className="font-medium text-white">RP Musanze College</span> · Year 2 IT · 
              <span className="text-blue-400 ml-1">Diploma in Software Development</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-5 h-8 border border-blue-400/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-blue-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalHeroSection;