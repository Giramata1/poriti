"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Code2, ShoppingCart } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
  hoverText: string;
  isDesignOnly?: boolean;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Static project data based on Jean Bonheur's resume with custom cart project
    const staticProjects: Project[] = [
      {
        title: "E-Commerce Cart System",
        description: "Interactive shopping cart with real-time updates, price calculations, and checkout flow.",
        link: "/projects/cart",
        github: "#",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
        hoverText: "Fully functional shopping cart with add/remove items, quantity updates, total price calculation, and responsive design.",
        isDesignOnly: true
      },
      {
        title: "Ndaje · Bus Ticket Booking",
        description: "Multi-language web platform for booking public bus tickets across Rwanda.",
        link: "https://ndaje.rw",
        github: "https://github.com/nzasingizimana/ndaje",
        technologies: ["Python", "PHP", "JavaScript", "MySQL", "Tailwind CSS"],
        hoverText: "Full-stack web application with real-time booking, payment integration, and multi-language support. Built with Python, PHP, and JavaScript."
      },
      {
        title: "Shop Management System",
        description: "Complete business management system built entirely in Excel with automated dashboards.",
        link: "#",
        github: "https://github.com/nzasingizimana/shop-management-excel",
        technologies: ["Excel VBA", "Advanced Formulas", "Dashboards", "Data Automation"],
        hoverText: "Full-featured business management system with inventory, sales, invoices, and expense tracking. Automated cross-linked formulas for real-time sync."
      },
      {
        title: "IT Support & Consulting",
        description: "Professional IT support and system management services for insurance companies.",
        link: "#",
        github: "https://github.com/nzasingizimana/it-support-tools",
        technologies: ["IT Support", "Networking", "Troubleshooting", "EBM Operation"],
        hoverText: "Provided IT support and consultancy services at Radiant Company, handling system operations, data management, and technical troubleshooting."
      },
      {
        title: "Network Infrastructure Lab",
        description: "Hands-on networking projects covering TCP/IP, routing, and Cisco IOS fundamentals.",
        link: "#",
        github: "https://github.com/nzasingizimana/networking-lab",
        technologies: ["Cisco IOS", "TCP/IP", "Subnetting", "Routing Protocols"],
        hoverText: "Practical networking exercises and configurations covering OSI model, subnetting, routing, and Cisco IOS fundamentals."
      },
      {
        title: "Python Automation Scripts",
        description: "Collection of Python scripts for automating data processing and system tasks.",
        link: "#",
        github: "https://github.com/nzasingizimana/python-automation",
        technologies: ["Python", "Automation", "Data Processing", "APIs"],
        hoverText: "Reusable Python scripts for data entry automation, file management, and system task automation."
      }
    ];

    setProjects(staticProjects);
  }, []);

  const getGradientColors = (index: number) => {
    const gradients = [
      'from-blue-600 to-indigo-600',
      'from-green-600 to-teal-600',
      'from-red-600 to-orange-600',
      'from-cyan-600 to-blue-600',
      'from-purple-600 to-pink-600',
      'from-yellow-600 to-orange-600',
    ];
    return gradients[index % gradients.length];
  };

  if (error) {
    return (
      <section id="projects" className="py-20 flex items-center justify-center p-6 bg-slate-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">My Projects</h2>
          <p className="text-red-500 mt-4 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              My Projects
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Building Practical Solutions · Code that Solves Real Problems
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const gradient = getGradientColors(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
              >
                {/* Project Header - Gradient Background with Title */}
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center p-6`}>
                  {project.isDesignOnly ? (
                    <div className="flex flex-col items-center justify-center text-white/90">
                      <ShoppingCart size={48} className="mb-2 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Design Preview</span>
                      <span className="text-xs text-white/60 mt-1">UI/UX Concept</span>
                    </div>
                  ) : (
                    <div className="text-center text-white p-4">
                      <h3 className="text-2xl font-bold mb-1">{project.title.split('·')[0].trim()}</h3>
                      <div className="text-sm opacity-80">
                        {project.technologies.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.hoverText}</p>
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.isDesignOnly ? (
                        <div className="flex items-center gap-2 bg-orange-500/80 text-white px-4 py-2 rounded-lg font-medium cursor-default">
                          <ShoppingCart size={16} />
                          Design Only
                        </div>
                      ) : (
                        <>
                          <motion.a
                            href={project.link}
                            target={project.link.startsWith('/') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            <Eye size={16} />
                            {project.link.startsWith('/') ? 'View Project' : 'Live Demo'}
                          </motion.a>
                          {project.github !== '#' && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                            >
                              <Code2 size={16} />
                              Code
                            </motion.a>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.isDesignOnly && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                        Design
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies - Visible Version */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/leatusbonheur"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            More Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </motion.a>
          <p className="text-slate-400 text-sm mt-3">
            Explore my complete portfolio on GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
}