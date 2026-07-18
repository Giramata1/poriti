"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff7a] backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-[#ffffff7a] backdrop-blur-md shadow-lg border-b border-gray-200/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            href="#home" 
            className="group flex items-center space-x-3 text-2xl font-bold tracking-tight"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300">
              <FaCode className="text-black text-lg" />
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors">JEAN BONHEUR</span>
              <span className="text-gray-800 ml-2 group-hover:text-gray-600 transition-colors">NZASINGIZIMANA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.id}`}
                    className="relative text-black hover:text-yellow-400 transition-colors duration-300 font-medium tracking-wide group"
                    scroll={true}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={18} /> : <HiMenuAlt3 size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 border-t border-gray-200/20 mt-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.id}`}
                        className="block py-2 px-4 rounded-lg text-black hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                        scroll={true}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <Link
                      href="#contact"
                      className="block w-full text-center py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Let&apos;s Talk
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
